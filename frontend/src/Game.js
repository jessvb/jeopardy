import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles';
import PointsCard from './PointsCard';
import QACard from './QACard';
import Title from './Title';
import Box from '@material-ui/core/Box';
import Papa from 'papaparse';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrState = this.setCurrState.bind(this);
    this.addPointsManually = this.addPointsManually.bind(this);
    this.state = {
      currState: 'board', // board, question, hint, answer
      categories: null,
      cardsAnswered: null, // array of true/falses per card -> if true -> card greyed out
      currCardInd: { col: null, row: null },
      currHint: null,
      team1pts: 0,
      team2pts: 0,
      csv: null,
    };
  }

  /**
   * Handler to set the Game state (i.e., whether the view shows the game board, a
   * question, a hint, or an answer) from within a subcomponent (i.e., a QuestionCard).
   * @param {*} state : string containing, 'board', 'question', 'hint', or 'answer'
   */
  setCurrState(state, hint, currCardInd) {
    let newState = { currState: state };
    if (hint) {
      newState.currHint = hint;
    }
    if (currCardInd) {
      newState.currCardInd = currCardInd;
    }
    this.setState(newState);
  }

  /**
   * Sets cardsAnswered at the specified row and column to true (or false, if specified by
   * changeToFalse=true). This causes the card to be 'greyed out', indicating it has been
   * answered.
   * @param {*} row 
   * @param {*} col 
   */
  setAnswered(row, col, changeToFalse) {
    let newCardsAnswered = this.state.cardsAnswered.slice(); // copy the array so that we don't mutate it
    if (!changeToFalse) {
      newCardsAnswered[row][col] = true;
    } else {
      newCardsAnswered[row][col] = false;
    }
    this.setState({ cardsAnswered: newCardsAnswered });
  }

  addPoints(teamNum, row) {
    if (teamNum === 1) {
      let prevPts = this.state.team1pts;
      this.setState({ team1pts: (prevPts + Game.getPoints(row)) });
    } else if (teamNum === 2) {
      let prevPts = this.state.team2pts;
      this.setState({ team2pts: (prevPts + Game.getPoints(row)) });
    } else {
      console.error('Unknown team number, ' + teamNum + '. Points weren\'t added.');
    }
  }

  componentDidMount() {
    window.addpts = this.addPointsManually;
  }

  handleCSVUpload(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (function (event) {
      var csvData = event.target.result;
      const cats = this.readInfo(csvData, 'c'); // c -> categories
      const newState = { csv: csvData, categories: cats };
      this.resetCardsAnswered(newState.csv);
      this.setState(newState);
    }).bind(this);
    reader.onerror = function () {
      alert('Unable to read ' + file.fileName +
        '. Is it a CSV file? Is it in the format as outlined by the readme?');
    };
  }

  resetCardsAnswered(csv) {
    // set the states of all the cards to be 'unanswered'
    // i.e., fill an array size of numCategories x 5 (since 500 points max) to falses
    let cards = [];
    let numCategories = this.readInfo(csv, 'c').length;
    for (let row = 0; row < 5; row++) {
      cards.push([]);
      for (let col = 0; col < numCategories; col++) {
        cards[row].push(false);
      }
    }
    this.setState({ cardsAnswered: cards });
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
    const jsonCsv = Papa.parse(csv, {
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
    return this.readInfo(this.state.csv, 'h' + row + '_' + (parseInt(num) - 1))[col];;
  }

  /**
   * Add bonus points manually from the console. 
   * @param {*} pts 
   * @param {*} teamNum 
   */
  addPointsManually(pts, teamNum) {
    if (teamNum === 1) {
      let prevPts = this.state.team1pts;
      this.setState({ team1pts: (prevPts + pts) });
    } else if (teamNum === 2) {
      let prevPts = this.state.team2pts;
      this.setState({ team2pts: (prevPts + pts) });
    } else {
      console.error('Unknown team number, ' + teamNum + '. Points weren\'t added.');
    }
  }

  /**
   * Calculates the number of points based on the row index of the card.
   * @param {*} row : index of the row (0-4)
   */
  static getPoints(row) {
    return (row + 1) * 100;
  }

  createGameBoard() {
    const { classes } = this.props;
    let gameBoard;
    let cards = [];
    for (let i = 0; i < 5; i++) {
      let keyid = "row" + Game.getPoints(i);
      cards[i] =
        (<Grid container item key={keyid}>
          <CardRow
            categories={this.state.categories}
            currRow={i}
            rowAnswered={this.state.cardsAnswered[i]}
            setCurrState={this.setCurrState}
            key={keyid} />
        </Grid>);
    }
    gameBoard = (<Grid container className={classes.boardZone}>
      <Grid style={{ width: '80vw', marginTop: '2vh' }} item>
        {cards}
      </Grid>
      <Grid item>
        <Grid container className={classes.teamBoardZone}>
          <Grid item>
            Team 1: {this.state.team1pts} pts
                </Grid>
          <Grid item>
            Team 2: {this.state.team2pts} pts
                </Grid>
        </Grid>
      </Grid>
    </Grid>);
    return gameBoard;
  }

  createQACard(mainText) {
    return (<QACard
      text={mainText}
      category={this.state.categories[this.state.currCardInd.col]}
      pts={Game.getPoints(this.state.currCardInd.row)}
      col={this.state.currCardInd.col}
      currState={this.state.currState}
      setCurrState={this.setCurrState}
      setAnswered={() => this.setAnswered(this.state.currCardInd.row, this.state.currCardInd.col)}
      addPoints={(teamNum) => this.addPoints(teamNum, this.state.currCardInd.row)}
      // need hints a priori to render hint buttons correctly
      hint1={this.getHint(this.state.currCardInd.row, this.state.currCardInd.col, 1)}
      hint2={this.getHint(this.state.currCardInd.row, this.state.currCardInd.col, 2)}
      hint3={this.getHint(this.state.currCardInd.row, this.state.currCardInd.col, 3)}
      key={'question'}
    />);
  }

  render() {
    const { classes } = this.props;
    let currGameBoard;
    let extraRootStyle = {};
    if (!this.state.categories) {
      // render upload state:
      currGameBoard = (
        <div>
          <p>
            Upload a CSV file with questions and answers, as described by the "custom jeopardy questions and answers section" of the <span> </span>
            <a href="https://github.com/jessvb/jeopardy/blob/static-upload-csv/README.md#custom-jeopardy-questions-and-answers">readme</a> <span> </span>
            and <a href="https://github.com/jessvb/jeopardy/blob/static-upload-csv/src/jeopardy_qa.template.csv">shown in the example on GitHub</a>.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', }}>
            <input type="file" name="File Upload" accept=".csv" onChange={(e) => { this.handleCSVUpload(e) }} />
          </div>
        </div>
      );
    } else {
      let mainText = '';
      let isQAH = false; // is question/answer/hint
      switch (this.state.currState) {
        case 'board':
          extraRootStyle = {};
          currGameBoard = this.createGameBoard();
          break;
        case 'question':
          mainText = this.getQuestion(this.state.currCardInd.row, this.state.currCardInd.col);
          isQAH = true;
          break;
        case 'hint':
          mainText = this.state.currHint;
          isQAH = true;
          break;
        case 'answer':
          mainText = this.getAnswer(this.state.currCardInd.row, this.state.currCardInd.col);
          isQAH = true;
          break;
        default:
          currGameBoard = (<div>That's strange! The system reached an unknown state...
            Try refreshing.</div>);
      }
      if (isQAH) {
        extraRootStyle = { backgroundColor: '#f8f8f8' };
        currGameBoard = this.createQACard(mainText);
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
    let card =
      (<PointsCard
        text={pts}
        col={col}
        row={props.currRow}
        answered={props.rowAnswered[col]}
        setCurrState={props.setCurrState}
        key={keyid}
      />);
    if (props.currRow !== 0) {
      cards[col] =
        (<Grid item xs key={keyid}>
          {card}
        </Grid>);
    } else {
      // If it's the first row, put category titles:
      cards[col] =
        (<Grid item xs key={keyid}>
          <Box mb={2}>
            <Title text={props.categories[col]} titleType='category' />
          </Box>
          {card}
        </Grid>);
    }
  }
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

export default withStyles(styles)(Game);
