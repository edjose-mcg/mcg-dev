// assets
import { IconDashboard, IconAmbulance, IconBriefcaseFilled, IconFirstAidKit } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconAmbulance, IconBriefcaseFilled, IconFirstAidKit };

// ==============================|| CASES MENU ITEMS ||============================== //

const cases = {
  id: 'cases',
  title: 'Case Management',
  type: 'group',
  children: [
    {
      id: 'allCases',
      title: 'Cases',
      type: 'item',
      url: '/cases',
      icon: icons.IconFirstAidKit,
      breadcrumbs: true
    }
  ]
};

export default cases;
