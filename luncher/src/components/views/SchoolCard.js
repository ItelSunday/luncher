import React from 'react'
import { connect } from "react-redux";
import { publicReducer } from "../../actions";

class SchoolCard extends React.Component {

 
  render() {
    return (
      <div className="bnt-donate">
        <button>Donate</button>
      </div>
    )
  }
}

const mapStateToProps = (state, schoolName) => { 
    return {
        school: schoolName.school,
        schools: state.schools,

    }
}


export default connect(mapStateToProps, { publicReducer })(SchoolCard);