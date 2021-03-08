import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';

const breadcrumbs = [
  // { label: 'Dashboard', link: '/' },
  { label: 'Dashboard', isActive: true },
];

const Dashboard = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.dashboard" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="pages.dashboard.description" />
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Dashboard;
