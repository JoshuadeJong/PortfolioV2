import React from "react";
import { Grid } from "@mui/material";

import View from "type/View";
import ResumeContext from "provider/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader } from "component/typography";
import ProjectContainer from "./components/ProjectContainer";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  const { projects } = React.useContext(ResumeContext);

  return (
    <Section id={View.PORTFOLIO_PROJECT.getHash()}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SectionHeader>Here are a few of my favorite projects!</SectionHeader>
        </Grid>
        {projects.map((project, index) => {
          return (
            <Grid item xs={12} sx={{ marginBottom: 4 }}>
              <ProjectContainer
                project={project}
                imagePath={project.imagePath}
                reverse={index % 2 === 1}
              >
                <ProjectCard project={project} />
              </ProjectContainer>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Projects;
