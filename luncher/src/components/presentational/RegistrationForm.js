import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import "../Authorization/AuthLogin.css";
import luncherLogo from "../../assets/luncherLogo.png";
import { register } from "../../actions";

class RegistrationForm extends React.Component {
  state = {
    // Additional Feature
    // firstname: "",
    // lastname: "",
    fireRedirect: false,
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {username, password } = this.state
    this.props.register({username, password})
    this.setState({ fireRedirect: true });


  

  };
  render() {
    const { from } = this.props.state || '/'
    const { fireRedirect } = this.state
    return (
      <div className="login-form">
        <form onSubmit={e => this.handleSubmit(e)}>
     
          <img className="logo-animate" src={luncherLogo} width="120" height="109" alt="" />

        <h1> Admin Sign up </h1>
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
          <button className="cta" type="submit">Register</button>
        </form>
        {fireRedirect && (
          <Redirect to={from || '/login'}/>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(RegistrationForm);