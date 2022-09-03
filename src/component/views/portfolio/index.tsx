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

function Portfolio() {
  return (
    <ResumeContext.Provider value={ResumeContent}>
      <Home />
      <About />
      <Employment />
      <Projects />
      <Skills />
      <Referrals />
      <Connect />
    </ResumeContext.Provider>
  );
}

export default Portfolio;
