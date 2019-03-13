import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { publicReducer } from "../../actions";
=======
import { publicReducer } from "../../actions/publicActions";
>>>>>>> e7825a86a5bf9d7e8ce0f191a603b9a42f361dd5
import uuidv4 from "uuid";

class PublicView extends Component {
  componentWillMount() {
    this.props.publicReducer();
    console.log(this.props, "public view");
  }

  render() {
    console.log("HERE", this.props);
    return (
      <div className="school-list">

        {this.props.isfetchingSchools ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {this.props.schools.map(school => { 
              return (
                  <>
                  <div><strong>School Name: </strong>{school.schoolName}</div>
                  <div><strong>School descripton: </strong>{school.details}</div>
                  <div><strong>Amount needed: </strong>{school.needAmount}</div>
                  </>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state.publicReducer);
  return {
    schools: state.publicReducer.schools,
    isfetchingSchools: state.publicReducer.isfetchingSchools
  };
};

export default connect(
  mapStateToProps,
  { publicReducer }
)(PublicView);