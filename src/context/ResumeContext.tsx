import React from 'react';

type Resume = {
    name: String,
    title: String,
    currentEmployer: String,
    currentEmployerLink: String,
    email: String,
    github: String,
    linkedin: String,
}


const ResumeContext = React.createContext<Resume>(
    {currentEmployer: "", currentEmployerLink: "", email: "", github: "", linkedin: "", name: "", title: ""}
)

export default ResumeContext;
export type {Resume};