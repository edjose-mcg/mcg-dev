// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Account & Auth',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'profile',
          title: 'Profile',
          type: 'item',
          url: '/profile',
          target: false
        },
        {
          id: 'account',
          title: 'Account Settings',
          type: 'item',
          url: '/account',
          target: false
        },
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/login',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/signup',
          target: true
        }
      ]
    }
  ]
};

export default pages;
