import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Log In
import LogIn from './components/Authorization/AuthLogin'

import AdminView from './components/views/AdminView';
import PublicView from './components/views/PublicView';
import './App.css';


class App extends Component {
 

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LogIn} />
          <Route path="/" component={PublicView} />
          <Route path="/admin-view" component={AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
