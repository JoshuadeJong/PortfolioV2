import React from 'react';
import {ThemeProvider} from "@mui/material";

import theme from "constant/theme";
import ResumeContext from "provider/ResumeContext";
import resume from "content/resume";

import Header from "component/header";
import Home from "view/home";
import WaveIn from "view/waveIn";
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
