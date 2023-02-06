import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: '#0F3046',
  // theme.palette.grey[900],
  
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        {/* <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.48,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        /> */}

        <Grid container spacing={2} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={12}>
            <ContentStyle>
              {/* <m.div variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                Why Choose SkyRank?
                </Typography>
              </m.div> */}

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white', position:"center"}}>
                  Why Choose SkyRank?
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  Thanks to our decade of experience in marketing, SEO, link building and content creation, we know that one-to-one communication is the key to every successful marketing campaign. Taking a personal approach, our account managers are always there to help you get the best domains and content for your website.

                </Typography>
              </m.div>
            </ContentStyle>
          </Grid>

          {/* <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="light mode"
                src="https://minimal-assets-api-dev.vercel.app/assets/images/home/lightmode.png"
              />
            </m.div>

            <Box component={m.div} variants={varFade().inDown} sx={{ top: 0, right: 0, position: 'absolute' }}>
              <Image alt="dark mode" src="https://minimal-assets-api-dev.vercel.app/assets/images/home/darkmode.png" />
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </RootStyle>
  );
}
