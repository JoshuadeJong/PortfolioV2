import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import GitHubBtn from "component/gitHubBtn";
import LinkedinBtn from "component/linkedinBtn";
import GetInTouchBtn from "component/getInTouchBtn";
import ResumeContext from "provider/ResumeContext";


function NameTitle() {
    const {name, title, currentEmployer, currentEmployerLink} = React.useContext(ResumeContext);

    const handleCompanyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        window.open(currentEmployerLink);
    }

    return (
        <Box
            width='100%'
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: '5.5rem',
                    fontWeight: 500,
                }}
            >
                {name}
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 300,
                    color: 'text.secondary'
                }}
            >
                <span>
                    {title} at
                    {" "}
                    <Link
                        // @ts-ignore
                        onClick={handleCompanyClick}
                        sx={{
                            cursor: "pointer",
                            fontWeight: 300,
                            color: 'text.secondary'
                        }}
                    >
                        {currentEmployer}
                    </Link>
                </span>
            </Typography>
            <GitHubBtn size="large"/>
            <LinkedinBtn size="large"/>
            <GetInTouchBtn size="large"/>
        </Box>
    )
}

export default NameTitle;