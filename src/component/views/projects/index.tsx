import React, { ForwardedRef } from "react";
import { Grid } from "@mui/material";

import ResumeContext from "provider/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader } from "component/typography";
import ProjectContainer from "./components/ProjectContainer";
import ProjectCard from "./components/ProjectCard";

type Props = {
  id: string;
};

const Projects = React.forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { id } = props;
    const { projects } = React.useContext(ResumeContext);

    return (
      <div id={id} ref={ref}>
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SectionHeader>
                Here are a few of my favorite projects!
              </SectionHeader>
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
      </div>
    );
  }
);

export default Projects;
