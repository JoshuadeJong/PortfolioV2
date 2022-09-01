import React from 'react';
import {Typography} from "@mui/material";

type Props = {
    display: 'block' | 'inline-block'
    children?: React.ReactNode,
};

function SectionText(props: Props) {
    const {children} = props
    return (
        <Typography
            variant="h4"
            sx={{
                display: 'block',
                margin: '0px auto',
            }}
        >
            {children}
        </Typography>
    )
}

export default SectionText;