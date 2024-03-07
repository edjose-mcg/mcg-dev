// assets
import { IconBuilding, IconBuildingCommunity, IconPasswordUser, IconUsersPlus, IconUsersGroup, IconPlug, IconBuildingHospital } from '@tabler/icons-react';

// constant
const icons = {
  IconBuilding, IconBuildingCommunity, IconPasswordUser, IconUsersPlus, IconUsersGroup, IconPlug, IconBuildingHospital
};

// ==============================|| OWNER PAGES MENU ITEMS ||============================== //

const owners = {
  id: 'company',
  title: 'User Management',
  type: 'group',
  children: [
    {
      id: 'app',
      title: 'MyCareGorithm',
      icon: icons.IconBuildingHospital,
      type: 'collapse',

      children: [
        {
          id: 'applicationOwner',
          title: 'App Owners',
          type: 'item',
          url: '/application-owners',
          icon: icons.IconPlug,
          breadcrumbs: true,
          target: false,
        },
        {
          id: 'organizations',
          title: 'Organizations',
          type: 'item',
          url: '/organizations',
          icon: icons.IconBuildingCommunity,
          breadcrumbs: true,
          target: false,
        },
        {
          id: 'admins',
          title: 'Admins',
          type: 'item',
          url: '/admins',
          icon: icons.IconPasswordUser,
          breadcrumbs: true,
          target: false,
        },

        {
          id: 'allUsers',
          title: 'Users',
          url: '/users',
          icon: icons.IconUsersPlus,
          breadcrumbs: true,
          type: 'collapse',
          target: false,

          children: [
            {
              id: 'allUsers',
              title: 'All Users',
              type: 'item',
              url: '/users',
              icon: icons.IconUsersGroup,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'appOwner',
              title: 'App. Owners',
              type: 'item',
              // url: '/admins',
              icon: icons.IconPasswordUser,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'app',
              title: 'Adv. Pract. Provider',
              type: 'item',
              // url: '/organizations',
              icon: icons.IconUsersPlus,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'auditors',
              title: 'Auditors',
              type: 'item',
              // url: '/users',
              icon: icons.IconUsersPlus,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'caregivers',
              title: 'Caregivers',
              type: 'item',
              // url: '/users',
              icon: icons.IconUsersPlus,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'patients',
              title: 'Patients',
              type: 'item',
              // url: '/users',
              icon: icons.IconUsersPlus,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'physicians',
              title: 'Physicians',
              type: 'item',
              // url: '/users',
              icon: icons.IconUsersPlus,
              breadcrumbs: true,
              target: false,
            },
            {
              id: 'scribe',
              title: 'Scribes',
              type: 'item',
              // url: '/users',
              icon: icons.IconUsersPlus,
              breadcrumbs: true,
              target: false,
            },
          ]
        }
      ]
    }
  ]
};

export default owners;