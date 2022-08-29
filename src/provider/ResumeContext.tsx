import React from 'react';
import Resume from "type/Resume";

const ResumeContext = React.createContext<Resume>(
    {
        skills: [],
        about: [],
        email: "",
        github: "",
        linkedin: "",
        nameFull: "",
        nameFirst: "",
        career: [],
        projects: [],
    }
)

export default ResumeContext;