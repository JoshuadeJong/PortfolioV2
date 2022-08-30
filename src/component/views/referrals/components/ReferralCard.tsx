import React from 'react';
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import {Par} from "component/typography";
import Referral from "type/Referral";

type Props = {
    referral: Referral,
};

function ReferralCard(props: Props) {
    const {referral} = props
    return (
        <Paper elevation={3}>
            <Box sx={{padding: 2}}>
                <Par textColor='text.primary'>
                    {referral.text}
                </Par>
                <Par noMargin>
                    {referral.person}, {referral.position} @ {referral.company}
                </Par>
            </Box>
        </Paper>
    )
}

export default ReferralCard;