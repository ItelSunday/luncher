import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';
import AddSchoolForm from './components/presentational/AddSchoolForm';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/home" component={HomeView} />
           <Route path="/add-school-form" component={AddSchoolForm} />
          </Switch>
        </div>
    );
  }
}


export default App;
