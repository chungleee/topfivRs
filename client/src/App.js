import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from './components/common/Navbar';
import Landing from './components/landing/Landing';
import Register from './components/register/Register'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
