import React from 'react';
import Button from "@mui/material/Button";

type Props = {
    text: string,
    onClick: () => void,
    variant?: "text" | "outlined" | "contained" | undefined
};

function LinkButton(props: Props) {
    const {text, onClick, variant} = props;
    return (
        <Button
            key={text}
            variant={variant || 'text'}
            onClick={onClick}
            sx={{
                marginLeft: 1,
                pl: 3,
                pr: 3,
                display: 'block',
                color: 'text.secondary',
                textTransform: 'capitalize',
            }}
        >
            {text}
        </Button>
    )
}

export default LinkButton;