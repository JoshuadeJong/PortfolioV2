import { createTheme, responsiveFontSizes } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  h1: {
    frontSize: "6rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "4.25rem",
    fontWeight: 600,
  },
  h3: {
    fontSize: "3rem",
    fontWeight: 600,
  },
  h4: {
    fontSize: "2.25rem",
    fontWeight: 550,
  },
  h5: {
    fontSize: "1.75rem",
    fontWeight: 500,
  },
  h6: {
    fontSize: "1.25rem",
    fontWeight: 400,
  },
};

let themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
  typography: typography,
});

let themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00c7ff",
    },
    text: {
      primary: "#fff",
      secondary: "#7b89a8",
    },
    background: {
      default: "#000a1f",
      paper: "#000f2e",
    },
  },
  typography: typography,
});

themeLight = responsiveFontSizes(themeLight);
themeDark = responsiveFontSizes(themeDark);

export { themeLight, themeDark };
