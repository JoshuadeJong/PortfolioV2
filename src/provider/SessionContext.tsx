import React, {RefObject} from 'react';
import Views from "type/Views";
import {PaletteMode} from "@mui/material";

type SessionState = {
    viewRefs: Record<Views, RefObject<HTMLDivElement>>,
    currentView: Views,
    setCurrentView: (x: Views) => void,
    jumpToView: (x: Views) => void,
    currentTheme: PaletteMode,
    setCurrentTheme: (x: PaletteMode) => void,
};

const SessionContext = React.createContext<SessionState>(
    {
        // @ts-ignore
        // Navigation
        viewRefs: undefined,
        currentView: Views.HOME,
        setCurrentView(x: Views): void {},
        jumpToView(newView): void {},

        // Theme
        currentTheme: 'light',
        setCurrentTheme(x: PaletteMode): void {},
    }
)

export default SessionContext;