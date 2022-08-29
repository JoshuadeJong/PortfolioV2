import React from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

type Props = {
    text: String,
    icon: React.ReactNode
    onClick: () => void,
};

function MobileMenuItem(props: Props) {
    const {text, icon, onClick} = props
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClick}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
        </ListItem>
    )
}

export default MobileMenuItem;