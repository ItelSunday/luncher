import React from 'react';
import { connect } from 'react-redux';

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
             <div>
                 <form onSubmit={e => this.handleLogin(e)}>
                    <input required type="text" name="username" value={this.state.username}
                        onChange={this.handleChange} placeholder="Username" />
                    <input required type="password" name="password" value={this.state.password}
                        onChange={this.handleChange} placeholder="Password" />
                    <button type="submit">Sign In</button>
                 </form>
             </div>
         )
     }
}

export default connect(null, { login } )(LoginForm)