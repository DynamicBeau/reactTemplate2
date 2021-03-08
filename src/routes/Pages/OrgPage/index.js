import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import CollapsibleTable from './collapsibleTable';

const breadcrumbs = [
  { label: <IntlMessages id="pages.dashboard" />, link: '/dashboard' },
  { label: <IntlMessages id="pages.orgPage" />, isActive: true },
];

const OrgPage = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.orgPage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <CollapsibleTable />
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default OrgPage;
