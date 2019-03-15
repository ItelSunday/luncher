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
        <div className="luncherlogo">
          <img className="logo-expand" src={luncherLogo} width="120" height="109" alt="" />
        </div> 
        <h1> Admin Log in </h1>
          <input
            className="userlogo"
            required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          
          <input
            className="passlogo"
            required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button className="cta" type="submit">Log In</button>
        <Link to="/register" className="bnt-register" >
        <i className="cta fas fa-graduation-cap"></i> Sign Up</Link>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);