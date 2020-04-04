import React from 'react';
import {
    withStyles
} from '@material-ui/core/styles';
import styles from './Styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const fontFam = {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
};
let theme = createMuiTheme({
    typography: {
        h1: fontFam,
        h2: fontFam,
        h3: fontFam,
        h4: fontFam,
        h5: fontFam,
    },
});
theme = responsiveFontSizes(theme);

class Title extends React.Component {
    render() {
        let headingSize = 'h1';
        switch (this.props.titleType) {
            case 'category':
                headingSize = 'h4';
                break;
            case 'title':
                headingSize = 'h1';
                break;
            default:
        }
        const title = (<ThemeProvider theme={theme}>
            <Typography variant={headingSize} align="center"><div className="title">{this.props.text}</div></Typography>
        </ThemeProvider>);
        return title;

    }
}

export default withStyles((theme) => styles(theme))(Title);