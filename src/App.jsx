import './App.css';
import Header from './Header';
import { createBrowserRouter } from 'react-router-dom';
import Home_Page from './pages/Home_Page';
import AboutUs_Page from './pages/AboutUs_Page';
import ContactUs_Page from './pages/ContactUs_Page';
import Products_Page from './pages/Products_Page';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home_Page />,
  },
  {
    path: '/about',
    element: <AboutUs_Page />,
  },
  {
    path: '/contact',
    element: <ContactUs_Page />,
  },
  {
    path: '/products',
    element: <Products_Page />,
  },
]);
