import React from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {
  link: string;
  size: "small" | "medium" | "large";
};

function GitHubBtn(props: Props) {
  const { size, link } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    window.open(link);
  };

  return (
    <IconButton size={size} onClick={handleClick}>
      <GitHubIcon fontSize={size} />
    </IconButton>
  );
}

export default GitHubBtn;
