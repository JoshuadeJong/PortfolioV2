import React from 'react';

type Resume = {
    nameFull: String,
    nameFirst: String,
    title: String,
    currentEmployer: String,
    currentEmployerLink: String,
    email: String,
    github: String,
    linkedin: String,
    about: Array<String>,
}


const ResumeContext = React.createContext<Resume>(
    {
        about: [],
        currentEmployer: "",
        currentEmployerLink: "",
        email: "",
        github: "",
        linkedin: "",
        nameFull: "",
        nameFirst: "",
        title: ""
    }
)

export default ResumeContext;
export type {Resume};
