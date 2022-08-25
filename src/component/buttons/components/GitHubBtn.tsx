import React from 'react';
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import ResumeContext from "provider/ResumeContext";

type Props = {
    size: 'small' | 'medium' | 'large',
};

function GitHubBtn(props: Props) {
    const {size} = props;
    const {github} = React.useContext(ResumeContext)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        window.open(github);
    }

    return (
        <IconButton size={size} onClick={handleClick}>
            <GitHubIcon fontSize={size}/>
        </IconButton>
    )
}

export default GitHubBtn;