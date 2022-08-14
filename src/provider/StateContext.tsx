import React, {LegacyRef, RefObject} from 'react';
import Views from "constant/views";

type Status = {
    currentView: Views,
    setCurrentView: (x: Views) => void,
    jumpToView: (x: Views) => void,
    viewRefs: Record<Views, RefObject<HTMLDivElement>>,
};

const StateContext = React.createContext<Status>(
    {
        // @ts-ignore
        viewRefs: undefined,
        currentView: Views.HOME,
        setCurrentView(x: Views): void {},
        jumpToView(xViews): void {}
    }
)

export default StateContext;