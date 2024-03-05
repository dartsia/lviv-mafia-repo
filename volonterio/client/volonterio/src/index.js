import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import LoginIn from './loginIn'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginIn />
  </React.StrictMode>
);
reportWebVitals();
