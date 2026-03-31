import UserDetail from './components/UserDetail';
import Dashboard from './components/Dashboard';
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Header from './components/Header';
import Login from './components/Login';
import Users from './components/Users';
import Nav from './components/Nav';

function AppLayout() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
}

var routes = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'login', Component: Login },
      { path: 'users', Component: Users },
      { path: 'users/:id', Component: UserDetail },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App
