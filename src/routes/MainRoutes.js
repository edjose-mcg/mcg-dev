import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RequireAuth from './RequireAuth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// const Dashboard = Loadable(lazy(() => import('views/dashboard')));
const ApplicationOwnersPage = Loadable(lazy(() => import('views/applicationOwners')));
const OrganizationsPage = Loadable(lazy(() => import('views/organizations')));
const AdminsPage = Loadable(lazy(() => import('views/admins')));
const AllUsersPage = Loadable(lazy(() => import('views/allUsers')));
const AllCasesPage = Loadable(lazy(() => import('views/allCases')));
const ProfilePage = Loadable(lazy(() => import('views/profile')));
const AccountPage = Loadable(lazy(() => import('views/account')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <RequireAuth><MainLayout /></RequireAuth>,
  children: [
    {
      path: '',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'application-owners',
      element: <ApplicationOwnersPage />
    },
    {
      path: 'organizations',
      element: <OrganizationsPage />
    },
    {
      path: 'admins',
      element: <AdminsPage />
    },
    {
      path: 'users',
      element: <AllUsersPage />
    },
    {
      path: 'cases',
      element: <AllCasesPage />
    },
    {
      path: 'profile',
      element: <ProfilePage />
    },
    {
      path: 'account',
      element: <AccountPage />
    },
  ]
};

export default MainRoutes;
