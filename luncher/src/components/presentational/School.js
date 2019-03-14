import React from "react";
import { connect } from "react-redux";
import { getSingleSchool, deleteSchool } from "../../actions";
import { Link } from "react-router-dom";

// const School = props => {
class School extends React.Component {
  componentWillMount() {
    console.log("params ID", this.props.match.params.id);
    this.props.getSingleSchool(this.props.match.params.id);
  }

  render() {
    const school = this.props.singleSchool[0];

    if (this.props.gettingSchool) {
      return <h1>Loading School...</h1>;
    }
    if (school) {
      return (
        <div className="school-card">
          <h4>School: {school.schoolName}</h4>
          <p>Need Amount: ${school.needAmount}</p>
          <p>Details: {school.details}</p>
          <button onClick={(id) => this.props.deleteSchool(id)}>Delete</button>
          <Link to={`/update/${school.id}`} key={school.id}><button>Edit</button></Link>
        </div>
      );
    } else {
      return <h1>404: School Not Found</h1>;
    }
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    singleSchool: state.adminReducer.singleSchool,
    gettingSchool: state.adminReducer.gettingSchool
  };
};

export default connect(
  mapStateToProps,
  { getSingleSchool, deleteSchool }
)(School);