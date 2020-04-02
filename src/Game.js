import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles';
import Card from './Card';

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
    for (let i = 0; i < this.props.numCategories; i++) {
      let keyid = "row" + (i + 1) * 100;
      cardrows[i] = <Grid container item xs={10} spacing={3} key={keyid}>
        <CardRow numCol={this.props.numCategories} currRow={i} key={keyid} />
      </Grid>
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
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
    cards[i] = (<Grid item xs key={keyid}>
      <Card
        text={pts}
        col={i}
        key={keyid}
      /></Grid>);
  }
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

export default withStyles(styles)(Game);
