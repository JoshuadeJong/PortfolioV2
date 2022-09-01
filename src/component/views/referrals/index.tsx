import React, { ForwardedRef } from "react";
import { Grid, Container } from "@mui/material";

import ResumeContext from "provider/ResumeContext";
import { Section } from "component/layout";
import { SectionHeader } from "component/typography";
import ReferralCard from "./components/ReferralCard";

type Props = {
  id: string;
};

const Referrals = React.forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { id } = props;
    const { referrals } = React.useContext(ResumeContext);

    return (
      <div id={id} ref={ref}>
        <Section>
          <Container maxWidth="md" disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <SectionHeader>Why people love working with me!</SectionHeader>
              </Grid>
              <Grid container item xs={12} spacing={4}>
                {referrals.map((referral, index) => {
                  return (
                    <Grid item sm={4} xs={12} key={index}>
                      <ReferralCard referral={referral} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Container>
        </Section>
      </div>
    );
  }
);

export default Referrals;
