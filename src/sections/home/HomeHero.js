import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  sizes:"(max-width: 300px) 300w, 700px",
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 10,
  right: 0,
  bottom: 0,
  zIndex: 15,
  width: '100%',
  height: '100%',
  minWidth: 1000,
  minHeight: 1000,
  // margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    left: '80%',
    width: '100%',
    height: '148vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/pocetnaaa.svg" variants={varFade().in} />

        <Container>
          <ContentStyle>

            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white', paddingTop: 10 }}>
                World’s best <br />
                marketplace for  <br />
                <Typography component="span" variant="h1" sx={{ color: 'white' }}>
                  backlinks and  content
                </Typography>
              </Typography>
            </m.div>
            {/* &nbsp; */}

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
                Improve your rankings. Increase your revenue.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <NextLink href={PATH_DASHBOARD.root} passHref >
                <Button
                  size="large"
                  variant="contained"
                  // startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                  style={{ background: "#D0F2FF", color: "#123349" }}
                >
                  SIGN UP FREE
                </Button>
              </NextLink>

              <NextLink href={PATH_DASHBOARD.root} passHref>
                <Button
                  size="large"
                  variant="outlined"
                  // startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                  sx={{ left: 10, borderBlockColor: "#D0F2FF", color: '#D0F2FF' }}
                >
                  GET IN TOUCH
                </Button>
              </NextLink>
            </m.div>


            <HeroImgStyle alt="hero" src='../../../assets/Group638.svg' variants={varFade().inUp}/>
            {/* <HeroImgStyle
          alt="hero"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/hero.png"
          variants={varFade().inUp}
        /> */}




          </ContentStyle>

        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
