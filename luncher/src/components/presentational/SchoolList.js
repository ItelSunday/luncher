import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getSchools, deleteSchool } from "../../actions";
import { getSingleSchool } from "../../actions";

class SchoolList extends React.Component {
  componentWillMount() {
    this.props.getSchools();
  }

  render() {
    return (
      <div>
        {this.props.schools.map(school => (
          <Link
            to={`/school/${school.id}`}
            className="adminSchoolList"
            key={school.id}
          >
            <h4>{school.schoolName}</h4>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state.adminReducer);
  return {
    schools: state.adminReducer.schools,
    getSchools: state.adminReducer.getSchools,
    error: state.adminReducer.error,
    deleteSchool: state.adminReducer.deleteSchool,
    getSingleSchool: state.adminReducer.getSingleSchool
  };
};

export default connect(
  mapStateToProps,
  { getSchools, deleteSchool, getSingleSchool }
)(SchoolList);
