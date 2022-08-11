import React from 'react';
import {Box} from "@mui/material";
import Caret from "./Caret";

type Props = {
    long?: Boolean
}

function Prompt(props: Props) {
    const {long} = props

    return (
        <Box
            sx={{
                display: 'inline-block',
            }}
        >
            { long && (
                <>
                    <Box
                        color='terminal.user'
                        display='inline-block'
                    >
                        MaanMan
                    </Box>
                    @
                    <Box
                        color='terminal.machine'
                        display='inline-block'
                    >
                        web-server
                    </Box>
                    {" "}
                </>
            )}
            <Box
                color='terminal.path'
                display='inline-block'
            >
                ~/Public
            </Box>
            {" "}
            <Caret/>
        </Box>
    )
}

export default Prompt;