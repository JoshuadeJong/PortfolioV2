import React from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import View from "type/View";
import FeatureFlag from "type/FeatureFlag";
import SessionContext from "provider/SessionContext";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import HideOnScroll from "./components/HideOnScroll";

function Header() {
  const { featureFlags } = React.useContext(SessionContext);

  let mainViews = [
    View.PORTFOLIO,
    // @ts-ignore
    ...(featureFlags[FeatureFlag.BLOG] ? [View.BLOG] : []),
    // @ts-ignore
    ...(featureFlags[FeatureFlag.DEV] ? [View.DEV] : []),
  ];

  const subViews = new Map<View, Array<View>>([
    [
      View.PORTFOLIO,
      [
        View.PORTFOLIO_ABOUT,
        View.PORTFOLIO_EMPLOYMENT,
        View.PORTFOLIO_PROJECT,
        View.PORTFOLIO_SKILLS,
        View.PORTFOLIO_REFERRALS,
        View.PORTFOLIO_CONNECT,
      ],
    ],
    [View.BLOG, [View.BLOG_ARTICLE, View.BLOG_TUTORIAL]],
  ]);

  const [isHidden, setIsHidden] = React.useState(false);

  const navigate = useNavigate();
  const handleLinkClick = React.useCallback(
    (path: string, replace: boolean) => navigate(path, { replace: replace }),
    [navigate]
  );

  return (
    <HideOnScroll setIsHidden={setIsHidden}>
      <AppBar
        color="transparent"
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: "background.transparent",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", sm: "flex" },
                marginLeft: "auto",
              }}
            >
              <DesktopMenu
                mainViews={mainViews}
                subViews={subViews}
                handleLinkClick={handleLinkClick}
                isHidden={isHidden}
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
              <MobileMenu
                mainViews={mainViews}
                subViews={subViews}
                handleLinkClick={handleLinkClick}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
