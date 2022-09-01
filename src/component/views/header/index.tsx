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
import DescriptionIcon from "@mui/icons-material/Description";

import SessionContext from "provider/SessionContext";
import Views from "type/Views";
import MenuButton from "./components/MenuButton";
import LinkButton from "./components/LinkButton";
import ResumeButton from "./components/ResumeButton";
import MobileMenuItem from "./components/MobileMenuItem";
import GetIcon from "./components/GetIcon";

const pages = [Views.ABOUT, Views.EMPLOYMENT, Views.PROJECTS, Views.SKILLS];

function Header() {
  const { jumpToView } = React.useContext(SessionContext);
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
          {/* Desktop */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "flex" },
              marginLeft: "auto",
            }}
          >
            {pages.map((page) => (
              <LinkButton text={page} onClick={() => jumpToView(page)} />
            ))}
            <ResumeButton
              text="Resume"
              onClick={() => console.log("Implement the resume button")}
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
            <SwipeableDrawer
              anchor="top"
              open={isMenuOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List>
                {pages.map((page) => (
                  <MobileMenuItem
                    text={page}
                    icon={<GetIcon view={page} />}
                    onClick={() => {
                      setIsMenuOpen(false);
                      jumpToView(page);
                    }}
                  />
                ))}
                <MobileMenuItem
                  text={Views.CONNECT}
                  icon={<GetIcon view={Views.CONNECT} />}
                  onClick={() => {
                    setIsMenuOpen(false);
                    jumpToView(Views.CONNECT);
                  }}
                />
              </List>
              <Divider />
              <List>
                <MobileMenuItem
                  text="Resume"
                  icon={<DescriptionIcon />}
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log("Implement the resume button");
                  }}
                />
              </List>
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
