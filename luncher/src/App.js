import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';



class App extends Component {
  render() {
    return (
        <div className="App">
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/login" component={HomeView} />
        </div>
    );
  }
}


export default App;
