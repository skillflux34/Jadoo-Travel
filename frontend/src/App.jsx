import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

import { AuthProvider } from './context/AuthContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <div className="relative min-h-screen w-full overflow-x-hidden">
          
          {/* GLOBAL BACKGROUND SHAPE */}
          <div className="absolute top-0 right-0 z-0 pointer-events-none md:w-[70%] lg:w-[40%]">
            <img 
              src="/bg-hero.png" 
              alt="" 
              className="w-full object-contain" 
            />
          </div>

          {/* HEADER - Remains global */}
          <div className="relative z-20">
            <Header />
          </div>

          {/* CONTENT - Swaps based on JSON config */}
          <main className="relative z-10">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;

