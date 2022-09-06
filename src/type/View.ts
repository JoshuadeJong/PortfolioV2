import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmailIcon from "@mui/icons-material/Email";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";

class View {
  static readonly DEV = new View("dev", FlagIcon, "/dev");
  static readonly PORTFOLIO = new View("Portfolio", HomeIcon, "/portfolio");
  static readonly PORTFOLIO_ABOUT = new View(
    "About",
    FaceIcon,
    "/portfolio#about"
  );
  static readonly PORTFOLIO_EMPLOYMENT = new View(
    "Employment",
    WorkIcon,
    "/portfolio#employment"
  );
  static readonly PORTFOLIO_PROJECT = new View(
    "Project",
    TerminalIcon,
    "/portfolio#projects"
  );
  static readonly PORTFOLIO_SKILLS = new View(
    "Skills",
    SchoolIcon,
    "/portfolio#skills"
  );
  static readonly PORTFOLIO_REFERRALS = new View(
    "Referrals",
    Diversity1Icon,
    "/portfolio#referrals"
  );
  static readonly PORTFOLIO_CONNECT = new View(
    "Connect",
    EmailIcon,
    "/portfolio#connect"
  );
  static readonly BLOG = new View("Blog", LibraryBooksIcon, "/blog");
  static readonly TUTORIAL = new View(
    "Tutorials",
    AssignmentIcon,
    "/tutorials"
  );
  static readonly RESUME = new View("Resume", DescriptionIcon, "/resume");

  constructor(
    readonly displayName: string,
    readonly icon: OverridableComponent<SvgIconTypeMap>,
    readonly path: string
  ) {}

  getHash() {
    return this.path.split("#")[1];
  }

  toString() {
    return this.displayName;
  }
}

export default View;
