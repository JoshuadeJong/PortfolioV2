import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  onClick: (x: React.MouseEvent<HTMLElement>) => void;
};

function MenuButton(props: Props) {
  const { onClick } = props;

  return (
    <IconButton size="large" onClick={onClick} color="inherit">
      <MenuIcon />
    </IconButton>
  );
}

export default MenuButton;
