import React from "react";
import { Button } from "@mui/material";
import { NavigateFunction } from "react-router-dom";

type Props = {
  text: string;
  path: string;
  navigate: NavigateFunction;
};

function ResumeButton(props: Props) {
  const { text, path, navigate } = props;

  const handleOnClick = React.useCallback(
    () => navigate(path, { replace: true }),
    [navigate]
  );

  return (
    <Button
      key={text}
      variant="outlined"
      onClick={handleOnClick}
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

export default ResumeButton;
