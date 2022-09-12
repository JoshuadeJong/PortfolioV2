import React from "react";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

function Page(props: Props) {
  const { children } = props;
  return <Box sx={{ marginTop: 12, marginBottom: 8 }}>{children}</Box>;
}

export default Page;
