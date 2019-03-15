import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addSchool } from '../../actions';


class AddSchoolForm extends React.Component {
    state = {
        schoolName: '',
        needAmount: '',
        details: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addSchool = e => {
        e.preventDefault();
        this.props.addSchool(this.state);
        this.setState({ schoolName: '', needAmount: '', details: '' });
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="add-school">
                <form onSubmit={e => this.addSchool(e)}>
                <span onClick={() => this.props.history.push("/login")} ><i className="fas fa-ban" /> Cancel </span>
                    <input className="school-name" type="text" name="schoolName" value={this.state.schoolName} 
                            placeholder="School Name" onChange={this.handleChange} />
                            <div className="school-need">
                            <i className="fas fa-dollar-sign" /> <input  type="number" min="0.01" step="0.01" name="needAmount" value={this.state.needAmount}
                            placeholder="School Need Amount" onChange={this.handleChange} />
                            </div>
                    <input className="school-details" type="text" name="details" value={this.state.details}
                            placeholder="School Details" onChange={this.handleChange} />
                    <button type="submit">Save School</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps, { addSchool })(AddSchoolForm))