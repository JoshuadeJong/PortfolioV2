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
    primary: {
      main: "#00baff",
    },
    text: {
      secondary: "#828282",
    },
    background: {
      default: "#f8f8f8",
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
      secondary: "#989898", //"#7b89a8",
    },
    background: {
      default: "#000a1f",
      paper: "#000f2e",
      // @ts-ignore
      transparent: "rgba(0,10,31,0.76)",
    },
  },
  typography: typography,
});

themeLight = responsiveFontSizes(themeLight);
themeDark = responsiveFontSizes(themeDark);

export { themeLight, themeDark };
