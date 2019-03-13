import React, { Component } from "react";
import { connect } from "react-redux";
import { publicReducer } from "../../actions";
import SchoolCard from './SchoolCard';
import uuidv4 from "uuid";

class PublicView extends Component {
  componentWillMount() {
    this.props.publicReducer();
    console.log(this.props, "public view");
  }

  render() {
    console.log("HERE", this.props);
    return (
      <>
        <h1 className="school-list-title">Helping Schools Feed Kids</h1>
      <div className="school-list">

        {this.props.isfetchingSchools ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {this.props.schools.map(school => { 
              return (
                  <div className="school-card" key={uuidv4()}> 
                    <SchoolCard school={school}/>
                  </div>
              );
            })}
          </>
        )}
      </div>
      </>
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