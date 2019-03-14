import React from 'react';
import { connect } from 'react-redux';

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
    }

    render() {
        return (
            <form onSubmit={e => this.addSchool(e)}>
                <input type="text" name="schoolName" value={this.state.schoolName} 
                        placeholder="School Name" onChange={this.handleChange} />
                <span>$</span><input type="number" min="0.01" step="0.01" name="needAmount" value={this.state.needAmount}
                        placeholder="School Need Amount" onChange={this.handleChange} />
                <input type="text" name="details" value={this.state.details}
                        placeholder="School Details" onChange={this.handleChange} />
                <button type="submit">Save School</button>
            </form>
        )
    }
}

const mapStateToProps = () => ({});

export default connect (mapStateToProps, { addSchool })(AddSchoolForm)