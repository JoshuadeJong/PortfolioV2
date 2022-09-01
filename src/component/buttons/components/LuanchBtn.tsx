import React from "react";
import { IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

type Props = {
  link: string;
  size: "small" | "medium" | "large";
};

function LaunchBtn(props: Props) {
  const { link, size } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    window.open(link);
  };

  return (
    <IconButton size={size} onClick={handleClick}>
      <LaunchIcon fontSize={size} />
    </IconButton>
  );
}

export default LaunchBtn;
