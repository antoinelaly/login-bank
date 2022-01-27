import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/argentBankLogo.png';
import usercircle from '../assets/user-circle.png';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';

const LoginPage = () => {

  const dispatch = useDispatch();
  const [notification, setNotification] = useState('');
  const [success, setSuccess] = useState(false);
  const login = useSelector(state => state.login.response);

  const onHandleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(loginUserAction({
      email, password,
    }));
  }

  

  useEffect(() => {
    if (login !== undefined) {
      setNotification(login.message);
      // setSuccess(login.success);
      setSuccess(login.status);
      // if (login.success) {
        if (login.status === 200) {
        setCookie('token', login.token, 1);
        
      }
    }
  }, [login]);



  useEffect(() => {
    setNotification('');
    setSuccess(false);
  }, []);

  return (
    <div>

      {success !== 200 ? <div>{notification}</div> : <Navigate to='/dashboard' />}

      <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img src={logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./#">
          <img src={usercircle} className="user-circle" alt="user" />
          <div className="signin-tt">Sign In</div>
        </a>
      </div>
    </nav>

    <main className="main bg-dark">

    <div className="space-top"></div>
      <section className="sign-in-content">

      <img src={usercircle} className="user-circle" alt="user" />
        <h1>Sign In</h1>
        <form noValidate onSubmit={onHandleLogin}>
          <div className="input-wrapper">
            <label for="email">Email</label>
            <input 
            type="text" 
            id="email"
            name="email"
            label="Email Address"
            // onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input 
              id="password"
              name="password"
              label="Password"
              type="password"
              // onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="sign-in-button">
              Sign In</button>

        </form>
      </section>
      <div className="space-top"></div>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </div>
  );
};

export default LoginPage;