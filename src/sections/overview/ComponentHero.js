import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Link, Container, Typography, Stack } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';
import { Box, Grid } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  // [theme.breakpoints.up('md')]: {
  //   height: 460,
  //   padding: 10,
  // },
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

export default function ComponentHero() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'sm');

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container
        component={MotionContainer}
        sx={{
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
        }}
      >
        <div>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" component="h1">
              SkyRank helps you find and build backlinks on world-class websites
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                mt: 3,
                mb: 5,
                color: isLight ? 'text.secondary' : 'common.white',
              }}
            >
              We offer thousands of topic-relevant domains for different markets, languages,
              niches and categories. <br />
              All you need to do is pick the websites you want to get the link from. <br />
              To help you with that, we have added a whole bunch of filters and various metrics.
              <br />
              After registering, you will be able to browse through the best selection of domains in the market 24/7.
              <br />  However, in case you need any assistance, feel free to contact your SkyRank sales representative.
            </Typography>
          </m.div>

          {/* <m.div variants={varFade().inUp}>
            <Link
              href="https://www.figma.com/file/sI9fbKHIqlikUtfYCPb9lj/%5BPreview%5D-Minimal-Web.03.07.22?node-id=0%3A10803"
              target="_blank"
            >
              <Stack direction="row" spacing={1} alignItems="center" sx={{ display: 'inline-flex' }}>
                <Typography variant="button"> Fast preview</Typography>
                <Iconify icon={'ic:round-arrow-right-alt'} width={20} height={20} />
              </Stack>
            </Link>
          </m.div> */}
        </div>

        {isDesktop && (
          <m.div variants={varFade().inDown}>
            <Image
              visibleByDefault
              disabledEffect
              alt="hero"
              src="../../../assets/Group6432.svg"
              sx={{ maxWidth: 420 }}
            />
          </m.div>
        )}
      </Container>



    </RootStyle>
  );
}
