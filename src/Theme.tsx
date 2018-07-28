import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#fff',
            dark: '#002884',
            light: '#757ce8',
            main: '#3f50b5',
        },
        secondary: {
            contrastText: '#000',
            dark: '#ba000d',
            light: '#ff7961',
            main: '#f44336',
        },
    },
});


export default theme;
