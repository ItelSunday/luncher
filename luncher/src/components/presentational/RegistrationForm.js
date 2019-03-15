import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import "../Authorization/AuthLogin.css";
import luncherLogo from "../../assets/luncherLogo.png";
import { register } from "../../actions";

class RegistrationForm extends React.Component {
  state = {
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
<<<<<<< HEAD
      <div className="registration-form">
        <form onSubmit={e => this.handleSubmit(e)}>
        <div className="luncherlogo" >
          <img src={luncherLogo} width="120" height="109" alt="" />
        </div>
        <h1> Admin Sign up </h1>
        {/* <label htmlFor="firstname"></label>
          <input className="firstname"
            required
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <label htmlFor="lastname"></label>
          <input className="lastname"
            required
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
            placeholder="Last Name"
          /> */}
          <label htmlFor="username"></label>
=======
      <div className="login-form">
        <form onSubmit={e => this.handleSubmit(e)}>
     
          <img src={luncherLogo} width="120" height="109" alt="" />

        <h1> Admin Sign up </h1>
           <label htmlFor="username"></label>
>>>>>>> 10f084b0cb38b937c15201c176b02ec292665d84
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
          <button type="submit">Register</button>
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
