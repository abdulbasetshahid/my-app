import { createBrowserRouter } from 'react-router';
import AppLayout from '../layouts/AppLayout';
import AuthLayout from '../layouts/AuthLayout';
import Dashboard from '../../features/dashboard/Dashboard';
import Login from '../../features/auth/Login';
import Users from '../../features/users/Users';
import UserDetail from '../../features/users/UserDetail';
import About from '../../features/about/About';
import Contact from '../../features/contact/Contact';
import Profile from '../../features/profile/Profile';
import NotFound from '../../features/not-found/NotFound';

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'users', Component: Users },
      { path: 'users/:id', Component: UserDetail },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'profile', Component: Profile },
      { path: '*', Component: NotFound },
    ],
  },
  {
    Component: AuthLayout,
    children: [{ path: '/login', Component: Login }],
  },
]);

