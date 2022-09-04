import React from "react";
import { Typography, Box, Container } from "@mui/material";

import { GitHubBtn, LinkedinBtn, EmailBtn } from "component/buttons";
import { HighlightText } from "component/typography";

type Props = {
  name: string;
  github: string;
  linkedin: string;
  email: string;
};

function NameTitle(props: Props) {
  const { name, github, email, linkedin } = props;

  return (
    <Box
      width="100%"
      sx={{
        textAlign: "center",
      }}
    >
      <Container maxWidth="md" disableGutters={true}>
        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
          }}
        >
          Hi, I'm {name}!
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "2vh",
          }}
        >
          I build <HighlightText>products</HighlightText> and awesome{" "}
          <HighlightText>teams</HighlightText>.
        </Typography>
        <GitHubBtn size="large" link={github} />
        <LinkedinBtn size="large" link={linkedin} />
        <EmailBtn size="large" email={email} />
      </Container>
    </Box>
  );
}

export default NameTitle;
