import React from "react";
import { Link } from 'react-router-dom'

const DonateForm = props => {
    return(
        <div className="backg-donate">
            <div className="donate-container">
                <form>
                <i className="fas fa-hamburger" />
                    <input
                        className="don-amount"
                        type="number"
                        placeholder="Donation Amount"
                        min="2" max="7"
                    />
                
                <div className="don-block-one">
                <input 
                    className="card-holder"
                    required
                    type="text"
                    placeholder="Cardholder Name"
                />
                 <input
                    className="cvv"
                    required
                    type="numbers"
                    min="3" max="3"
                    placeholder="CVV"  
                />
                </div>

                <div className="don-card" >
                <input
                    className="card-number"
                    required
                    type="number"
                    placeholder="Card Number"  
                />
                </div>
                <label>Expiration</label> 
                <div className="don-exp">
                    <select className="exp-month" name='expireMM' id='expireMM'>
                        <option value=''>Month</option>
                        <option value='01'>January</option>
                        <option value='02'>February</option>
                        <option value='03'>March</option>
                        <option value='04'>April</option>
                        <option value='05'>May</option>
                        <option value='06'>June</option>
                        <option value='07'>July</option>
                        <option value='08'>August</option>
                        <option value='09'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select> 
                    <select className="exp-year" name='expireYY' id='expireYY'>
                        <option value=''>Year</option>
                        <option value='10'>2019</option>
                        <option value='11'>2020</option>
                        <option value='12'>2021</option>
                        
                    </select>
                    <i className="fab fa-cc-mastercard"/>
                    <i className="fab fa-cc-visa"/>
                    <i className="fab fa-cc-amex"/>
                    <i className="fab fa-cc-discover"/>

                </div>
               
                <Link to="/thank-you" className="btn-form" >{(<button>Donate Now</button>)}</Link>
                
                </form>
            </div>
        </div>
    );
};

export default DonateForm;