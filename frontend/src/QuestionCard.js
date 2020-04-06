import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './Styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

class QuestionCard extends React.Component {
    getColourClass() {
        const { classes } = this.props;
        // get a number between 0 & 4 based on the column:
        const colourNum = this.props.col - 5 * Math.floor(this.props.col / 5);
        return classes[('card' + colourNum)];
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.titleCardZone}>
                <Grid item>
                    {this.props.category + ': ' + this.props.pts}
                </Grid>
                <Paper className={clsx(classes.qaCard, this.getColourClass())} >
                    <Grid item className={classes.verticalCenter}>
                        {this.props.question}
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.btnZone}>
                            <Grid item >
                                <Paper>
                                    <Grid container className={classes.hintZone}>
                                        <Grid item className={classes.verticalCenter}>
                                            Hints
                                    </Grid>
                                        <Grid item className={classes.hintBtnZone}>
                                            <Paper className={clsx(classes.verticalCenter, classes.hintBtn)}>
                                                1
                                            </Paper>
                                            <Paper className={clsx(classes.verticalCenter, classes.hintBtn)}>
                                                2
                                            </Paper>
                                            <Paper className={clsx(classes.verticalCenter, classes.hintBtn)}>
                                                3
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Paper className={clsx(classes.verticalCenter, classes.answerBtnZone)}>
                                Answer
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles((theme) => styles(theme))(QuestionCard);
