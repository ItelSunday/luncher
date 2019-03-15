<<<<<<< HEAD
import React from 'react';
import { Link, Route } from 'react-router-dom';

import AddSchoolForm from '../../presentational/AddSchoolForm';
import SchoolList from '../../presentational/SchoolList';



const AdminView = props => {
    return (
        <div>
            <header>
                <h3>School Admin Name</h3>
                <Link to="/add-school-form">Add School</Link>
            </header>
            <div>
                <SchoolList />
                <Route path="/add-school-form" render={ props => <AddSchoolForm {...props} /> } />
            </div>
        </div>
    )
}


export default AdminView
=======
// Added logout button and changed AdminView to class component
import React from "react";
import { Link } from "react-router-dom";

import SchoolList from "../../presentational/SchoolList";

import { connect } from "react-redux";
import { logout } from "../../../actions";

const AdminView = props => {
//class AdminView extends React.Component {
  //render() {
    return (
      <div>
        <div className="admin-nav">
          <Link to="/add-school-form" className="add-button">Add School</Link>
          <p>Welcome {props.username}</p>
          <button onClick={props.logout}>Logout</button>
        </div>
        <div>
          <SchoolList deleteSchool={props.deleteSchool} />
        </div>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    logout: state.loginReducer.logout,
    deleteSchool: state.adminReducer.deleteSchool,
    addingSchool: state.adminReducer.addSchool
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(AdminView);
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
