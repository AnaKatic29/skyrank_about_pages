// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Services',
    children: [
      { name: 'Buy Backlinks', href: '#' },
      { name: 'Sell Backlinks', href: '#' },
      { name: 'Content Creation', href: '#' },
    ],
  },
  {
    headline: 'Company',
    children: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms Of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={1} sx={{ mb: 3 }}>
            <Image src="../../../assets/logo_color115.svg" />

            {/* <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} /> */}
          </Grid>

          <Grid item xs={8} md={3}>
            {/* <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack> */}
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2023. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
