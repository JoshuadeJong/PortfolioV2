import React from 'react';
import {Box} from "@mui/material";
import { keyframes } from '@mui/system';

type Props = {
    children?: React.ReactNode,
};

function Cursor(props: Props) {
    const blink = keyframes`
      0% {
        opacity: 0;
      }
    `;

    return (
        <Box
            sx={{
                display: 'inline-block',
                animation: `${blink} 1.2s steps(2) infinite`
            }}
        >
            |
        </Box>
    )
}

export default Cursor;