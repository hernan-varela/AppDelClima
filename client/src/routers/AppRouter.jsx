import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TodayPage from '../pages/TodayPage';
import LayoutNav from '../modules/LayoutNav';
import TomorrowPage from '../pages/TomorrowPage';
import MonthlyPage from '../pages/MonthlyPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <LayoutNav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/today' element={<TodayPage />} />
          <Route path='/tomorrow' element={<TomorrowPage />} />
          <Route path='/monthly' element={<MonthlyPage/>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </LayoutNav>
    </BrowserRouter>
  );
}

export default AppRouter;