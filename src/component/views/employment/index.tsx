import React, {ForwardedRef} from 'react';
import {Grid, Tab, Tabs,} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import {Section} from "component/layout";
import {HighlightText, SectionHeader} from "component/typography";
import TabPanel from "./components/TabPanel";
import ResumeContext from "provider/ResumeContext";
import TabContent from "./components/TabContent";
import TabMenu from "./components/TabMenu";

type Props = {
    id: string
};

const Employment = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props
    const {career} = React.useContext(ResumeContext);
    const [value, setValue] = React.useState(0);

    return (
        <div id={id} ref={ref}>
            <Section>
                <Container maxWidth='md' disableGutters={true}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SectionHeader>
                                Awesome places I've worked at!
                            </SectionHeader>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                width: {
                                    md: '20%',
                                    sm: '100%',
                                    xs: '100%',
                                }
                            }}
                        >
                            <TabMenu value={value} setValue={setValue} career={career}/>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                width: {
                                    md: '80%',
                                    sm: '100%',
                                }
                            }}
                        >
                            {career.map((employment, index) => {
                                return (
                                    <TabPanel value={value} index={index}>
                                        <TabContent employment={employment}/>
                                    </TabPanel>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Container>
            </Section>
        </div>
    )
})

export default Employment;