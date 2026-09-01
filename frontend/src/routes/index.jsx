import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import { ProtectedRoute } from './ProtectedRoute';


import LandingPage from '../pages/LandingPage';
import AuthPage from '../pages/AuthPage';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />,
  },

  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />;
}