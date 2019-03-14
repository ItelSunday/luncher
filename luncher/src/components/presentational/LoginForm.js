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
        <div className="luncherlogo" >
          <img src={luncherLogo} width="120" height="109" alt="" />
        </div>
        <h1> Admin Login </h1>
          <label htmlFor="username"></label>
          <input className="userlogo"
            required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <label htmlFor="password"></label>
          <input className="passlogo"
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
