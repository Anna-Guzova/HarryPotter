import BackButton from '../components/Button/BackButton';
import { Outlet } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <main>
      <BackButton />
      <Outlet />
    </main>
  );
}

export default MainLayout;
