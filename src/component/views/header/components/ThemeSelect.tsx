import React from "react";
import { IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import SessionContext from "provider/SessionContext";

type Props = {
  marginLeftRight?: number;
  size?: "small" | "large" | "medium";
};

function ThemeSelect(props: Props) {
  const { size, marginLeftRight } = {
    ...props,
    marginLeftRight: props.marginLeftRight || 2,
    size: props.size || "medium",
  };
  const { currentTheme, setCurrentTheme } = React.useContext(SessionContext);

  return (
    <IconButton
      size={size}
      onClick={() =>
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
      sx={{
        color: "text.secondary",
        marginRight: marginLeftRight,
        marginLeft: marginLeftRight,
      }}
    >
      {currentTheme === "light" ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
  );
}

export default ThemeSelect;
