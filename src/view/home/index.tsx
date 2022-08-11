import React from 'react';

import {Grid} from "@mui/material";
import Center from "component/center";
import Page from 'component/page';

import {Terminal, Cursor} from "component/terminal";
import NameTitle from "component/nameTitle";


const waveOffsetPx = 100
const headerOffSetPx = 60

function Home() {
    const [pageHeight, setPageHeight] = React.useState( window.innerHeight - waveOffsetPx - headerOffSetPx )

    React.useEffect(() => {
        const updateWindowDimensions  = () => {
            setPageHeight(window.innerHeight  - waveOffsetPx - headerOffSetPx )
        }

        window.addEventListener("resize", updateWindowDimensions)
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    return (
        <Page maxWidth='xl'>
            <Grid container spacing={5}>
                <Grid
                    item
                    md={5}
                    sx={{
                        display: {xs: 'none', sm: 'none', md: 'block'}
                    }}
                >
                    <Center minHeight={`${pageHeight}px`}>
                        <Terminal >
                            <Cursor/>
                        </Terminal >
                    </Center>
                </Grid>
                <Grid item sm={12} md={7}>
                    <Center minHeight={`${pageHeight}px`}>
                        <NameTitle />
                    </Center>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Home;
