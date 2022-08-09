import React from 'react';
import Button from "@mui/material/Button";
import {ThemeOptions, useTheme} from "@mui/material";


type Props = {
    text: string,
    onClick: () => void,
};

function LinkButton(props: Props) {
    const {text, onClick} = props;
    const theme: ThemeOptions = useTheme()
    return (
        <Button
            key={text}
            onClick={onClick}
            sx={{
                pl: 4,
                pr: 4,
                display: 'block',
                color: theme.palette?.text?.secondary,
                textTransform: 'capitalize',
            }}
        >
            {text}
        </Button>
    )
}

export default LinkButton;