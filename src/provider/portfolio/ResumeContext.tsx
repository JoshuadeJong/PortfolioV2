import React from "react";
import Resume from "type/portfolio/Resume";

const ResumeContext = React.createContext<Resume>({
  nameFull: "",
  nameFirst: "",
  email: "",
  github: "",
  linkedin: "",
  skills: [],
  about: [],
  career: [],
  projects: [],
  referrals: [],
  connectMessage: "",
});

export default ResumeContext;
