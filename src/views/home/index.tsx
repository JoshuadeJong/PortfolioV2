import React from 'react';

import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import {ThemeOptions, useTheme} from "@mui/material";

import ResumeContext from "context/ResumeContext";
import Center from "components/center";
import Page from 'components/page';
import GitHubBtn from "components/gitHubBtn";
import LinkedinBtn from "components/linkedinBtn";
import GetInTouchBtn from "../../components/getInTouchBtn";


const waveOffsetPx = 100
const headerOffSetPx = 60

function Home() {
    const theme: ThemeOptions = useTheme()
    const {name, title, currentEmployer, currentEmployerLink} = React.useContext(ResumeContext);
    const [pageHeight, setPageHeight] = React.useState( window.innerHeight - waveOffsetPx - headerOffSetPx )

    React.useEffect(() => {
        const updateWindowDimensions  = () => {
            setPageHeight(window.innerHeight  - waveOffsetPx - headerOffSetPx )
        }

        window.addEventListener("resize", updateWindowDimensions)
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [])

    const handleCompanyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        window.open(currentEmployerLink);
    }

    return (
        <Page>
            <Grid container spacing={2}>
                <Grid
                    item
                    md={6}
                    sx={{
                        display: {xs: 'none', sm: 'none', md: 'block'}
                    }}
                >
                    <Center minHeight={`${pageHeight}px`}>
                        The Terminal!
                    </Center>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Center minHeight={`${pageHeight}px`}>
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 500,
                                    marginTop:  `91px`,
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 300,
                                    color: theme.palette?.text?.secondary
                                }}
                            >
                                <span>
                                    A {title} at
                                    {" "}
                                    <Link
                                        // @ts-ignore
                                        onClick={handleCompanyClick}
                                        sx={{
                                            cursor: "pointer",
                                            fontWeight: 300,
                                            color: theme.palette?.text?.secondary
                                        }}
                                    >
                                        {currentEmployer}
                                    </Link>
                                </span>
                            </Typography>
                            <GitHubBtn size="large"/>
                            <LinkedinBtn size="large"/>
                            <GetInTouchBtn size="large"/>
                        </Box>
                    </Center>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Home;
