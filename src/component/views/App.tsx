import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  PaletteMode,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";

import { themeLight, themeDark } from "content/theme";
import SessionContext from "provider/SessionContext";
import View from "type/View";

// Views
import Error from "./error";
import Header from "./header";
import Portfolio from "./portfolio";

function App() {
  const [currentTheme, setCurrentTheme] = React.useState<PaletteMode>("dark");

  const { pathname, hash, key } = useLocation();
  React.useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        document.getElementById(id)?.scrollIntoView();
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <ThemeProvider theme={currentTheme === "light" ? themeLight : themeDark}>
      <CssBaseline />
      <SessionContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <Header />
        <Container maxWidth="lg">
          {/*  Routing */}
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path={View.PORTFOLIO.path} element={<Portfolio />} />
            <Route path={View.BLOG.path} element={<Error code={501} />} />
            <Route path={View.TUTORIAL.path} element={<Error code={501} />} />
            <Route path={View.RESUME.path} element={<Error code={501} />} />

            <Route path={"*"} element={<Error code={404} />} />
          </Routes>
        </Container>
      </SessionContext.Provider>
    </ThemeProvider>
  );
}

export default App;
