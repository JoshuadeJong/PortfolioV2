import React from 'react';
import Typography from "@mui/material/Typography";
import {ThemeOptions, useTheme} from "@mui/material";
import ResumeContext from "../../../context/ResumeContext";

type Props = {};

function CompanyName(props: Props) {
    const {name} = React.useContext(ResumeContext);
    const theme: ThemeOptions = useTheme();

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
                color: theme.palette?.text?.secondary,
                textDecoration: 'none',
            }}
        >
            {name}
        </Typography>
    )
}

export default CompanyName;