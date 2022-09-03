import React from "react";
import { Box } from "@mui/material";

import SectionText from "./SectionText";

type Props = {
  children?: React.ReactNode;
};

function SectionHeader(props: Props) {
  const { children } = props;

  return (
    <>
      {/* Mobile View */}
      <Box
        sx={{
          display: {
            sm: "none",
            xs: "block",
          },
          textAlign: "center",
        }}
      >
        <SectionText display="block">{children}</SectionText>
      </Box>

      {/* Desktop View */}
      <Box
        sx={{
          display: {
            sm: "flex",
            xs: "none",
          },
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <SectionText display="inline-block">{children}</SectionText>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: "4px",
            backgroundColor: "primary.main",
            marginLeft: "32px",
          }}
        />
      </Box>
    </>
  );
}

export default SectionHeader;
