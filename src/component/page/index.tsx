import React from 'react';
import Container from '@mui/material/Container';
import { Breakpoint } from '@mui/material';

type Props = {
    maxWidth: false | Breakpoint | undefined,
    children?: React.ReactNode,
};

function Page(props: Props) {
    const {children, maxWidth} = props;

    return (
        <Container
            disableGutters={false}
            maxWidth={maxWidth}
        >
            {children}
        </Container>
    );
}

export default Page;