import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmailIcon from "@mui/icons-material/Email";

import Views from "type/Views";

type Props = {
  view: Views;
};

function GetIcon(props: Props) {
  const { view } = props;
  switch (view) {
    case Views.HOME:
      return <HomeIcon />;
    case Views.ABOUT:
      return <FaceIcon />;
    case Views.EMPLOYMENT:
      return <WorkIcon />;
    case Views.SKILLS:
      return <SchoolIcon />;
    case Views.PROJECTS:
      return <TerminalIcon />;
    case Views.CONNECT:
      return <EmailIcon />;
    default:
      return <></>;
  }
}

export default GetIcon;
