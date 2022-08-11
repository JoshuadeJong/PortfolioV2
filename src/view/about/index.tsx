import React from 'react';
import Box from '@mui/material/Box';

import Page from "component/page";
import PageHeader from "component/sectionHeader";

type Props = {
    children?: React.ReactNode,
};

function About(props: Props) {

    return (
        <Box
            sx={{
                width: '100%',
                height: '200vh',
                backgroundColor: 'primary.dark',
            }}
        >
            <Page maxWidth='xl'>
                <PageHeader text="About Me" count={1}/>
            </Page>
        </Box>
    )
}

export default About;