import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './Styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

class QACard extends React.Component {
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

    getHintBtn(hint, hintNum) {
        const { classes } = this.props;
        let hintBtn = // default (no hint) is greyed out:
            (<Paper
                className={clsx(classes.verticalCenter, classes.hintBtn)}
                style={{ backgroundColor: 'darkgrey' }}>
                {hintNum}
            </Paper>);
        if (hint) {
            hintBtn = // there is a hint, so add an onclick etc:
                (<Paper
                    className={clsx(classes.verticalCenter, classes.hintBtn)}
                    onClick={() => (this.props.setCurrState('hint', hint))}>
                    {hintNum}
                </Paper>);
        }
        return hintBtn;
    }

    render() {
        const { classes } = this.props;
        let btns;
        switch (this.props.currState) {
            case 'question':
                let hint1btn = this.getHintBtn(this.props.hint1, 1);
                let hint2btn = this.getHintBtn(this.props.hint2, 2);
                let hint3btn = this.getHintBtn(this.props.hint3, 3);
                btns = (
                    <Grid container className={classes.btnZone}>
                        <Grid item >
                            <Paper>
                                <Grid container className={classes.hintZone}>
                                    <Grid item className={classes.verticalCenter}>
                                        Hints
                                        </Grid>
                                    <Grid item className={classes.hintBtnZone}>
                                        {hint1btn}
                                        {hint2btn}
                                        {hint3btn}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Paper
                            className={clsx(classes.verticalCenter, classes.answerBtnZone)}
                            onClick={() => (this.props.setCurrState('answer'))}>
                            Answer
                        </Paper>
                    </Grid>);
                break;
            case 'hint':
                btns = null; // todo 'go back' buttons
                break;
            case 'answer':
                btns = null; // todo 'team won' buttons
                break;
            default:
                btns = (<div>That's strange! The system reached an unknown state...
                    Try refreshing.</div>);
        }

        return (
            <Grid container className={classes.titleCardZone}>
                <Grid item>
                    {this.props.category + ': ' + this.props.pts}
                </Grid>
                <div ref={this.setWrapperRef}>
                    <Paper className={clsx(classes.qaCard, this.getColourClass())} >
                        <Grid item className={classes.verticalCenter}>
                            {this.props.text}
                        </Grid>
                        <Grid item>
                            {btns}
                        </Grid>
                    </Paper>
                </div>
            </Grid>
        );
    }
}

export default withStyles((theme) => styles(theme))(QACard);
