import React from "react";
import { Grid } from "@mui/material";

import View from "type/View";
import ResumeContext from "provider/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader } from "component/typography";

function Connect() {
  const { email, linkedin } = React.useContext(ResumeContext);

  return (
    <Section id={View.PORTFOLIO_CONNECT.getHash()}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SectionHeader>Let's connect!</SectionHeader>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Section>
  );
}

export default Connect;
