import React from 'react';
import Box from "@mui/material/Box";

type Props = {
    children?: React.ReactNode,
};

function HighlightText(props: Props) {
    const {children} = props
    return (
        <Box
            sx={{
                color: 'primary.main',
                display: 'inline-block',
            }}
        >
            {children}
        </Box>
    )
}

export default HighlightText;