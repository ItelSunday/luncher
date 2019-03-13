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
        <header>
          <button onClick={props.logout}>Logout</button>
          <p>Welcome {props.username}</p>
          <Link to="/add-school-form">Add School</Link>
        </header>
        <div>
          <SchoolList deleteSchool={props.deleteSchool} />
          />
        </div>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    logout: state.loginReducer.logout,
    deleteSchool: state.adminReducer.deleteSchool
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(AdminView);
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
