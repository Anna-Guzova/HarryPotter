import { Outlet, useLocation } from 'react-router-dom';
import BackButton from '../components/Button/BackButton';

function MainLayout({ children }) {
  const location = useLocation();
  return (
    <main>
      {location.pathname !== '/' && <BackButton />}
      <Outlet />
    </main>
  );
}

export default MainLayout;
