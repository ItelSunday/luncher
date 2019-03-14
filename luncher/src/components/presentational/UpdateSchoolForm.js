import React from 'react';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';

import { updateSchool } from '../../actions';

class UpdateSchoolForm extends React.Component {


    render() {
        return (
            <div className="update-admin">
            <form>
                <Icon.X onClick={() => this.props.history.push('/login')} />
                <input type="text" value={this.schoolName} placeholder={this.schoolName} onChange={this.handleChange} />
                <input type="number" value={this.needAmount} placeholder={this.needAmount} onChange={this.handleChange} />
                <input type="text" value={this.details} placeholder={this.details} onChange={this.handleChange} />
                <button onClick={() => this.updateSchool(this.id)}>Save Changes</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        updateSchool: state.adminReducer.uddateSchool
    }
}

export default connect(mapStateToProps, {updateSchool} )(UpdateSchoolForm)