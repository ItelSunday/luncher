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