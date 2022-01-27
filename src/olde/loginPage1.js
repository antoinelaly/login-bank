import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      // isSuccess = this.props.response.login.response.success;
      isSuccess = this.props.response.login.response.status;
      message = this.props.response.login.response.message;
     console.log("isSuccess", isSuccess); 
     console.log("message", message); 
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
      }
    }
    console.log("isSuccess", isSuccess); 
    return (
      <div>
        <h3>Login Page</h3>
        {isSuccess !== 200 ? <div>{message}</div> : <Navigate to='/dashboard' />}
        
        {/* {!isSuccess ? <div>non</div> : <div>ok</div>} */}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to='/register'>Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);