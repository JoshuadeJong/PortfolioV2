import React from 'react';
import Box from '@mui/material/Box';

function Buttons() {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                height: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'error.main',
                    display: 'inline-block',
                    borderRadius: '100px',
                    height: '12px',
                    width: '12px',
                    margin: '0 6px 0 0',
                    cursor: 'pointer',
                }}
            />
            <Box
                sx={{
                    backgroundColor: 'warning.main',
                    display: 'inline-block',
                    borderRadius: '100px',
                    height: '12px',
                    width: '12px',
                    margin: '0 6px 0 0',
                    cursor: 'pointer',
                }}
            />
            <Box
                sx={{
                    backgroundColor: 'success.main',
                    display: 'inline-block',
                    borderRadius: '100px',
                    height: '12px',
                    width: '12px',
                    margin: '0 6px 0 0',
                    cursor: 'pointer',
                }}
            />
        </Box>
    )
}

export default Buttons;