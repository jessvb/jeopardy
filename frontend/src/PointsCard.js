import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './Styles';
import clsx from 'clsx';

class PointsCard extends React.Component {
    getColourClass() {
        const { classes } = this.props;
        let className = '';
        if (this.props.answered) {
            // the card should be greyed out
            className = 'greyedOut';
        } else {
            // the card hasn't been answered yet, so it should be coloured.
            // get a number between 0 & 4 based on the column:
            const colourNum = this.props.col - 5 * Math.floor(this.props.col / 5);
            className = ('card' + colourNum);
        }
        return classes[className];
    }
    render() {
        const { classes, setCurrState, row, col } = this.props;
        return (
            <Paper
                className={clsx(classes.pointsCard, this.getColourClass())}
                wrap="nowrap"
                onClick={function () {
                    setCurrState('question', null, { row: row, col: col });
                }}
            >
                {this.props.text}
            </Paper>
        );
    }
}

export default withStyles((theme) => styles(theme))(PointsCard);
