import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SignUp from './signUp'
import SignIn from './signIn'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp/>
    <SignIn/>
  </React.StrictMode>
);
reportWebVitals();
