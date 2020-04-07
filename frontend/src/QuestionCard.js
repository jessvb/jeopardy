import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './Styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);

        // Set wrapper ref for the 'outside div' click handler
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref for the 'outside this div' click handler. This allows
     * the handler to check if the div with ref is contained within the div that's 
     * clicked or not.
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Handle clicks that are outside the card by routing back to the main game
     * board page.
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.setCurrState('board');
        }
    }

    getColourClass() {
        const { classes } = this.props;
        // get a number between 0 & 4 based on the column:
        const colourNum = this.props.col - 5 * Math.floor(this.props.col / 5);
        return classes[('card' + colourNum)];
    }

    render() {
        // TODO: check state: q/h/a and change card accordingly

        const { classes } = this.props;
        return (
            <Grid container className={classes.titleCardZone}>
                <Grid item>
                    {this.props.category + ': ' + this.props.pts}
                </Grid>
                <div ref={this.setWrapperRef}>
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
                                                <Paper
                                                    className={clsx(classes.verticalCenter, classes.hintBtn)}
                                                    onClick={() => (this.props.setCurrState('hint', 1))}>
                                                    1
                                            </Paper>
                                                <Paper
                                                    className={clsx(classes.verticalCenter, classes.hintBtn)}
                                                    onClick={() => (this.props.setCurrState('hint', 2))}>
                                                    2
                                            </Paper>
                                                <Paper
                                                    className={clsx(classes.verticalCenter, classes.hintBtn)}
                                                    onClick={() => (this.props.setCurrState('hint', 3))}>
                                                    3
                                            </Paper>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Paper
                                    className={clsx(classes.verticalCenter, classes.answerBtnZone)}
                                    onClick={() => (this.props.setCurrState('answer'))}>
                                    Answer
                            </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Grid>
        );
    }
}

export default withStyles((theme) => styles(theme))(QuestionCard);
