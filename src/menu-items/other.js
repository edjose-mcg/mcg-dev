// assets
import { IconBrandChrome, IconHelp, IconUsers, IconChartDots3, IconUserShield, IconBuilding } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp, IconUsers, IconChartDots3, IconUserShield, IconBuilding };


// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    // {
    //   id: 'organizations',
    //   title: 'Organizations',
    //   type: 'item',
    //   url: '/organizations',
    //   icon: icons.IconBuilding,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'admins',
    //   title: 'Admins',
    //   type: 'item',
    //   url: '/admins',
    //   icon: icons.IconUserShield,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'users',
    //   title: 'Users',
    //   type: 'item',
    //   url: '/users',
    //   icon: icons.IconUsers,
    //   breadcrumbs: false
    // },
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
  ]
};

export default other;
