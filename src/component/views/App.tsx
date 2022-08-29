import React, {RefObject} from 'react';
import {PaletteMode, ThemeProvider} from "@mui/material";
import {CssBaseline} from '@mui/material/';
import Container from "@mui/material/Container";

import {themeLight, themeDark} from "content/theme";
import ResumeContent from "content/ResumeContent";
import ResumeContext from "provider/ResumeContext";
import SessionContext from "provider/SessionContext";
import Views from "type/Views";

import Header from "component/views/header";
import Home from "component/views/home";
import About from "component/views/about";
import Employment from "component/views/employment";
import Skills from "component/views/skills";
import Projects from "component/views/projects";
import Referrals from "component/views/referrals";

function App() {

    const viewRefs: Record<Views, RefObject<HTMLDivElement>> = {
        [Views.HOME]: React.createRef<HTMLDivElement>(),
        [Views.ABOUT]: React.createRef<HTMLDivElement>(),
        [Views.EMPLOYMENT]: React.createRef<HTMLDivElement>(),
        [Views.SKILLS]: React.createRef<HTMLDivElement>(),
        [Views.PROJECTS]: React.createRef<HTMLDivElement>(),
        [Views.REFERRALS]: React.createRef<HTMLDivElement>(),
        [Views.CONNECT]: React.createRef<HTMLDivElement>(),
    }

    const [currentTheme, setCurrentTheme] = React.useState<PaletteMode>('dark')
    const [currentView, setCurrentView] = React.useState(Views[window.location.hash as keyof typeof Views] || Views.HOME)
    const jumpToView = (newView: Views) => {
        setCurrentView(newView)
        if (window.history) {
            window.history.replaceState(null, "", `#${newView}`)
            console.log(viewRefs[newView].current)
            viewRefs[newView].current?.scrollIntoView()
        } else {
            window.location.hash = `#${newView}`
        }
    }

    return (
        <ThemeProvider theme={currentTheme === 'light' ? themeLight : themeDark}>
            <CssBaseline/>
            <SessionContext.Provider
                value={{viewRefs, currentView, setCurrentView, jumpToView, currentTheme, setCurrentTheme}}>
                <ResumeContext.Provider value={ResumeContent}>
                    <Header/>
                    <Container maxWidth='lg'>
                        <Home id={Views.HOME} ref={viewRefs[Views.HOME]}/>
                        <About id={Views.ABOUT} ref={viewRefs[Views.ABOUT]}/>
                        <Employment id={Views.EMPLOYMENT} ref={viewRefs[Views.EMPLOYMENT]}/>
                        <Projects id={Views.PROJECTS} ref={viewRefs[Views.PROJECTS]}/>
                        <Skills id={Views.SKILLS} ref={viewRefs[Views.SKILLS]}/>
                        <Referrals id={Views.REFERRALS} ref={viewRefs[Views.REFERRALS]}/>
                    </Container>
                </ResumeContext.Provider>
            </SessionContext.Provider>
        </ThemeProvider>
    );
}

export default App;
