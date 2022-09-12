import React from "react";
import { Button } from "@mui/material";

type Props = {
  text: string;
  onClick?: () => void;
};

function DesktopResume(props: Props) {
  const { text, onClick } = props;

  return (
    <Button
      key={text}
      variant="outlined"
      onClick={onClick}
      sx={{
        marginLeft: 1,
        pl: 3,
        pr: 3,
        display: "block",
        textTransform: "capitalize",
      }}
    >
      {text}
    </Button>
  );
}

export default DesktopResume;
