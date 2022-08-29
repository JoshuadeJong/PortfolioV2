import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid"

import {Section, Center} from "component/layout";
import {SectionHeader, Par} from "component/typography";
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
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions)
        return () => window.removeEventListener('resize', updateWindowDimensions)
    })

    return (
        <div id={id} ref={ref}>
            <Section>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SectionHeader>
                            Here is a bit about me.
                        </SectionHeader>
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <div ref={photoRef}>
                            {about.map((text) => {
                                return (
                                    <Par>
                                        {text}
                                    </Par>
                                )
                            })}
                        </div>
                    </Grid>
                    <Grid item sm={12} md={7}>
                        <Center minHeight={`${photoHeight}px`}>
                            <div>
                                This would be an image of Rexxi. Of Course!!!
                            </div>
                        </Center>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
})

export default About;