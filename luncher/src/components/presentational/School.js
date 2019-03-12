import React from 'react';
import { connect } from 'react-redux';

const School = props => {
    const { school } = props
    return (
        <div key={school.id} className="school-card">
            <h4>{school.schoolName}</h4>
            <p>{school.details}</p>
            <p>{school.needAmount}</p>
        </div>
    )
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {})(School)