import React from 'react';
import logo from '../assets/argentBankLogo.png';
import out from '../assets/sign-out-alt.png';
import '../App.css';
import usercircle from '../assets/user-circle.png';
import { removeCookie } from '../utils/cookies';

const DashboardPage = (props) =>  {



  const logoutUserService = (res) => {
    // event.preventDefault();
    // removeCookie();
    // window.localStorage.clear(); 
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    res.clearCookie("jwt");
    res.redirect("/");

  }


    return (
      <div >

      <nav className="main-nav">
          <a className="main-nav-logo" href="/">
            <img src={logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div className="nav-user">
            <a className="main-nav-item" href="./signin">
              <img src={usercircle} className="user-circle" alt="user" />
              <div className="signin-tt">Tony</div>
            </a>
            <a className="main-nav-item" href="./login">
              <img src={out} className="user-circle sout" alt="user" />
              <div className="signin-tt" 
              onClick={logoutUserService}>Sign Out</div>
            </a>
          </div>
        </nav>
    
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
    
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
        </div>
    );

}

export default DashboardPage;
