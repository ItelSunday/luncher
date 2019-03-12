import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminView from './components/views/AdminView';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          !Sanitysdfsdfsd
          <Route path="/admin-view" component={AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
