import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import MainPage from './pages/mainPage'
import AboutPage from './pages/About'
import reportWebVitals from './reportWebVitals';
import AddProduct from './pages/AddProduct';

const App = () => {
  return (
    <Router>
        <Routes>
         <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} /> 
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
reportWebVitals();