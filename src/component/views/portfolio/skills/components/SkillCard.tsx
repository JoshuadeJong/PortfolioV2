import React from "react";
import { Box, Typography } from "@mui/material";

import Skill from "type/portfolio/Skill";
import { Center } from "component/layout";

type Props = {
  skill: Skill;
  children?: React.ReactNode;
};

function SkillCard(props: Props) {
  const { skill } = props;
  const imageSize = 64;
  return (
    <Box>
      <Box sx={{ marginBottom: "16px" }}>
        <Center minHeight={`${imageSize}px`}>
          <img src={skill.iconPath || "error.jpg"} height={imageSize} />
        </Center>
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", textAlign: "center" }}
      >
        {skill.name}
      </Typography>
    </Box>
  );
}

export default SkillCard;
