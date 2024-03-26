import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import MainPage from './pages/mainPage'
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from "react-router-dom";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
    <MainPage/>
    {/* <SignIn/>
    <SignUp/> */}
  </React.StrictMode>
);
// питання для чого ці роути. Поки не ясно мені
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
reportWebVitals();
