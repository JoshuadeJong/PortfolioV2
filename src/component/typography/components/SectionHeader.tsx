import React from 'react';
import {Box} from "@mui/material";

import SectionText from "./SectionText";

type Props = {
    children?: React.ReactNode,
};

function SectionHeader(props: Props) {
    const {children} = props

    return (
        <>
            {/* Mobile View */}
            <Box
                sx={{
                    display: {
                        md: 'none',
                        sm: 'block',
                    },
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '30%',
                        height: '4px',
                        backgroundColor: 'primary.main',
                        margin: '32px auto',
                    }}
                />
                <SectionText display='block'>
                    {children}
                </SectionText>
            </Box>


            {/* Desktop View */}
            <Box
                sx={{
                    display: {
                        md: 'flex',
                        sm: 'none',
                        xs: 'none',
                    },
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <SectionText display='inline-block'>
                    {children}
                </SectionText>
                <Box
                    sx={{
                        display: {
                            md: 'flex',
                            sm: 'none'
                        },
                        flex: 1,
                        height: '4px',
                        backgroundColor: 'primary.main',
                        marginLeft: '32px',
                    }}
                />
            </Box>
        </>
    )
}

export default SectionHeader;