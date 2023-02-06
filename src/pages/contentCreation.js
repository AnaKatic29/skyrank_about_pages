// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections

import { BlogHeader } from 'src/sections/blog';
import { ContentCreationHeader, ContentCreationPage } from 'src/sections/contentCreation';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

ContentCreation.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ContentCreation() {
  return (
    <Page title="contentCreation">
      <RootStyle>
        <ContentCreationHeader/>
        <ContentCreationPage/>

      </RootStyle>
    </Page>
  );
}
