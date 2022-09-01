import React from "react";

import ResumeContext from "provider/ResumeContext";
import ResumeContent from "content/ResumeContent";

import Home from "./home";
import Employment from "./employment";
import Projects from "./projects";
import Skills from "./skills";
import Referrals from "./referrals";
import About from "./about";
import Connect from "./connect";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

function Portfolio(props: Props) {
  return (
    <ResumeContext.Provider value={ResumeContent}>
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="employment">
        <Employment />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="referrals">
        <Referrals />
      </Box>
      <Box id="connect">
        <Connect />
      </Box>
    </ResumeContext.Provider>
  );
}

export default Portfolio;
