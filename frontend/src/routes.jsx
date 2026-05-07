import { Navigate } from 'react-router-dom';
import Home from './components/Main/Home';
import Hero from './components/Main/Hero';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import OTPVerify from './components/Auth/OTPVerify';
import AdminDashboard from './components/Admin/AdminDashboard';
import BookingsPage from './components/Bookings/BookingsPage';

const routes = [
  {
    path: '/',
    element: (
      <>
        <Hero />
        <Home />
      </>
    )
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/verify-otp',
    element: <OTPVerify />
  },
  {
    path: '/admin-dashboard',
    element: <AdminDashboard />
  },
  {
    path: '/bookings',
    element: <BookingsPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default routes;

