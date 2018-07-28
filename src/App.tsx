import * as React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme  from 'src/Theme';
import TopBar from 'src/TopBar';
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <TopBar />
            </MuiThemeProvider>
        );
    }
}

export default App;
