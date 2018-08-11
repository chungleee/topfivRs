import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from './components/common/Navbar';
import Landing from './components/landing/Landing';
import Register from './components/register/Register'
import Login from './components/login/Login'
import SearchBar from './components/main/SearchBar'
import PrivateRoute from './components/privateroute/PrivateRoute';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      user: {
        username: ''
      }
    }
  }
  requireUser = (userData) => {
    console.log('userData', userData);
    if(userData) {
      this.setState({
        isAuthenticated: true,
        user: {
          username: userData.username
        }
      })
    }
  }  

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path='/' component={Landing} />
          <Route path='/register' component={Register} />
          <Route path='/login' render={(props) => {
            return <Login {...props} requireUser={this.requireUser} />
          }} />
          <PrivateRoute path='/search' component={SearchBar} auth={this.state.isAuthenticated} />
        </div>
      </Router>
    );
  }
}

export default App;
