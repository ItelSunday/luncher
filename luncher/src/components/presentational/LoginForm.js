<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';

import '../Authorization/AuthLogin.css';
import luncherLogo from '../../assets/luncherLogo.png'
import { login } from '../../actions';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.login({
            username: this.state.username,
            password: this.state.password
        });
    }
     render() {
         return (
            <div className="login-form">
                 <form onSubmit={e => this.handleLogin(e)}>
                 <img src= {luncherLogo} width="40" height="40" alt=""/>
                        <label for="username">Username</label>
                    <input required type="text" name="username" value={this.state.username}
                        onChange={this.handleChange} placeholder="Username" />
                        <label for="password">Password</label>
                    <input required type="password" name="password" value={this.state.password}
                        onChange={this.handleChange} placeholder="Password" />
                    <button type="submit">Sign In</button>
                 </form>
             </div>
         )
     }
}

export default connect(null, { login } )(LoginForm)
=======
import React from "react";
import { connect } from "react-redux";

import "../Authorization/AuthLogin.css";
import luncherLogo from "../../assets/luncherLogo.png";
import { login } from "../../actions";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={e => this.handleLogin(e)}>
          <img src={luncherLogo} width="60" height="60" alt="" />
          <label htmlFor="username">Username</label>
          <input
            className="userlogo"
            required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            className="passlogo"
            required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
