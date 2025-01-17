import React from "react";
import { Box, Chip, Paper, Typography, Grid, Stack } from "@mui/material";

import Project from "type/portfolio/Project";
import { Par } from "component/typography";
import { GitHubBtn, LaunchBtn } from "component/buttons";

type Props = {
  project: Project;
};

function ProjectCard(props: Props) {
  const { project } = props;
  return (
    <Box>
      <Box
        sx={{
          marginBottom: 2.5,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "primary.main" }}>
          {project.subTitle}
        </Typography>
        <Typography variant="h5">{project.title}</Typography>
      </Box>
      <Paper elevation={3}>
        <Box
          sx={{
            padding: 2,
          }}
        >
          {project.text.map((paragraph, index) => {
            return (
              <Box key={`${project.title}-par-${index}`}>
                <Par noMargin={index === project.text.length - 1}>
                  {paragraph}
                </Par>
              </Box>
            );
          })}
        </Box>
      </Paper>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Grid container spacing={1}>
          {project.skills.map((skill, index) => {
            return (
              <Grid item key={`${project.title}-skill-${index}`}>
                <Chip label={skill} size="small" variant="outlined" />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: 1,
        }}
      >
        {/* @ts-ignore*/}
        {project.githubLink && (
          <GitHubBtn size="medium" link={project.githubLink} />
        )}
        {project.projectLink && (
          <LaunchBtn size="medium" link={project.projectLink} />
        )}
      </Box>
    </Box>
  );
}

export default ProjectCard;
