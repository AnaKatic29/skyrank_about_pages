import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
        height: 160,
        padding: 0,
    },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        position: 'absolute',
        bottom: theme.spacing(10),
    },
}));

// ----------------------------------------------------------------------

export default function ContentCreationHeader() {
    return (
        <RootStyle>
            <Container>
                <br /><br />
                <Typography variant="h3" align="center" paragraph>
                    ContentCreation
                </Typography>

            </Container>
        </RootStyle>

    );
}
