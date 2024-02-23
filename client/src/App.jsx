// Packages
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
// Contexts
import { UserContextProvider } from './context/UserContext';
// Components
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/homepage/HomePage';
import AccountPage from './pages/accountpage/AccountPage';
import ProductPage from './pages/productpage/ProductPage';
import AboutPage from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
// CSS
import './App.css'

axios.defaults.baseURL = 'http://127.0.0.1:4000/';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/account/:subpage?/:action?' element={<AccountPage />} />
          <Route path='/product/:subpage?' element={<ProductPage />} />
          
          <Route path='/about-us?' element={<AboutPage />} />
          <Route path='/contact-us?' element={<ContactPage />} />
        </Route>
        
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App
