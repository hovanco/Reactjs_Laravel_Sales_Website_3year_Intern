import React, { Component } from 'react';
import './Style_Login.css';
import { isEmail } from 'validator';
import { callApi } from '../../utils/apiCaller';
// import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';



export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }
  state = {
    isPasswordShown: false
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  getInitialState = () => ({
    data: {
      email: '',
      password: ''
    },
    errors: {}
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    });
  }

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (!isEmail(data.email)) errors.email = 'Email must be valid.';
    if (data.email === '') errors.email = 'Email can not be blank.';
    if (data.password === '') errors.password = 'Password must be valid.';

    return errors;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      console.log(data);
      try {
        const loginResponse = await callApi('auth/login', 'POST', data)
        const token = loginResponse.data.access_token
        localStorage.setItem('_token', token)
        const userResponse = await callApi('auth/me', 'GET', null, token)
        localStorage.setItem('_user', JSON.stringify(userResponse.data))
        this.props.history.push('/') // -> go to home menu
      } catch (error) {
        console.log("Login error: ", error);
      }
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  }
  render() {
    const { isPasswordShown } = this.state;
    const { data, errors } = this.state;
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <header className="login-title">Login Form</header>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-input-field">
              <input
                placeholder="Email"
                id="email"
                value={data.email} invalid={errors.email ? true : false}
                name="email"
                onChange={this.handleChange}
              />
              <span className="login-messages">{errors.email}</span>
            </div>

            <div className="login-input-field">
              <input
                placeholder="Password"
                id="password"
                value={data.password}
                type={isPasswordShown ? "text" : "password"}
                name="password"
                invalid={errors.password ? true : false}
                onChange={this.handleChange}
              />
              <span className="login-messages">{errors.password}</span>
              <i
                className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                onClick={this.togglePasswordVisiblity}
              />
            </div>

            <div className="login-button">
              <div className="login-btn-background"></div>
              <button>LOGIN</button>
            </div>
            <div className="login-text-center">
              <small className="fogotPass"><NavLink to="/register">Register</NavLink> | Fogot password ?</small>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
