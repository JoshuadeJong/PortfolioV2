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
            md: "none",
            sm: "block",
          },
          textAlign: "center",
        }}
      >
        <SectionText display="block">{children}</SectionText>
        <Box
          sx={{
            height: "4px",
            backgroundColor: "primary.main",
            marginTop: "8px",
            // marginLeft: "32px",
            // marginRight: "32px",
          }}
        />
      </Box>

      {/* Desktop View */}
      <Box
        sx={{
          display: {
            md: "flex",
            sm: "none",
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
