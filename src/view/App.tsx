import React, {RefObject} from 'react';
import {ThemeProvider} from "@mui/material";

import theme from "constant/theme";
import ResumeContext from "provider/ResumeContext";
import resume from "content/resume";
import StateContext from "provider/StateContext";
import Views from "constant/views";

import Header from "component/header";
import Home from "view/home";
import WaveIn from "view/waveIn";
import About from "view/about";

function App() {

    const viewRefs: Record<Views, RefObject<HTMLDivElement>> = {
        [Views.HOME]: React.createRef<HTMLDivElement>(),
        [Views.ABOUT]: React.createRef<HTMLDivElement>(),
        [Views.EMPLOYMENT]: React.createRef<HTMLDivElement>(),
        [Views.SKILLS]: React.createRef<HTMLDivElement>(),
        [Views.PROJECTS]: React.createRef<HTMLDivElement>(),
        [Views.CONNECT]: React.createRef<HTMLDivElement>(),
    }

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
      <ThemeProvider theme={theme}>
        <StateContext.Provider value={{currentView, setCurrentView, jumpToView, viewRefs}}>
            <ResumeContext.Provider value={resume}>
                <Header/>
                <Home id={Views.HOME} ref={viewRefs[Views.HOME]}/>
                <WaveIn/>
                <About id={Views.ABOUT} ref={viewRefs[Views.ABOUT]}/>
            </ResumeContext.Provider>
        </StateContext.Provider>
      </ThemeProvider>
    );
}

export default App;
