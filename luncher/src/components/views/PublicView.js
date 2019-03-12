import React, { Component } from 'react';
import { connect } from 'react-redux';
import { publicReducer} from '../../actions/publicActions';
import SchoolsPublic from '../PublicSchools/SchoolsPublic';
import uuidv4 from 'uuid'


class PublicView extends Component {

   componentWillMount() {
       this.props.publicReducer();
       console.log(this.props, "public view")
   } 

  render() {
    console.log(this.props, "here")
   return (

      <div className="shcool-list">
        {this.props.schools.map(school => (
             
               <div>{school.schoolName}</div>
            
        ))}          
        <h1>hi</h1>
      </div>
    )
  }
}


// export default PublicView;

const mapStateToPtops = state => ({
    schools: state.schools
});

export default connect(
    mapStateToPtops,
    { publicReducer }
)(PublicView);
