import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
        height: 860,
        padding: 0,
    },
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

export default function ContentCreationPage() {
    const theme = useTheme();

    const isLight = theme.palette.mode === 'light';
    return (
        <RootStyle>
            <Container>
                <Container >
                    <Grid container spacing={5} justifyContent="center">
                        <Grid item xs={12} md={12} dir="ltr">
                            <ContentStyle>
                                <Typography variant="h5" sx={{ mb: 0 }}>
                                    Professional content creation services for your brand
                                </Typography>
                            </ContentStyle>
                        </Grid>

                        <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                            <ContentStyle>
                                <Typography
                                    sx={{
                                        mb: 5,
                                        color: isLight ? 'text.secondary' : 'common.white',
                                    }}
                                >
                                    A well-written article, blog post or landing page can increase your websites's online visibility and get you closer to your conversion goals. Our in-house team of experienced SEO copywriters knows how to create compelling, great content that converts.

                                    Top-quality content is always included when you buy backlinks at SkyRank. However, you can also purchase various types of content from us without ordering backlinks. All you have to do is register, select the type of content you need, choose your niche and we will get right on it.
                                </Typography>

                            </ContentStyle>
                        </Grid>
                    </Grid>
                </Container>


                <Container >
                    <Grid container spacing={5} justifyContent="center">
                        <Grid item xs={12} md={12} dir="ltr">
                            <ContentStyle>
                                <Typography variant="h5" sx={{ mb: 0 }}>
                                    Our premium content creation services include:
                                </Typography>
                            </ContentStyle>
                        </Grid>

                        <Container style={{ background: '#ffffff' }}>
                            <Grid item xs={12} md={12} dir="ltr" style={{ background: "#Ffffff" }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        src='../../../assets/Group652.svg'
                                    />
                                </Box>
                            </Grid>
                        </Container>

                        <Grid item xs={12} md={12} dir="ltr" style={{ background: "#0F3046" }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    src='../../../assets/Group653.svg'
                                />
                            </Box>
                        </Grid>
                    </Grid>

                </Container>

            </Container>
        </RootStyle >

    );
}
