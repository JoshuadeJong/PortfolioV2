import React from 'react';
import {Link} from "@mui/material";

type Props = {
    name: string,
    link: string,
}

function CompanyLink(props: Props) {
    const {name, link} = props

    const handleCompanyClick = (event: React.SyntheticEvent) => {
        // @ts-ignore
        window.open(link);
    }

    return (
        <Link
            // @ts-ignore
            onClick={handleCompanyClick}
            underline="hover"
            sx={{
                cursor: "pointer",
            }}
        >
            {name}
        </Link>
    )
}

export default CompanyLink;