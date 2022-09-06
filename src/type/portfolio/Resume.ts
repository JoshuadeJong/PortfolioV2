import Employment from "type/portfolio/Employment";
import Skill from "type/portfolio/Skill";
import Project from "type/portfolio/Project";
import Referral from "type/portfolio/Referral";

type Resume = {
  nameFull: string;
  nameFirst: string;
  email: string;
  github: string;
  linkedin: string;
  about: Array<string>;
  career: Array<Employment>;
  skills: Array<Skill>;
  projects: Array<Project>;
  referrals: Array<Referral>;
  connectMessage: string;
};

export default Resume;
