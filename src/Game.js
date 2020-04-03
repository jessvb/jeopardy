import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles';
import Card from './Card';
import Title from './Title';
import Box from '@material-ui/core/Box';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStates: Array(Array(5).fill(null)),
      numCategories: this.props.numCategories
    };
  }

  render() {
    const { classes } = this.props;
    let cardrows = [];
    for (let i = 0; i < 5; i++) {
      let keyid = "row" + (i + 1) * 100;
      cardrows[i] = <Grid container item xs={10} spacing={3} key={keyid}>
        <CardRow numCol={this.props.numCategories} currRow={i} key={keyid} />
      </Grid>
    }
    return (
      <div className={classes.root}>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          {cardrows}
        </Grid>
      </div>
    );
  }
}

function CardRow(props) {
  let cards = [];
  let pts = (props.currRow + 1) * 100;
  for (let i = 0; i < props.numCol; i++) {
    let keyid = "col" + i + "-" + pts;
    if (props.currRow !== 0) {
      cards[i] = (<Grid item xs key={keyid}>
        <Card
          text={pts}
          col={i}
          key={keyid}
        /></Grid>);
    } else {
      // If it's the first row, put category titles:
      cards[i] = <Grid item xs key={keyid}>
        <Box  mb={2}>
          <Title text={"Category Name " + i} titleType='category' />
        </Box>
        <Card
          text={pts}
          col={i}
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
