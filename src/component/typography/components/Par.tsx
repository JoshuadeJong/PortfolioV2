import React from 'react';
import Typography from "@mui/material/Typography";

type Props = {
    noMargin?: boolean
    children?: React.ReactNode,
};

function Par(props: Props) {
    const {noMargin, children} = props
    return (
        <Typography
            variant='body1'
            sx={{
                marginBottom: noMargin ? 'none' : '1rem',
                color: 'text.secondary'
            }}
        >
            {children}
        </Typography>
    )
}

export default Par;