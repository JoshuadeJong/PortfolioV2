import Employment from "type/Employment";
import Skill from "type/Skill";
import Project from "type/Project";

type Resume = {
    nameFull: string,
    nameFirst: string,
    email: string,
    github: string,
    linkedin: string,
    about: Array<string>,
    career: Array<Employment>
    skills: Array<Skill>,
    projects: Array<Project>,
}

export default Resume;