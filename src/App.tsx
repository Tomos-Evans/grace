import * as React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import FullPages from 'src/FullPages';
import theme  from 'src/Theme';
import './App.css';


class App extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <FullPages />
            </MuiThemeProvider>
        );
    }
}

export default App;
