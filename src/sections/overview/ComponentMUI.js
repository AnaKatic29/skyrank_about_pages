// @mui
import { Typography, Grid, Box, Link } from '@mui/material';
//
import ComponentCard from './ComponentCard';
import { MUI_LIST } from './PathConfig';

// ----------------------------------------------------------------------

export default function ComponentMUI() {
  return (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" paragraph>
          SkyRank is your all-in-one safe place for buying backlinks
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {/* Components from{' '} */}
          {/* <Link href="https://mui.com/components/" target="_blank" rel="noopener">
            MUI
          </Link> */}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Typography>
          Even though some believe that link building is an easy to do activity, there are very few that can do it right. Luckily for you, we've been in the SEO off-page business for years where we've seen all sorts of "black hat" link building tactics done by so-called "experts". <br/><br/>
          Such "black hat" tactics include links from PBNs (private blog networks), spammy links, low-quality guest posts and serving multiple redirections. Sooner or later, most of these will definitely do your website more harm than you can imagine. <br/><br/>
          We, on the other hand, want to help you keep your website both safe and successful. By focusing on native advertising and natural link building, we wish to assist you protect your site from being manually or algorithmically penalized by Google.
        </Typography>
      </Grid>

      {/* <Grid item xs={12} sm={8}>
        <Box
          sx={{
            display: 'grid',
            gap: 2.5,
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          }}
        >
          {MUI_LIST.map((item) => (
            <ComponentCard key={item.name} item={item} />
          ))}
        </Box>
      </Grid> */}
    </Grid>
  );
}
