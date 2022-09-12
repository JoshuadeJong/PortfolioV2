import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import View from "type/View";
import ResumeContext from "provider/portfolio/ResumeContext";
import { Section } from "component/layout";
import { Par, SectionHeader } from "component/typography";

function Connect() {
  const { email, connectMessage } = React.useContext(ResumeContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(`mailto:${email}`);
  };

  return (
    <Section id={View.PORTFOLIO_CONNECT.getHash()}>
      <Container maxWidth="sm" disableGutters>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <SectionHeader>Let's connect!</SectionHeader>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Par>{connectMessage}</Par>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="outlined" onClick={handleClick} size="large">
              Say Hello
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Connect;
