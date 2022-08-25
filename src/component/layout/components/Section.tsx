import React from 'react';
import Box from "@mui/material/Box";

type Props = {
    backgroundColor: string,
    children?: React.ReactNode,
};

function Section(props: Props) {
    const {backgroundColor, children} = props
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: backgroundColor,
                paddingTop: '15vh',
                paddingBottom: '15vh',
            }}
        >
            {children}
        </Box>
    )
}

export default Section;