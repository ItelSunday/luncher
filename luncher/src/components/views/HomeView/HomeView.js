import React from 'react';
import { withRouter } from 'react-router-dom';

import { authenticate } from '../../Authorization';


class HomeView extends React.Component {

    render() {
        return (
            <>
              <HomeComponent match={this.props.match} history={this.props.history} />
               
            </>
        )
    }
}

const HomeComponent = authenticate;

export default withRouter(HomeView)