import React from 'react';
import { withRouter } from 'react-router-dom';

import { authenticate } from '../../Authorization';


class HomeView extends React.Component {

    render() {
        return (
            <div>
                <nav className="navBar">
                    <h3>Luncher Logo</h3>
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <button>Donate</button>
                </nav>
                <div>
                    <h1>Helping Schools Feed Kids</h1>
                    <button>Find Your School</button>
                </div>
                <footer>
                    <h4>Admin Access</h4>
                    <HomeComponent match={this.props.match} history={this.props.history} />
                </footer>
            </div>
        )
    }
}

const HomeComponent = authenticate;

export default withRouter(HomeView)