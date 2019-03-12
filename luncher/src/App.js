import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AdminView from './components/views/AdminView';
import PublicView from './components/views/PublicView';
import './App.css';


class App extends Component {
 

  render() {
    return (
      <Router>
        <div className="App">
        
        <Link to="/public">Public Page</Link>
          !Sanitysdfsdfsd
          <Route path="/public" component={PublicView} />
          <Route path="/admin-view" component={AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
