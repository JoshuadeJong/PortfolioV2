import React from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "constant/themeOptions";
import ResumeContext from "context/ResumeContext";
import resume from "constant/resume";

import Header from "component/header";
import Home from "view/home";
import WaveIn from "component/waveIn";
import About from "view/about";

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
