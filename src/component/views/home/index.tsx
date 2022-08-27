import React, {ForwardedRef} from 'react';

import {Grid} from "@mui/material";
import {Page, Center} from "component/layout";

import {Terminal, Cursor} from "component/terminal";
import NameTitle from "component/views/home/components/NameTitle";


type Props = {
    id: string,
}

const Home = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const waveOffsetPx = 100
    const headerOffSetPx = 60

    const {id} = props
    const [pageHeight, setPageHeight] = React.useState(window.innerHeight - waveOffsetPx - headerOffSetPx)

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            setPageHeight(window.innerHeight - waveOffsetPx - headerOffSetPx)
        }

        window.addEventListener("resize", updateWindowDimensions)
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    return (
        <div id={id} ref={ref}>
            <Center minHeight={`${pageHeight}px`}>
                <NameTitle/>
            </Center>
        </div>
    )
})

export default Home;
