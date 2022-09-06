import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Divider,
  List,
  SwipeableDrawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import View from "type/View";
import FeatureFlag from "type/FeatureFlag";
import SessionContext from "provider/SessionContext";
import MenuButton from "./components/MenuButton";
import LinkButton from "./components/LinkButton";
import MenuItem from "./components/MenuItem";
import ResumeButton from "./components/ResumeButton";

const desktop = [
  View.PORTFOLIO_ABOUT,
  View.PORTFOLIO_EMPLOYMENT,
  View.PORTFOLIO_PROJECT,
  View.PORTFOLIO_SKILLS,
];

function Header() {
  const { featureFlags } = React.useContext(SessionContext);
  const navigate = useNavigate();
  const handleOnClick = React.useCallback(
    (path: string) => navigate(path, { replace: true }),
    [navigate]
  );

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsMenuOpen(open);
    };

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "flex" },
              marginLeft: "auto",
            }}
          >
            {/* Buttons */}
            {desktop.map((view) => (
              <div id={view.displayName} key={view.displayName}>
                <LinkButton
                  text={view.displayName}
                  onClick={() => handleOnClick(view.path)}
                />
              </div>
            ))}
            {/*// @ts-ignore*/}
            {featureFlags[FeatureFlag.BLOG] && (
              <>
                <Divider orientation="vertical" flexItem />
                <LinkButton
                  text={View.BLOG.displayName}
                  onClick={() => handleOnClick(View.BLOG.path)}
                />
              </>
            )}
            <ResumeButton
              text={View.RESUME.displayName}
              onClick={() => handleOnClick(View.RESUME.path)}
            />
          </Box>

          {/* Mobile */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", sm: "none" },
              marginLeft: "auto",
            }}
          >
            <MenuButton onClick={toggleDrawer(true)} />
          </Box>

          <SwipeableDrawer
            anchor="top"
            open={isMenuOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <List>
              {desktop.map((view) => (
                <MenuItem
                  key={view.displayName}
                  text={view.displayName}
                  /* @ts-ignore */
                  icon={<view.icon />}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleOnClick(view.path);
                  }}
                />
              ))}
            </List>
            <Divider />
            <List>
              <MenuItem
                text={View.RESUME.displayName}
                /* @ts-ignore */
                icon={<View.RESUME.icon />}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleOnClick(View.RESUME.path);
                }}
              />
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
