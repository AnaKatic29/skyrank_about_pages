// @mui
import { Typography, Grid, Box } from '@mui/material';
//
import Image from '../../components/Image';

import ComponentCard from './ComponentCard';
import { FOUNDATION_LIST } from './PathConfig';

// ----------------------------------------------------------------------

export default function ComponentFoundation() {
  return (
    <Grid container spacing={3} sx={{ my: 10 }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" paragraph>
          In short, our premium link building services include:
        </Typography>

        <Image
          src="../../../assets/Group644.svg"
          sx={{ width: 1200 }}

        />
      </Grid>

      {/* <Grid item xs={12} sm={8}>
        <Box
          sx={{
            display: 'grid',
            gap: 2.5,
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          }}
        >
          {FOUNDATION_LIST.map((item) => (
            <ComponentCard key={item.name} item={item} />
          ))}
        </Box>
      </Grid> */}
    </Grid>
  );
}
