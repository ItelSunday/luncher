import React from "react";

const Schoolcard = props => {
  return (
    <>
    <h3>{props.school.schoolName}</h3>
    <hr />
    <p><strong>Description: </strong>{props.school.details}<br/>
    <strong>Amount needed: </strong>${props.school.needAmount}</p>
    <div className="bnt-donate">
    <button >Donate</button>
    </div>
    </>
  );
};

export default Schoolcard;


                
                 