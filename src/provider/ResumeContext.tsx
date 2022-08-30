import React from 'react';
import Resume from "type/Resume";

const ResumeContext = React.createContext<Resume>(
    {
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
    }
)

export default ResumeContext;