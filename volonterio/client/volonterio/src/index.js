import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import MainPage from './pages/mainPage'
import AboutPage from './pages/About'
import Catalog from './pages/catalog_product'
import DonatePage from './pages/donate';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/donate" element={<DonatePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
reportWebVitals();