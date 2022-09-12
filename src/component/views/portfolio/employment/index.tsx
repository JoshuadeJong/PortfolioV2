import React from "react";
import { Grid, Container } from "@mui/material";

import View from "type/View";
import ResumeContext from "provider/portfolio/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader } from "component/typography";
import TabPanel from "./components/TabPanel";
import TabContent from "./components/TabContent";
import TabMenu from "./components/TabMenu";

function Employment() {
  const { career } = React.useContext(ResumeContext);
  const [value, setValue] = React.useState(0);

  return (
    <Section id={View.PORTFOLIO_EMPLOYMENT.getHash()}>
      <Container maxWidth="md" disableGutters={true}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <SectionHeader>Awesome places I've worked at!</SectionHeader>
          </Grid>
          <Grid
            item
            sx={{
              width: {
                md: "20%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <TabMenu value={value} setValue={setValue} career={career} />
          </Grid>
          <Grid
            item
            sx={{
              width: {
                md: "80%",
                sm: "100%",
              },
            }}
          >
            {career.map((employment, index) => {
              return (
                <TabPanel
                  value={value}
                  index={index}
                  key={`${employment.companyName}-tabPanel`}
                >
                  <TabContent employment={employment} />
                </TabPanel>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
export default Employment;
