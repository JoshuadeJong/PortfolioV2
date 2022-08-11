import React from 'react';
import Box from '@mui/material/Box';

type Props = {
    path: String,
};

function Title(props: Props) {
    const {path} = props
    return (
        <Box
            sx={{
                height: 'inherit',
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {path}
        </Box>
    )
}

export default Title;