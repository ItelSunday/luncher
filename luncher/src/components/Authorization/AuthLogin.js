import React from 'react';
import { LoginView } from '../views/LoginView/index';
import { connect } from 'react-redux';
import { AdminView } from '../views/AdminView/index';


const authenticate = AdminView => LoginView =>
    class extends React.Component {
        render () {
            return this.props.loggedIn ? (
                <AdminView match={this.props.match} history={this.props.history} />
            ) : (
                <LoginView match={this.props.match} history={this.props.history} />
            );
        }
    }

    const mapStateToProps = state => ({
        loggedIn: state.loginReducer.loggedIn
    });

export default connect(mapStateToProps)(authenticate(AdminView)(LoginView));