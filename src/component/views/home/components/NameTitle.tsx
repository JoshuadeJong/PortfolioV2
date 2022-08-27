import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {GitHubBtn, LinkedinBtn, GetInTouchBtn} from "component/buttons";
import ResumeContext from "provider/ResumeContext";
import HighlightText from "./HighlightText";
import Container from "@mui/material/Container";




function NameTitle() {
    const {nameFirst, title, currentEmployer, currentEmployerLink} = React.useContext(ResumeContext);


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
                        fontWeight: 400,
                        color: 'text.secondary'
                    }}
                >
                    Hi, I'm {nameFirst}!
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 600,
                        marginBottom: '2vh',
                    }}
                >
                    I build <HighlightText>products</HighlightText> and awesome <HighlightText>teams</HighlightText>.
                </Typography>
                <GitHubBtn size="large"/>
                <LinkedinBtn size="large"/>
                <GetInTouchBtn size="large"/>
            </Container>
        </Box>
    )
}

export default NameTitle;