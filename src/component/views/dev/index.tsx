import React from "react";
import {
  Grid,
  Switch,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";

import FeatureFlag from "type/FeatureFlag";
import SessionContext from "provider/SessionContext";
import { SectionHeader } from "component/typography";
import { Page } from "component/layout";

function Dev() {
  const { featureFlags, setFeatureFlag } = React.useContext(SessionContext);

  let featureFlagList = Object.values(FeatureFlag).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleChange = (
    featureFlag: FeatureFlag,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFeatureFlag(featureFlag, event.target.checked);
  };

  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SectionHeader>Feature Flags</SectionHeader>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {featureFlagList.map((featureFlag, index) => {
              return (
                <Box key={featureFlag.name}>
                  <ListItem>
                    <ListItemText
                      primary={featureFlag.name}
                      secondary={featureFlag.description}
                    />
                    <Switch
                      edge="end"
                      // @ts-ignore
                      checked={featureFlags[featureFlag]}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(featureFlag, event)
                      }
                    />
                  </ListItem>
                  {index < featureFlagList.length - 1 && (
                    <Divider component="li" />
                  )}
                </Box>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Dev;
