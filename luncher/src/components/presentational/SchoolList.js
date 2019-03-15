import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD

import { getSchools } from '../../actions';

class SchoolList extends React.Component {
=======
import { Link } from 'react-router-dom';
import { getSchools, deleteSchool } from '../../actions';

class SchoolList extends React.Component {
    state = {
        school: {
        schoolName: '',
        needAmount: '',
        details: ''
        }
    }

    handleClick = id => {
        this.props.getSingleSchool(id)
    }
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968

    componentWillMount() {
        this.props.getSchools();
    }

    render() {
        return (
<<<<<<< HEAD
            <div>
                {this.props.schools.map(school => (
                    <div key={school.id}>
                        <h4>{school.schoolName}</h4>
                    </div>
=======
            <div className="school-tab">
                {this.props.schools.map(school => (
                    <Link to={`/school/${school.id}`} className="adminSchoolList" key={school.id}>
                        <h4>{school.schoolName}</h4>
                        <p>${school.needAmount}</p>
                        <p>{school.details}</p>
                    </Link>
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state.adminReducer)
    return {
        schools: state.adminReducer.schools,
        getSchools: state.adminReducer.getSchools,
<<<<<<< HEAD
        error: state.adminReducer.error
    }
}

export default connect(mapStateToProps, {getSchools})(SchoolList)
=======
        error: state.adminReducer.error,
        deleteSchool: state.adminReducer.deleteSchool,
    }
}

export default connect(mapStateToProps, {getSchools, deleteSchool })(SchoolList)
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
