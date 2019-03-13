import React from 'react';
import { connect } from 'react-redux';

class AddSchoolForm extends React.Component {

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text" name="school_name" value={''} 
                        placeholder="School Name" onChange={this.handleChange} />
                <span>$</span><input type="number" min="0.01" step="0.01" name="need_amount" value={''}
                        placeholder="School Need Amount" onChange={this.handleChange} />
                <input type="number" name="school_id" value={''}
                        placeholder="School ID" onChange={this.handleChange} />
                <button type="submit">Save School</button>
            </form>
        )
    }
}

const mapStateToProps =() => ({});

export default connect (mapStateToProps)(AddSchoolForm)