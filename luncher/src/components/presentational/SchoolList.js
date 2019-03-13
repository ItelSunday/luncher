import React from 'react';
import { connect } from 'react-redux';

import { getSchools } from '../../actions';

class SchoolList extends React.Component {

    componentWillMount() {
        this.props.getSchools();
    }

    render() {
        return (
            <div>
                {this.props.schools.map(school => (
                    <div key={school.id}>
                        <h4>{school.schoolName}</h4>
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
        error: state.adminReducer.error
    }
}

export default connect(mapStateToProps, {getSchools})(SchoolList)