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
            variant={'text'}
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