import React from 'react';
import logo from '../assets/argentBankLogo.png';
import out from '../assets/sign-out-alt.png';
import '../App.css';

const ProfilPage = (props) =>  {

    
  

    return (
      <div >

      <nav className="main-nav">
          <a className="main-nav-logo" href="/">
            <img src={logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div className="nav-user">
            <a className="main-nav-item" href="./signin">
              {/* <img src={user} className="user-circle" alt="user" /> */}
              <div className="signin-tt">Tony</div>
            </a>
            <a className="main-nav-item" href="./login">
              <img src={out} className="user-circle sout" alt="user" />
              {/* <div className="signin-tt" 
              onClick={handleLogout}>Sign Out</div> */}
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

export default ProfilPage;
