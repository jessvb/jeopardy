import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles';
import Card from './Card';
import Title from './Title';
import Box from '@material-ui/core/Box';
import Papa from 'papaparse';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      cardStates: Array(Array(5).fill(null)),
      currState: 'board', // board, q, h, a (question, hint, answer)
      csv: null,
    };
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

  render() {
    const { classes } = this.props;
    let cardrows;
    if (!this.state.categories) {
      // render loading state:
      cardrows = (<div>Loading...</div>);
    } else {
      cardrows = [];
      for (let i = 0; i < 5; i++) {
        let keyid = "row" + (i + 1) * 100;
        cardrows[i] = <Grid container item xs={10} spacing={3} key={keyid}>
          <CardRow categories={this.state.categories} currRow={i} key={keyid} />
        </Grid>
      }
    }
    return (
      <div className={classes.root}>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >{cardrows}
        </Grid>
      </div>
    );
  }
}

function CardRow(props) {
  let cards = [];
  let pts = (props.currRow + 1) * 100;
  for (let col = 0; col < props.categories.length; col++) {
    let keyid = "col" + col + "-" + pts;
    if (props.currRow !== 0) {
      cards[col] = (<Grid item xs key={keyid}>
        <Card
          text={pts}
          col={col}
          key={keyid}
        /></Grid>);
    } else {
      // If it's the first row, put category titles:
      cards[col] = <Grid item xs key={keyid}>
        <Box mb={2}>
          <Title text={props.categories[col]} titleType='category' />
        </Box>
        <Card
          text={pts}
          col={col}
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
