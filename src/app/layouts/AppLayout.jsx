import { Outlet } from 'react-router';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { DRAWER_TOGGLE_ID } from '../drawer/drawer';
import Footer from '../../components/Footer';

export default function AppLayout() {
  return (
    <div className="App drawer min-h-screen">
      <input id={DRAWER_TOGGLE_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-screen flex-col">
        <Header />
        <main className="w-full shrink-0 grow-0 basis-auto">
          <Outlet />
        </main>
        <Footer className="mt-auto" />
      </div>
      <Nav />
    </div>
  );
}

