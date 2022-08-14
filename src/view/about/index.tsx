import React, {ForwardedRef, LegacyRef, RefObject} from 'react';
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';

import Page from "component/page";
import Center from "component/center";
import PageHeader from "component/sectionHeader";

type Props = {
    id: string,
};

const About = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props;
    const textRef = React.useRef(null)

    return (
        <div id={id} ref={ref}>
            <Box
                sx={{
                    width: '100%',
                    height: '200vh',
                    backgroundColor: 'primary.dark',
                }}
            >
                <Page maxWidth='md'>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <PageHeader text="About Me" count={1}/>
                        </Grid>
                        <Grid item sm={12} md={6} ref={textRef}>
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                            Here is a bit about me!
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Center minHeight={'120px'}>
                                This would be an image. I think...
                            </Center>
                        </Grid>
                    </Grid>
                </Page>
            </Box>
        </div>
    )
})

export default About;