import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ThemeOptions, useTheme} from "@mui/material";

type Props = {
    text: String,
    count: Number,
};

function SectionHeader(props: Props) {
    const theme: ThemeOptions = useTheme()
    const {text, count} = props

    return (
        <Box>
            <Typography
                sx={{
                    color: 'secondary.main',
                    fontSize: '2rem',
                    fontWeight: 400,
                    display: 'inline-block',
                    // @ts-ignore
                    fontFamily: theme.typography.code
                }}
            >
                { String(count).padStart(2, '0') + '.'}
            </Typography>
            {" "}
            <Typography
                sx={{
                    color: 'primary.contrastText',
                    fontSize: '2rem',
                    fontWeight: 400,
                    display: 'inline-block',
                }}
            >
                {text}
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'primary.contrastText',
                    display: 'inline-block'
                }}
            />
        </Box>
    )
}

export default SectionHeader;