import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Auth.scss';
import axios from 'axios';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  loginHandler = e => {
    console.log(e);
    axios.post('/api/login', { e }).then(this.props.history.push(`/dashboard/${this.state.username}`));
  };

  register = () => {};

  render() {
    console.log(this.state);
    console.log(this.props);
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
              Username:{' '}
              <input
                name='username'
                type='text'
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div>
              Password:{' '}
              <input
                name='password'
                type='password'
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <div className='bottom_button'>
              <button
                onClick={() =>
                  this.loginHandler({
                    username: this.state.username,
                    password: this.state.password
                  })
                }
              >
                Login
              </button>

              <button>Register</button>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Auth;
