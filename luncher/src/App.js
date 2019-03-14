import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';
import DonateForm from './components/views/DonateForm';
import AddSchoolForm from './components/presentational/AddSchoolForm';
import School from '../src/components/presentational/School';
import UpdateSchoolForm from './components/presentational/UpdateSchoolForm';
import ThankYou from './components/views/ThankYou';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/login" component={HomeView} />
           <Route path="/add-school-form" component={AddSchoolForm} />
           <Route path="/school/:id" component={School} />
           <Route path="/update" component={UpdateSchoolForm} />
           <Route exact path="/donate-form" component={DonateForm} />
           <Route exact path="/thank-you" component={ThankYou} />
          </Switch>
        </div>
    );
  }
}

export default App;
