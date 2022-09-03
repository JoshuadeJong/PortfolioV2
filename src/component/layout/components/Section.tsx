import React from "react";
import { Box } from "@mui/material";

type Props = {
  id?: string;
  children?: React.ReactNode;
};

function Section(props: Props) {
  const { children, id } = props;
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        paddingBottom: "10vh",
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
