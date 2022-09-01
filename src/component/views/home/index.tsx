import React, {ForwardedRef} from 'react';

import ResumeContext from "provider/ResumeContext";
import {Center} from "component/layout";
import NameTitle from "./components/NameTitle";

type Props = {
    id: string,
}

const Home = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {id} = props
    const {nameFirst, github, linkedin, email} = React.useContext(ResumeContext)
    const [pageHeight, setPageHeight] = React.useState(0)

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            setPageHeight(window.innerHeight - 64) // Remove the pixel height of the header
        }
        updateWindowDimensions()
        window.addEventListener("resize", updateWindowDimensions)
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    return (
        <div id={id} ref={ref}>
            <Center minHeight={`${pageHeight}px`}>
                <NameTitle name={nameFirst} github={github} linkedin={linkedin} email={email}/>
            </Center>
        </div>
    )
})

export default Home;
