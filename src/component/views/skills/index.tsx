import React, {ForwardedRef} from 'react';
import Grid from "@mui/material/Grid";

import {Section} from "component/layout";
import {SectionText} from "component/typography";
import ResumeContext from "provider/ResumeContext";
import SkillCard from "./components/SkillCard";


type Props = {
    id: string,
};

const Skills = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props;
    const {skills} = React.useContext(ResumeContext);

    return (
        <div id={id} ref={ref}>
            <Section>
                <Grid container spacing={4}>
                    <Grid
                        item
                        md={4}
                        sm={12}
                        sx={{
                            textAlign: {
                                md: 'left',
                                xs: 'center',
                            }
                        }}
                    >
                        <SectionText display='block'>
                            Here is my toolkit for building great products!
                        </SectionText>
                    </Grid>
                    <Grid container item md={8} sm={12} spacing={2}>
                        {skills.map((skill) => {
                            return (
                                <Grid item xs={4} sm={3} md={2}>
                                    <SkillCard skill={skill}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Section>
        </div>
    )

})

export default Skills;