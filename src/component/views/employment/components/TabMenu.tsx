import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";

import Employment from "type/Employment";

type Props = {
    value: number,
    setValue: (x: number) => void,
    career: Array<Employment>,
};

function TabMenu(props: Props) {
    const {value, setValue, career} = props

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const RenderTabs = () => {
        return career.map((employment) => {
            return (
                <Tab label={employment.companyName}/>
            )
        })
    }

    return (
        <>
            {/* Mobile */}
            <Box
                sx={{
                    display: {
                        md: 'none',
                        sm: 'block',
                    },
                    width: 'inherit'
                }}
            >
                <Tabs
                    orientation='horizontal'
                    variant='scrollable'
                    scrollButtons
                    allowScrollButtonsMobile
                    value={value}
                    onChange={handleChange}
                    sx={{borderBottom: 1, borderColor: 'divider'}}
                >
                    {RenderTabs()}
                </Tabs>
            </Box>

            {/* Desktop */}
            <Box
                sx={{
                    display: {
                        md: 'block',
                        sm: 'none',
                        xs: 'none',
                    },
                }}
            >
                <Tabs
                    orientation='vertical'
                    variant='fullWidth'
                    value={value}
                    onChange={handleChange}
                    sx={{borderRight: 1, borderColor: 'divider'}}
                >
                    {RenderTabs()}
                </Tabs>
            </Box>
        </>
    )
}

export default TabMenu;