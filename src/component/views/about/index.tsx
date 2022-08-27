import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';

import {Page, Section, Center} from "component/layout";
import PageHeader from "component/sectionHeader";
import ResumeContext from "provider/ResumeContext";

type Props = {
    id: string,
};

const About = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props;
    const {about} = React.useContext(ResumeContext);
    const photoRef = React.createRef<HTMLDivElement>();
    const [photoHeight, setPhotoHeight] = React.useState(0);

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            if (photoRef.current) {
                setPhotoHeight(photoRef.current?.offsetHeight)
            }
        }
        if (photoRef.current) {
            setPhotoHeight(photoRef.current?.offsetHeight)
        }
        window.addEventListener('resize', updateWindowDimensions)
        return () => window.removeEventListener('resize', updateWindowDimensions)
    })

    return (
        <div id={id} ref={ref}>
            <Section>
                <Page maxWidth='md'>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <div ref={photoRef}>
                                <PageHeader text="About Me" count={1}/>
                                <Box
                                    sx={{
                                        color: 'text.light'
                                    }}
                                >
                                    {about.map((element) => {
                                        return (
                                            <p>
                                                {element}
                                            </p>
                                        )
                                    })}
                                </Box>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Center minHeight={`${photoHeight}px`}>
                                <div>
                                    This would be an image. I think...
                                </div>
                            </Center>
                        </Grid>
                    </Grid>
                </Page>
            </Section>
        </div>
    )
})

export default About;