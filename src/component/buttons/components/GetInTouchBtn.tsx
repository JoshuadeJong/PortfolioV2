import React from 'react';
import {IconButton} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';


type Props = {
    email: string,
    size: 'small' | 'medium' | 'large',
};

function GetInTouchBtn(props: Props) {
    const {size, email} = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.open(`mailto:${email}`)
    }

    return (
        <IconButton size={size} onClick={handleClick}>
            <EmailIcon fontSize={size}/>
        </IconButton>
    )
}

export default GetInTouchBtn;

