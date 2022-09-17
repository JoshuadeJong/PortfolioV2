import React from "react";
import { Box, Typography } from "@mui/material";

import Skill from "type/portfolio/Skill";
import SessionContext from "provider/SessionContext";
import { Center } from "component/layout";

type Props = {
  skill: Skill;
  children?: React.ReactNode;
};

function SkillCard(props: Props) {
  const { currentTheme } = React.useContext(SessionContext);
  const { skill } = props;
  const imageSize = 64;
  const [imagePath, setImagePath] = React.useState<string>();

  React.useEffect(() => {
    if (currentTheme === "light" && skill.iconPathLight != null) {
      setImagePath(skill.iconPathLight);
    } else if (currentTheme === "dark" && skill.iconPathDark != null) {
      setImagePath(skill.iconPathDark);
    } else if (skill.iconPath != null) {
      setImagePath(skill.iconPath);
    } else {
      setImagePath("error.jpg");
    }
  }, [currentTheme, skill.iconPath, skill.iconPathDark, skill.iconPathLight]);

  return (
    <Box>
      <Box sx={{ marginBottom: "16px" }}>
        <Center minHeight={`${imageSize}px`}>
          <img src={imagePath} height={imageSize} />
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
