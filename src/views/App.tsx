import React from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "constants/themeOptions";
import ResumeContext from "context/ResumeContext";
import resume from "constants/resume";

import Header from "components/header";
import Home from "views/home";
import WaveIn from "components/waveIn";
import About from "views/about";

function App() {
    return (
      <ThemeProvider theme={theme}>
          <ResumeContext.Provider value={resume}>
              <Header/>
              <Home/>
              <WaveIn/>
              <About/>
          </ResumeContext.Provider>
      </ThemeProvider>
    );
}

export default App;
