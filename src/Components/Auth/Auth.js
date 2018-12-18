import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Auth.scss';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  login = () => {};
  register = () => {};

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div className='Auth'>
          <div className='login_container'>
            <img
              src='https://www.flaticon.com/premium-icon/icons/svg/1231/1231521.svg'
              alt='smiley'
            />
            <h1>Helo</h1>
            <div>
              Username: <input name='username' type='text' onChange={this.changeHandler} />
            </div>
            <div>
              Password: <input name='password' type='password' onChange={this.changeHandler} />
            </div>
            <div className='bottom_button'>
              <Link to='/dashboard'>
                <button>Login</button>
              </Link>
              <button>Register</button>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Auth;
