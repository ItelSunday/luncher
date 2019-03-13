import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD

import { getSchools } from '../../actions';
=======
import * as Icon from 'react-feather';

import { getSchools, deleteSchool } from '../../actions';
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe

class SchoolList extends React.Component {

    componentWillMount() {
        this.props.getSchools();
    }

    render() {
        return (
            <div>
                {this.props.schools.map(school => (
<<<<<<< HEAD
                    <div key={school.id}>
                        <h4>{school.schoolName}</h4>
=======
                    <div className="adminSchoolList" key={school.id}>
                        <h4>{school.schoolName}</h4>
                        <Icon.Trash2 onClick={() => this.props.deleteSchool(school.id)} />
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
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
<<<<<<< HEAD
        error: state.adminReducer.error
    }
}

export default connect(mapStateToProps, {getSchools})(SchoolList)
=======
        error: state.adminReducer.error,
        deleteSchool: state.adminReducer.deleteSchool
    }
}

export default connect(mapStateToProps, {getSchools, deleteSchool })(SchoolList)
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
