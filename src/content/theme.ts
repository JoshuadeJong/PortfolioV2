import {createTheme, responsiveFontSizes} from "@mui/material";

let themeLight = createTheme({
    palette: {
        mode: 'light',
    }
});

let themeDark = createTheme ({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00c7ff',
        },
        background: {
            default: "#000a1f",
            paper: '#000f2e',
        }
    }
});

themeLight = responsiveFontSizes(themeLight)
themeDark = responsiveFontSizes(themeDark)

export {themeLight, themeDark};