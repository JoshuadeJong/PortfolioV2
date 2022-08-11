import React from 'react';
import Button from "@mui/material/Button";

type Props = {
    text: string,
    onClick: () => void,
};

function LinkButton(props: Props) {
    const {text, onClick} = props;
    return (
        <Button
            key={text}
            onClick={onClick}
            sx={{
                pl: 4,
                pr: 4,
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