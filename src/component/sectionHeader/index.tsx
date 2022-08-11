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
                    fontSize: '1.5rem',
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
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    display: 'inline-block',
                }}
            >
                {text}
            </Typography>
        </Box>
    )
}

export default SectionHeader;