import React from "react";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  link: string;
  size: "small" | "medium" | "large";
};

function LinkedinBtn(props: Props) {
  const { link, size } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    window.open(link);
  };

  return (
    <IconButton size={size} onClick={handleClick}>
      <LinkedInIcon fontSize={size} />
    </IconButton>
  );
}

export default LinkedinBtn;
