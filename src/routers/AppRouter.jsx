import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import House from '../pages/House/House';
import Students from '../pages/Students/Students';
import Staff from '../pages/Staff/Staff';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/house" element={<House />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
