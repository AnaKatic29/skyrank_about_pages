import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({

}));

const ImageStyle = styled('div')(({ theme }) => ({
  height: '60%',
  width: '60%',
  justifyContent: 'right',
  padding: theme.spacing(12, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

// ----------------------------------------------------------------------

export default function AboutLandingPage() {
  return (
    <Container>
      {/* <ContentStyle>
        <Image src="../../../assets/Frame.svg"></Image>

      </ContentStyle> */}

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <ContentStyle>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Over 1200 happy clients since 2018
            </Typography>

            <Button
              color="inherit"
              size="large"
              variant="outlined"
              target="_blank"
              rel="noopener"
              href="https://google.com"
            >
              SIGN UP FREE
            </Button>
          </ContentStyle>
        </Grid>

        <Grid item xs={12} md={6} dir="ltr">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              justifyContent: 'center',
            }}
          >
            <Image
              src='../../../assets/Frame.svg'

            />
          </Box>
        </Grid>
      </Grid>

    </Container>


  );
}
