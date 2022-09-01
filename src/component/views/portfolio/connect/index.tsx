import React, { ForwardedRef } from "react";
import { Grid } from "@mui/material";

import ResumeContext from "provider/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader } from "component/typography";

type Props = {};

function Connect(props: Props) {
  const {} = props;
  const { email, linkedin } = React.useContext(ResumeContext);

  return (
    <Section>
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
