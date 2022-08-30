import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid"

import {Section} from "component/layout";
import {SectionHeader} from "component/typography";
import ResumeContext from "provider/ResumeContext";



type Props = {
    id: string
};

const Connect = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props
    const {email, linkedin} = React.useContext(ResumeContext);

    return (
        <div id={id} ref={ref}>
            <Section>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <SectionHeader>
                            Let's connect!
                        </SectionHeader>
                    </Grid>
                    <Grid item xs={12} >

                    </Grid>
                </Grid>
            </Section>
        </div>
    )
})

export default Connect;