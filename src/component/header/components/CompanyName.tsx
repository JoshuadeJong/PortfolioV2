import React from 'react';
import Typography from "@mui/material/Typography";
import ResumeContext from "provider/ResumeContext";

function CompanyName() {
    const {name} = React.useContext(ResumeContext);

    return (
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'text.secondary',
                textDecoration: 'none',
            }}
        >
            {name}
        </Typography>
    )
}

export default CompanyName;