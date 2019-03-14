import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

const School = props => {
    const school = props
    return (
        <Link to={`/school/$props.school.id}`}>
            <Icon.X />
            <h4>{school.schoolName}</h4>
            <p>{school.details}</p>
            <p>{school.needAmount}</p>
            <Icon.Edit onClick={() => props.updateSchool(props.id)} />
        </Link>
    )
}

export default School