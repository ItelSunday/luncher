import React from 'react';
import { connect } from 'react-redux';
import { publicReducer } from '../../actions/publicActions';

const SchoolsPublic =  props => {
    const { schoolName } = props.publicReducer;

    return (
      <div>
        <h2>{schoolName}</h2>
      </div>
    )
 
}

// export default SchoolsPublic;

const mapStateToProps = state => ({
    school: state.publicReducer.schools
})


export default connect(
    mapStateToProps,
    { publicReducer }
)(SchoolsPublic);



