import React from 'react';
import { LoginView } from '../views/LoginView/index';
import { connect } from 'react-redux';
import { AdminView } from '../views/AdminView/index';
// import { RegistrationForm } from '../presentational/RegistrationForm';


const authenticate = AdminView => LoginView =>
    class extends React.Component {
        render () {
            return this.props.loggedIn ? (
                <AdminView match={this.props.match} history={this.props.history} />
            ) : (
                <LoginView match={this.props.match} history={this.props.history} />
            )  (    
                // <RegistrationForm match={this.props.match} history={this.props.history} />
                // )  (    
                       
            );
            
        }
    }

    const mapStateToProps = state => ({
        loggedIn: state.loginReducer.loggedIn
    });

export default connect(mapStateToProps)(authenticate(AdminView)(LoginView);