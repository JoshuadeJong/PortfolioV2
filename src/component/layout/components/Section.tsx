import React from 'react';
import Box from "@mui/material/Box";

type Props = {
    children?: React.ReactNode,
};

function Section(props: Props) {
    const {children} = props
    return (
        <Box
            sx={{
                width: '100%',
                paddingBottom: '10vh',
            }}
        >
            {children}
        </Box>
    )
}

export default Section;