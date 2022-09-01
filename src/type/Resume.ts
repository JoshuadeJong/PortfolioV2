import Employment from "type/Employment";
import Skill from "type/Skill";
import Project from "type/Project";
import Referral from "type/Referral";

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
};

export default Resume;
