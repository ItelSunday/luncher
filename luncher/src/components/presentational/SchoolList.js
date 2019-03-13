import React from 'react';
import { connect } from 'react-redux';
import * as Icon from 'react-feather';

import { getSchools, deleteSchool } from '../../actions';

class SchoolList extends React.Component {

    componentWillMount() {
        this.props.getSchools();
    }

    render() {
        return (
            <div>
                {this.props.schools.map(school => (
                    <div className="adminSchoolList" key={school.id}>
                        <h4>{school.schoolName}</h4>
                        <Icon.Trash2 onClick={() => this.props.deleteSchool(school.id)} />
                    </div>
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
        deleteSchool: state.adminReducer.deleteSchool
    }
}

export default connect(mapStateToProps, {getSchools, deleteSchool })(SchoolList)