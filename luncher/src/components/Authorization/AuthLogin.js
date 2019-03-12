import React from 'react'
import {connect} from 'react-redux';

import { login } from '../../actions/LogIn/Login';

class Login extends React.Component {
    state = {
        credentials : {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

      login = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
          .then(() => this.props.history.push('/login'));
      };


    render() {
        return (
            <div className="login-form">
        <form onSubmit={this.login}>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
          Login
          </button>
        </form>
      </div>
        );
    }
}

const mapStateToProps = ({error, loggingIn}) => ({
    error, loggingIn
});

export default connect(
    mapStateToProps,
    {login}
) (Login);