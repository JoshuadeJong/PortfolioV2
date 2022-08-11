import React from 'react';
import ResumeContext from "../../provider/ResumeContext";
import IconButton from "@mui/material/IconButton";
import EmailIcon from '@mui/icons-material/Email';


type Props = {
    size: 'small' | 'medium' | 'large',
};
function GetInTouchBtn(props: Props) {
    const {size} = props;
    const {email} = React.useContext(ResumeContext)

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

