import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainPage'
import AboutPage from './pages/About'
import DonatePage from './pages/donate';
import Contacts from './pages/Contacts';
import AddProduct from './pages/AddProduct'
import reportWebVitals from './reportWebVitals';
import ProductDetails  from './data/TestProductDetails';
import ProductsList from './data/ProductsList';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create_product" element={<AddProduct />} />
          <Route path="/donate" element={<DonatePage/>} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/catalog" element={<Catalog />} /> */}
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/AddProduct" element={<AddProduct />} />

          <Route path="/catalog" element={<ProductsList />} /> 
          <Route path="/product-info/:id" element={<ProductDetails/>} />
        </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
reportWebVitals();