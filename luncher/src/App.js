import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';



=======
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';
import AddSchoolForm from './components/presentational/AddSchoolForm';


>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
class App extends Component {
  render() {
    return (
        <div className="App">
<<<<<<< HEAD
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/home" component={HomeView} />
=======
          <Switch>
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/login" component={HomeView} />
           <Route path="/add-school-form" component={AddSchoolForm} />
          </Switch>
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
        </div>
    );
  }
}


export default App;
