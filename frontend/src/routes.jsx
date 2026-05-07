import { Navigate } from 'react-router-dom';
import Home from './components/Main/Home';
import Hero from './components/Main/Hero';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import OTPVerify from './components/Auth/OTPVerify';

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
    path: '*',
    element: <Navigate to="/" />
  }
];

export default routes;

