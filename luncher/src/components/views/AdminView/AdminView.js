import React from 'react';
import { Link, Route } from 'react-router-dom';

import AddSchoolForm from '../../presentational/AddSchoolForm';
import SchoolList from '../../presentational/SchoolList';



const AdminView = props => {
    return (
        <div>
            <header>
                <h3>School Admin Name</h3>
                <Link to="/add-school-form">Add School</Link>
            </header>
            <div>
                <SchoolList />
                <Route path="/add-school-form" render={ props => <AddSchoolForm {...props} /> } />
            </div>
        </div>
    )
}


export default AdminView