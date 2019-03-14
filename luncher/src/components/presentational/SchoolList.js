import React from 'react';
import { connect } from 'react-redux';
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

    componentWillMount() {
        this.props.getSchools();
    }

    render() {
        return (
            <div className="school-tab">
                {this.props.schools.map(school => (
                    <Link to={`/school/${school.id}`} className="adminSchoolList" key={school.id}>
                        <h4>{school.schoolName}</h4>
                        <p>${school.needAmount}</p>
                        <p>{school.details}</p>
                    </Link>
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
        error: state.adminReducer.error,
        deleteSchool: state.adminReducer.deleteSchool,
    }
}

export default connect(mapStateToProps, {getSchools, deleteSchool })(SchoolList)