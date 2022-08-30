import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid"

import {Section} from "component/layout";
import {Par, SectionHeader} from "component/typography";
import Container from "@mui/material/Container";
import {Card, CardActions, CardContent, Paper} from "@mui/material";
import Box from "@mui/material/Box";


type Props = {
    id: string
};

const Referrals = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props

    return (
        <div id={id} ref={ref}>
            <Section>
                <Container maxWidth='md' disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <SectionHeader>
                                Why people love working with me!
                            </SectionHeader>
                        </Grid>
                        <Grid container item xs={12} spacing={4}>
                            { [0, 1, 2].map((index) => {
                                return (
                                    <Grid item sm={4} xs={12}>
                                        <Paper elevation={3}>
                                            <Box sx={{padding: 2}}>
                                                <Par textColor='text.primary'>
                                                    Josh is an awesome dev and an even better tech lead! Any team would be luckly to have Josh!
                                                </Par>
                                                <Par noMargin>
                                                    Joe Smith, Senior Engineer @ Amazon
                                                </Par>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Container>

            </Section>
        </div>
    )
})

export default Referrals;