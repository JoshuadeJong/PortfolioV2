import React from 'react';
import Container from '@mui/material/Container';

type Props = {
    children?: React.ReactNode,
};

function Page(props: Props) {
    const {children} = props;

    return (
        <Container
            disableGutters={false}
            maxWidth="xl"
        >
          {children}
        </Container>
    );
}

export default Page;