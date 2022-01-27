import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/loginPage';
import HomePage from '../components/homePage'; 
import Profilage from '../components/profilPage';
import DashboardPage from '../components/dashboardPage';

function App() {
  const token = localStorage.getItem('token');

  if(!token) {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profil' element={<Profilage />} />
        </Routes>
      </BrowserRouter>
    )
  } else {
    return (

          <Route	path='/dashboard' element={ <DashboardPage /> }   />

    );
  }
}

export default App;