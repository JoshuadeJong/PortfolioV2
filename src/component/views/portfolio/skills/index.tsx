import React from "react";
import { Grid } from "@mui/material";

import View from "type/View";
import ResumeContext from "provider/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader, SectionText } from "component/typography";
import SkillCard from "./components/SkillCard";

function Skills() {
  const { skills } = React.useContext(ResumeContext);

  return (
    <Section id={View.PORTFOLIO_SKILLS.getHash()}>
      <Grid container spacing={4}>
        <Grid
          item
          md={4}
          sm={12}
          sx={{
            textAlign: {
              md: "left",
              xs: "center",
            },
          }}
        >
          <SectionHeader line="sm">
            Here is my toolkit for building great products!
          </SectionHeader>
        </Grid>
        <Grid container item md={8} sm={12} spacing={2}>
          {skills.map((skill) => {
            return (
              <Grid item xs={4} sm={3} md={2}>
                <SkillCard skill={skill} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Section>
  );
}

export default Skills;
