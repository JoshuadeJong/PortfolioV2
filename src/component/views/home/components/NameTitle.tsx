import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {GitHubBtn, LinkedinBtn, GetInTouchBtn} from "component/buttons";
import ResumeContext from "provider/ResumeContext";
import {HighlightText} from "component/typography";
import Container from "@mui/material/Container";


function NameTitle() {
    const {nameFirst, github, email, linkedin} = React.useContext(ResumeContext);

    return (
        <Box
            width='100%'
            sx={{
                textAlign: 'center',
            }}
        >
            <Container
                maxWidth='md'
                disableGutters={true}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: 'text.secondary'
                    }}
                >
                    Hi, I'm {nameFirst}!
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        marginBottom: '2vh',
                    }}
                >
                    I build <HighlightText>products</HighlightText> and awesome <HighlightText>teams</HighlightText>.
                </Typography>
                <GitHubBtn size="large" link={github}/>
                <LinkedinBtn size="large" link={linkedin}/>
                <GetInTouchBtn size="large" email={email}/>
            </Container>
        </Box>
    )
}

export default NameTitle;