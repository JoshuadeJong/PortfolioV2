import {createTheme, ThemeOptions} from "@mui/material";

// TODO: Add a declaration for the new colors
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
            secondary: '#808080',
            // @ts-ignore
            light: '#ffffffa6',
        },
        // @ts-ignore
        terminal: {
            background: '#262626cc',
            user: '#ea7e7d',
            machine: '#e8d880',
            path: '#7ecdcb',
            text: '#ffffffa6'
        }
    },
    typography: {
        // @ts-ignore
        code: ['Source Code Pro', 'monospace']
    }
});

export default theme;