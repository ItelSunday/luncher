import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';



class App extends Component {
  render() {
    return (
        <div className="App">
<<<<<<< HEAD
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/home" component={HomeView} />
=======
          <Route path="/" component={PublicView} />
          <Route path="/admin-view" component={AdminView} />
>>>>>>> e7825a86a5bf9d7e8ce0f191a603b9a42f361dd5
        </div>
    );
  }
}


export default App;
