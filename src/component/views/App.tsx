import React, {RefObject} from 'react';
import {PaletteMode, ThemeProvider} from "@mui/material";
import { CssBaseline } from '@mui/material/';

import {themeLight, themeDark} from "content/theme";
import ResumeContext from "provider/ResumeContext";
import resume from "content/resume";
import SessionContext from "provider/SessionContext";
import Views from "constant/views";

import Header from "component/views/header";
import Home from "component/views/home";
import {Page} from "component/layout";

function App() {

    const viewRefs: Record<Views, RefObject<HTMLDivElement>> = {
        [Views.HOME]: React.createRef<HTMLDivElement>(),
        [Views.ABOUT]: React.createRef<HTMLDivElement>(),
        [Views.EMPLOYMENT]: React.createRef<HTMLDivElement>(),
        [Views.SKILLS]: React.createRef<HTMLDivElement>(),
        [Views.PROJECTS]: React.createRef<HTMLDivElement>(),
        [Views.CONNECT]: React.createRef<HTMLDivElement>(),
    }

    const [currentTheme, setCurrentTheme] = React.useState<PaletteMode>('dark')
    const [currentView, setCurrentView] = React.useState(Views[window.location.hash as keyof typeof Views] || Views.HOME)
    const jumpToView = (newView: Views) => {
        setCurrentView(newView)
        if(window.history) {
            window.history.replaceState(null, "", `#${newView}`)
            console.log(viewRefs[newView].current)
            viewRefs[newView].current?.scrollIntoView()
        } else {
            window.location.hash = `#${newView}`
        }
    }

    return (
      <ThemeProvider theme={currentTheme === 'light' ? themeLight : themeDark}>
        <CssBaseline />
        <SessionContext.Provider value={{viewRefs, currentView, setCurrentView, jumpToView, currentTheme, setCurrentTheme}}>
            <ResumeContext.Provider value={resume}>
                <Header/>
                <Page maxWidth='xl'>
                    <Home id={Views.HOME} ref={viewRefs[Views.HOME]}/>



                </Page>
            </ResumeContext.Provider>
        </SessionContext.Provider>
      </ThemeProvider>
    );
}

export default App;
