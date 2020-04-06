import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './Styles';
import clsx from 'clsx';

class PointsCard extends React.Component {
    getColourClass() {
        const { classes } = this.props;
        // get a number between 0 & 4 based on the column:
        const colourNum = this.props.col - 5 * Math.floor(this.props.col / 5);
        return classes[('card' + colourNum)];
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={clsx(classes.pointsCard, this.getColourClass())} wrap="nowrap" >
                {this.props.text}
            </Paper>
        );
    }
}

export default withStyles((theme) => styles(theme))(PointsCard);
