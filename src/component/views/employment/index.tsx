import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';

import {Page, Section, Center} from "component/layout";
import PageHeader from "component/sectionHeader";
import ResumeContext from "provider/ResumeContext";

type Props = {
    id: string,
};

const Employment = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props;

    return (
        <div id={id} ref={ref}>
            <Section backgroundColor='primary.dark'>
                <Page maxWidth='md'>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <PageHeader text="Where I've Worked" count={2}/>
                            <Box
                                sx={{
                                    color: 'text.light'
                                }}
                            >
                                <p>Why Hello there</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Page>
            </Section>
        </div>
    )
})

export default Employment;