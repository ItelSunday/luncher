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

  deleteSchool = (e, id) => {
    e.preventDefault();
    this.props.deleteSchool(id)
    this.props.history.push("/login");
  };


  render() {
    const school = this.props.singleSchool[0];

    if (this.props.gettingSchool) {
      return <h1>Loading School...</h1>;
    }
    if (school) {
      return (
        <div className="singleschool-container">
          <div className="school-card">
            <div className="button-singleschool">
              <button onClick={(e) =>this.deleteSchool(e, school.id)}>
                Delete
              </button>
              <Link to={`/update/${school.id}`} key={school.id}><button>Edit</button></Link>
            </div>          
            <h1>School: {school.schoolName}</h1>
            <p>Need Amount: {school.needAmount}</p>
            <p>Details: {school.details}</p>
          </div>
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