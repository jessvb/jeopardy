import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles';
import PointsCard from './PointsCard';
import QuestionCard from './QuestionCard';
import Title from './Title';
import Box from '@material-ui/core/Box';
import Papa from 'papaparse';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrState = this.setCurrState.bind(this);
    this.state = {
      currState: 'board', // board, question, hint, answer
      categories: null,
      cardStates: Array(Array(5).fill(null)), // done question -> checkmark
      currCardInd: { col: null, row: null },
      currHintNum: null,
      csv: null,
    };
  }

  /**
   * Handler to set the Game state (i.e., whether the view shows the game board, a
   * question, a hint, or an answer) from within a subcomponent (i.e., a QuestionCard).
   * @param {*} state : string containing, 'board', 'question', 'hint', or 'answer'
   */
  setCurrState(state, hintNum, currCardInd) {
    let newState = { currState: state };
    if (hintNum) {
      newState.currHintNum = hintNum;
    }
    if (currCardInd) {
      newState.currCardInd = currCardInd;
    }
    this.setState(newState);
  }

  componentDidMount() {
    this.callServer();
  }

  callServer() {
    fetch('http://localhost:9000/csvReader').then(res => res.text()).then(res => {
      this.setState({ csv: res });
      const cats = this.readInfo(res, 'c'); // c -> categories
      this.setState({ categories: cats });
    });
  }

  /**
   * Function to read from a string CSV formated with column headers as follows:
   * c, q0, h0, h0, h0, a0, q1, h1, h1, h1, a1, q2, etc., 
   * where c -> category; q -> question; h -> hint; a -> answer)
   * See jeopardy_qa.template.csv for an example CSV file.
   * @param {*} csv : A string of comma separated values
   * @param {*} key : e.g., 'c' to read category, 'q1' to read the second question
   */
  readInfo(csv, key) {
    const jsonCsv = Papa.parse(this.state.csv, {
      header: true
    });
    let categories = [];
    jsonCsv.data.forEach((row) => {
      categories.push(row[key]);
    });
    return categories;
  }

  /**
   * Reads the applicable question from the csv, given the row/column of the card.
   */
  getQuestion(row, col) {
    return this.readInfo(this.state.csv, 'q' + row)[col];
  }

  /**
   * Reads the applicable answer from the csv, given the row/column of the card.
   */
  getAnswer(row, col) {
    return this.readInfo(this.state.csv, 'a' + row)[col];
  }

  /**
   * Reads the applicable hint from the csv, given the row/column of the card
   * and the hint number (1-3).
   */
  getHint(row, col, num) {
    return this.readInfo(this.state.csv, 'h' + row + '_' + (num - 1))[col];
  }

  /**
   * Calculates the number of points based on the row index of the card.
   * @param {*} row : index of the row (0-4)
   */
  static getPoints(row) {
    return (row + 1) * 100;
  }

  render() {
    const { classes } = this.props;
    let currGameBoard;
    let extraRootStyle = {};
    if (!this.state.categories) {
      // render loading state:
      currGameBoard = (<div>Loading...</div>);
    } else {
      switch (this.state.currState) {
        case 'board':
          extraRootStyle = {};
          currGameBoard = [];
          for (let i = 0; i < 5; i++) {
            let keyid = "row" + Game.getPoints(i);
            currGameBoard[i] = <Grid container item xs={10} spacing={3} key={keyid}>
              <CardRow
                categories={this.state.categories}
                currRow={i}
                setCurrState={this.setCurrState}
                key={keyid} />
            </Grid>
          }
          break;
        case 'question':
          extraRootStyle = { backgroundColor: '#f8f8f8' };
          currGameBoard =
            <QuestionCard
              question={this.getQuestion(this.state.currCardInd.row, this.state.currCardInd.col)}
              category={this.state.categories[this.state.currCardInd.col]}
              pts={Game.getPoints(this.state.currCardInd.row)}
              col={this.state.currCardInd.col}
              setCurrState={this.setCurrState}
              key={'question'}
            />
          break;
        case 'hint':
          break;
        case 'answer':
          break;
        default:
          currGameBoard = (<div>That's strange! The system reached an unknown state...
            Try refreshing.</div>);
      }
    }
    return (
      <div className={classes.root} style={extraRootStyle}>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >{currGameBoard}
        </Grid>
      </div>
    );
  }
}

function CardRow(props) {
  let cards = [];
  let pts = Game.getPoints(props.currRow);
  for (let col = 0; col < props.categories.length; col++) {
    let keyid = "col" + col + "-" + pts;
    if (props.currRow !== 0) {
      cards[col] = (<Grid item xs key={keyid}>
        <PointsCard
          text={pts}
          col={col}
          row={props.currRow}
          setCurrState={props.setCurrState}
          key={keyid}
        /></Grid>);
    } else {
      // If it's the first row, put category titles:
      cards[col] = <Grid item xs key={keyid}>
        <Box mb={2}>
          <Title text={props.categories[col]} titleType='category' />
        </Box>
        <PointsCard
          text={pts}
          col={col}
          row={props.currRow}
          setCurrState={props.setCurrState}
          key={keyid}
        />
      </Grid>;
    }
  }
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

export default withStyles(styles)(Game);
