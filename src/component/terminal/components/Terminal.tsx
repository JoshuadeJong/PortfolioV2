import React from 'react';
import Box from '@mui/material/Box';
import Title from "./Title";
import Buttons from "./Buttons";
import Prompt from "./Prompt";
import {ThemeOptions, useTheme} from "@mui/material";


type Props = {
    children?: React.ReactNode,
};

function Terminal(props: Props) {
    const theme: ThemeOptions = useTheme()
    const {children} = props;

    return (
        <Box
            sx={{
                backgroundColor: 'terminal.background',
                color: 'text.light',
                borderRadius: '8px',
                boxShadow: '0 1px 10px rgba(0, 0, 0, 0.55)',
                width: '100%',
                minHeight: '260px',
                margin: 'auto',
                // @ts-ignore
                fontFamily: theme.typography.code,
                padding: '0 12px',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '24px',
                    margin: '6px 0',
                }}
            >
                <Title path="~/Public"/>
                <Buttons/>
            </Box>
            <Box
                sx={{
                    height: '100%',
                    width: '100%',

                    fontSize: '90%',
                    fontWeight: 300,
                    lineHeight: 1.5,
                }}
            >
                <Prompt long />
                {" "}
                {children}
            </Box>
        </Box>
    );
}

export default Terminal;