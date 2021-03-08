import React from 'react';

import { PostAdd } from '@material-ui/icons';
import CmtHorizontal from '../../../../../@coremat/CmtNavigation/Horizontal';
import IntlMessages from '../../../../utils/IntlMessages';

const HeaderMenus = () => {
  const navigationMenus = [
    {
      name: <IntlMessages id={'pages.dashboard'} />,
      type: 'item', // 2dp 내려가는 경우 'collapse'
      link: '/dashboard',
      // children: [
      //   {
      //     name: <IntlMessages id={'pages.samplePage'} />,
      //     icon: <PostAdd />,
      //     type: 'item',
      //     link: '/sample-page',
      //   },
      //   {
      //     name: <IntlMessages id={'pages.orgPage'} />,
      //     icon: <PostAdd />,
      //     type: 'item',
      //     link: '/org-page',
      //   },
      // ],
    },
    {
      name: <IntlMessages id={'pages.orgPage'} />,
      type: 'item',
      link: '/orgpage',
    },
  ];

  return <CmtHorizontal menuItems={navigationMenus} />;
};

export default HeaderMenus;
