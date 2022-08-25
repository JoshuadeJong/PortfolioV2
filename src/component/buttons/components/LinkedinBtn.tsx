import React from 'react';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResumeContext from "provider/ResumeContext";

type Props = {
    size: 'small' | 'medium' | 'large',
};

function LinkedinBtn(props: Props) {
    const {size} = props;
    const {linkedin} = React.useContext(ResumeContext)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        window.open(linkedin);
    }

    return (
        <IconButton size={size} onClick={handleClick}>
            <LinkedInIcon fontSize={size}/>
        </IconButton>
    )
}

export default LinkedinBtn;