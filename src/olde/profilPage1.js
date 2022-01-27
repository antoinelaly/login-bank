import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { profilUserAction } from '../actions/authenticationActions';

class ProfilPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

    this.props.dispatch(profilUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
  }

  render() {
    let message, isSuccess;

    if (this.props.response.profil.hasOwnProperty('response')) {
      isSuccess = this.props.response.profil.response.success;
      message = this.props.response.profil.response.message;
    }
    
    return (
      <div>
        <h3>ProfilPage</h3>
        {!isSuccess ? <div>{message}</div> : <Navigate to='login' />}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='/login'>Login here</Link>
      </div>
    )
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(ProfilPage);
