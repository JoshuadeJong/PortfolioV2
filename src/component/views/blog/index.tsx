import React from "react";
import SessionContext from "provider/SessionContext";
import Error from "component/views/error";
import FeatureFlag from "type/FeatureFlag";
import { Box } from "@mui/material";

function Blog() {
  const { featureFlags } = React.useContext(SessionContext);

  // @ts-ignore
  if (!featureFlags[FeatureFlag.BLOG]) {
    return <Error code={404} />;
  }

  return <Box>This is the blog!</Box>;
}

export default Blog;
