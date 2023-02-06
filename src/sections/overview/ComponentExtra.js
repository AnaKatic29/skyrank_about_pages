// @mui
import { Typography, Grid, Box } from '@mui/material';
//
import ComponentCard from './ComponentCard';
import { EXTRA_LIST } from './PathConfig';
import Image from '../../components/Image';

// ----------------------------------------------------------------------

export default function ComponentExtra() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4" paragraph>
        Given all mentioned, advantages of buying backlinks on SkyRank platform include:
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Chart, Map, Editor…
        </Typography> */}
      </Grid>

      <Grid item xs={12} sm={8}>
      <Image
          src="../../../assets/Group645.svg"
          sx={{ width: 800 }}

        />
        {/* <Box
          sx={{
            display: 'grid',
            gap: 2.5,
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          }}
        >
          {EXTRA_LIST.map((item) => (
            <ComponentCard key={item.name} item={item} />
          ))}
        </Box> */}
      </Grid>
    </Grid>
  );
}
