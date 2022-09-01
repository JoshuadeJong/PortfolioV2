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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

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
              <div id={view.displayName}>
                <LinkButton
                  text={view.displayName}
                  path={view.path}
                  navigate={navigate}
                />
              </div>
            ))}
            {/*<Divider orientation="vertical" flexItem />*/}
            <ResumeButton
              text={View.RESUME.displayName}
              path={View.RESUME.path}
              navigate={navigate}
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
                  text={view.displayName}
                  /* @ts-ignore */
                  icon={<view.icon />}
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log("Implement this!");
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
                  console.log("Implement the resume button");
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
