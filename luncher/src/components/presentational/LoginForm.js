import React from "react";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
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
<<<<<<< HEAD
        <div className="luncherlogo" >
          <img src={luncherLogo} width="120" height="109" alt="" />
        </div>
        <h1> Admin Login </h1>
          <label htmlFor="username"></label>
          <input className="userlogo"
=======
          <img src={luncherLogo} width="120" height="109" alt="" />
          
          <input
            className="userlogo"
>>>>>>> 10f084b0cb38b937c15201c176b02ec292665d84
            required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
<<<<<<< HEAD
          <label htmlFor="password"></label>
          <input className="passlogo"
=======
          
          <input
            className="passlogo"
>>>>>>> 10f084b0cb38b937c15201c176b02ec292665d84
            required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
<<<<<<< HEAD
          <button type="submit">Log In</button>
          <button type="submit">Create an account</button>
=======
          <button type="submit">Sign In</button>
        <Link to="/register" className="bnt-register" ><i className="fas fa-graduation-cap"></i> Sing Up</Link>
>>>>>>> 10f084b0cb38b937c15201c176b02ec292665d84
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);
