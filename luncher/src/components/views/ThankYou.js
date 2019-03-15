import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = props => {
    return (
        <div className="thankyou">
            <div className="thank-box">
            <h1>Thank you for your Donation</h1>
            <Link to="/" className="bnt-donate" >{(<button>Go back to School's list <i className="fas fa-arrow-circle-right" /></button>)}</Link>
            </div>
        </div>
    )
}


export default ThankYou;