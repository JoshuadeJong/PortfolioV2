import React from "react";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingLeft: "16px",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
