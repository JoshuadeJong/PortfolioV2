import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid"

import {Section} from "component/layout";
import {SectionHeader} from "component/typography";
import Container from "@mui/material/Container";


type Props = {
    id: string
};

const Referrals = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props

    return (
        <div id={id} ref={ref}>
            <Section>
                <Container maxWidth='md' disableGutters>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SectionHeader>
                                Why people love working with me!
                            </SectionHeader>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            that
                        </Grid>
                        <Grid item md={4} sm={12}>
                            that
                        </Grid>
                        <Grid item md={4} sm={12}>
                            that
                        </Grid>
                    </Grid>
                </Container>

            </Section>
        </div>
    )
})

export default Referrals;