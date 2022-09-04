import React from "react";
import { PaletteMode } from "@mui/material";

type SessionState = {
  currentTheme: PaletteMode;
  setCurrentTheme: (x: PaletteMode) => void;
};

const SessionContext = React.createContext<SessionState>({
  currentTheme: "light",
  setCurrentTheme(x: PaletteMode): void {},
});

export default SessionContext;
