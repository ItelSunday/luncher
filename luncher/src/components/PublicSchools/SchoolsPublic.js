import React from 'react';
import { connect } from 'react-redux';
import { publicReducer } from '../../actions/publicActions';

const SchoolsPublic =  props => {
    console.log(props, "shcoolpublic")
    const { schoolName } = props;

    return (
      <div>
        <h2>{schoolName}</h2>
      </div>
    )
 
}


const mapStateToProps = state => ({
    schools: state.schools
})


export default connect(
    mapStateToProps,
    { publicReducer }
)(SchoolsPublic);



