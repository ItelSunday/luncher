import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PublicView from './components/views/PublicView';
import AddSchoolForm from './components/presentational/AddSchoolForm';
import {LoginView} from './components/views/LoginView';
import {Register} from './components/views/RegisterView';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div>
          <header>
            <a href="https://luncher-0311.netlify.com/index.html" className="head-luncher">Luncher</a>
            <nav>
                <a href="https://luncher-0311.netlify.com/index.html" className = "nav-link">Home</a>
                <a href="about-us.html" className = "nav-link">About Us</a>
                <a href="#" className = "nav-link">Schools</a>
                <a href="#" className = "nav-link nav-btn">Donate </a>
            </nav>
        </header>
          </div>
          <Switch>
           <Route exact path="/" component={PublicView} />
           <Route exact path="/login" component={LoginView} />
           <Route path="/add-school-form" component={AddSchoolForm} />
           <Route path="/register" component={Register} />
          </Switch>
        </div>
    );
  }
}


export default App;
