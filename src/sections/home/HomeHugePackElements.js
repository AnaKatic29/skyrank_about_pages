import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
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

const ScreenStyle = styled(m.div)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};

const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};

const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <MotionViewport disableAnimatedMobile={false}>
      <RootStyle>
        <Container>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={6} dir="ltr">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'center',
                }}
              >
                {/* {[...Array(3)].map((_, index) => (
                  <ScreenStyle
                    key={index}
                    variants={{
                      ...(index === 0 && screenLeftAnimate),
                      ...(index === 1 && screenCenterAnimate),
                      ...(index === 2 && screenRightAnimate),
                    }}
                    transition={{ duration: 0.72, ease: 'easeOut' }}
                    sx={{
                      boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                        isLight ? theme.palette.grey[600] : theme.palette.common.black,
                        0.48
                      )}`,
                      ...(index === 0 && {
                        zIndex: 3,
                        position: 'absolute',
                      }),
                      ...(index === 1 && { zIndex: 2 }),
                      ...(index === 2 && {
                        zIndex: 1,
                        position: 'absolute',
                        boxShadow: 'none',
                      }),
                    }}
                  > */}
                <Image
                  src='../../../assets/Group641.svg'
                // alt={`screen ${index + 1}`}
                // src={`https://minimal-assets-api-dev.vercel.app/assets/images/home/screen_${isLight ? 'light' : 'dark'
                //   }_${index + 1}.png`}
                />
                {/* </ScreenStyle>
                ))} */}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <ContentStyle>
                <m.div variants={varFade().inUp}>
                  {/* <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                    Interface Starter Kit
                  </Typography> */}
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    Your trusted source for   <br />
                    building high relevance backlinks
                  </Typography>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography
                    sx={{
                      mb: 5,
                      color: isLight ? 'text.secondary' : 'common.white',
                    }}
                  >
                    SkyRank platform provides access to thousands of high-authority domains where we can help you build links
                    for your website. Our user-friendly dashboard and useful filters will allow you to easily browse the marketplace, for free.
                    <br /><br />
                    We know how to get you topic-relevant backlinks that can increase your rankings and all you need to do is select the domains.
                    The rest is our job.
                  </Typography>
                </m.div>

                {/* <m.div variants={varFade().inUp}>
                  <Button
                    size="large"
                    color="inherit"
                    variant="outlined"
                    target="_blank"
                    rel="noopener"
                    href="https://www.minimals.cc/components/"
                  >
                    View All Components
                  </Button>
                </m.div> */}
              </ContentStyle>
            </Grid>
          </Grid>

          <br /><br />

          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <ContentStyle>
                <m.div variants={varFade().inUp}>
                  {/* <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                    Interface Starter Kit
                  </Typography> */}
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    Why are backlinks important?
                  </Typography>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography
                    sx={{
                      mb: 5,
                      color: isLight ? 'text.secondary' : 'common.white',
                    }}
                  >
                    Backlinks are widely considered one of the most dominant SEO ranking factor.
                    Simply put, backlinks represent "votes of confidence" for your website compared to competitor sites.
                    <br /><br />
                    Diversified and wisely built backlink portfolio can help you rank your content better on Google
                    and other search engines.

                  </Typography>
                </m.div>

                {/* <m.div variants={varFade().inUp}>
                  <Button
                    size="large"
                    color="inherit"
                    variant="outlined"
                    target="_blank"
                    rel="noopener"
                    href="https://www.minimals.cc/components/"
                  >
                    View All Components
                  </Button>
                </m.div> */}
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
                  src='../../../assets/Group636.svg'

                />
              </Box>
            </Grid>
          </Grid>


        </Container>

        <br /><br /><br />

        <Container style={{background:'#F2F6FC'}}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={4} dir="ltr">
              <ContentStyle>
                <m.div variants={varFade().inUp}>
                  <Typography variant="h3" sx={{ mb: 3 }}>
                    Original content & <br/>
                    plagiarism-free <br/> checks are included
                  </Typography>
                </m.div>
              </ContentStyle>
            </Grid>

            <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center'}}>
              <ContentStyle>
                <m.div variants={varFade().inUp}>
                  <Typography
                    sx={{
                      mb: 5,
                      color: isLight ? 'text.secondary' : 'common.white',
                    }}
                  >


                    SkyRank link building services include high-quality content written by experienced,
                    native and skilled copywriters. Our writers deliver content that is tailored according
                    to your instructions and preferred topics/categories of domains. When ordering the content,
                    you are free to pick the topic titles or you can let our writers choose them for you.
                    You can rest assure that the content we deliver will always match the topics of websites you pick.

                    Finally, we guarantee that every content piece we include with your order is original and checked
                    for plagiarism. SkyRank has a team of dedicated professional writers, capable of delivering
                    topic-relevant, well-written content with anchor texts added in a natural way.

                  </Typography>
                </m.div>

              </ContentStyle>
            </Grid>
          </Grid>
        </Container>

      </RootStyle>
    </MotionViewport>
  );
}
