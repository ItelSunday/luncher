import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';



=======
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { HomeView } from './components/views/HomeView';
import PublicView from './components/views/PublicView';
import DonateForm from './components/views/DonateForm';
import AddSchoolForm from './components/presentational/AddSchoolForm';
import School from "./components/presentational/School";
import ThankYou from './components/views/ThankYou';
import UpdateSchoolForm from './components/presentational/UpdateSchoolForm';


>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
class App extends Component {
  render() {
    return (
        <div className="App">
<<<<<<< HEAD
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/home" component={HomeView} />
=======
          <header>
            <a href="index.html" className="head-luncher">Luncher</a>
            <nav>
                <a href="https://luncher-0311.netlify.com/" className="nav-link"><i className="fas fa-home"></i> Home</a>
                <a href="https://luncher-0311.netlify.com/about-us.html" className="nav-link"><i className="fas fa-users"></i> About Us</a>
                <Link to="/" className="bnt-donate" ><i className="fas fa-graduation-cap"></i> Schools</Link>
                <Link to="/" className="bnt-donate" >{(<button>Donate<i className="fas fa-arrow-circle-right" /></button>)}</Link>
            </nav>
        </header>
          <Switch>
           <Route exact path="/" component={PublicView} />
           <Route exact  path="/login" component={HomeView} />
           <Route path="/add-school-form" component={AddSchoolForm} />
           <Route path="/school/:id" component={School} />
           <Route exact path="/donate-form" component={DonateForm} />
           <Route exact path="/thank-you" component={ThankYou} />
           <Route path="/update/:id" component={UpdateSchoolForm} />
          </Switch>
          <footer>
          <Link to="/login" className="bnt-donate" >{(<button><i className="fas fa-key"></i> Admin Login</button>)}</Link>
            <p>Copyright 2019 - Luncher</p>
        </footer>
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
        </div>
    );
  }
}


export default App;
