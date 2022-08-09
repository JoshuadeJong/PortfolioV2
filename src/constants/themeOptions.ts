import {createTheme, ThemeOptions} from "@mui/material";

const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: '#515151',
            dark: '#212529',
            light: '#989898',
        },
        secondary: {
            main: '#6c6ce1',
        },
        error: {
            main: '#e25544',
        },
        warning: {
            main: '#f5b640',
        },
        success: {
            main: '#7cb058',
        },
        text: {
            secondary: '#808080'
        },
    },
});

export {theme};