import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import AddSchoolForm from '../presentational/AddSchoolForm';



class AdminView extends React.Component {
    state = {
        newSchool: ''
    }

    render() {
        return (
            <div>
                <header>
                    <h3>School Admin Name</h3>
                    <Link to="/add-school-form">Add School</Link>
                </header>
                <Route exact path="/add-school-form" render={ props => <AddSchoolForm {...props} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    adminView: state.admins
})


export default connect(mapStateToProps, {})(AdminView)