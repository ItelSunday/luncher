import React, { Component } from 'react';
import { connect } from 'react-redux';
import { publicReducer } from '../../actions/publicActions';
import SchoolsPublic from '../PublicSchools/SchoolsPublic';


class PublicView extends Component {

   componentWillMount() {
       this.props.publicReducer();
       console.log(this.props, "public view")
   } 

  render() {
 
   return (
      <>
        {/* {this.props.getData.map(school => {
            return (
                <SchoolsPublic school={school.schoolName} />
            )
        })}           */}
        <h1>hi</h1>
      </>
    )
  }
}


// export default PublicView;

const mapStateToPtops = state => ({
    schools: state.publicReducer.schools,
    fetching: state.publicReducer.fetching
});

export default connect(
    mapStateToPtops,
    { publicReducer }
)(PublicView);

