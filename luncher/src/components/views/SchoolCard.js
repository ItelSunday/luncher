import React from "react";
import { Link } from 'react-router-dom'


const SchoolCard = props => {
  return (
    <>
    <h3>{props.school.schoolName}</h3>
    <hr />
    <p><strong>Description: </strong>{props.school.details}<br/>
    <strong>Amount needed: </strong>${props.school.needAmount}</p>
    
    <Link to="/donate-form" className="bnt-donate" >{(<button>Donate</button>)}</Link>
    
    </>
  );
};
export default SchoolCard;


                
                 