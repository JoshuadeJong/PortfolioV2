import React, {ForwardedRef} from 'react';

import {Center} from "component/layout";
import NameTitle from "component/views/home/components/NameTitle";

type Props = {
    id: string,
}

const Home = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const headerOffSetPx = 64
    const sectionHeaderPx = 56

    const {id} = props
    const [pageHeight, setPageHeight] = React.useState(window.innerHeight - headerOffSetPx - sectionHeaderPx)

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            setPageHeight(window.innerHeight - headerOffSetPx - sectionHeaderPx)
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
