import { Outlet } from 'react-router-dom';
import Navbar from '../../components/landing/Navbar'; 
import Footer from '../../components/landing/Footer'; 

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}