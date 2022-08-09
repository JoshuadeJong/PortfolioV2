import React from 'react';
import {Grid, ThemeOptions, useTheme} from "@mui/material";
import Box from '@mui/material/Box';
import Page from "component/page";

type Props = {
    children?: React.ReactNode,
};

function About(props: Props) {

    return (
        <Box
            sx={{
                width: "100%",
                height: "200vh",
                backgroundColor: "#212529",
            }}
        >
            <Page>
                <Grid container spacing={2} >



                </Grid>
            </Page>
        </Box>
    )
}

export default About;