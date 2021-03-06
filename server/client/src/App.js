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
import { setAuth } from './utils/setAuth';
import jwt_decode from 'jwt-decode'

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

  componentDidMount() {
    if(localStorage.jwtToken) {
      setAuth(localStorage.jwtToken)
      // decode token
      const decoded = jwt_decode(localStorage.jwtToken)
      // log in user
      this.logInUser(decoded)
      // check if exp < currentTime
      const currentTime = Date.now() / 1000
      if(decoded.exp < currentTime) {
        this.logoutUser()
      }
    }
  }

  logInUser = (userData) => {
    if(userData) {
      this.setState({
        isAuthenticated: true,
        user: {
          username: userData.username
        }
      })
    }
  }  

  logoutUser = () => {
    this.setState({
      isAuthenticated: false,
      user: {
        username: ''
      }
    })
    localStorage.removeItem('jwtToken')
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar 
            auth={this.state.isAuthenticated} 
            logoutUser={this.logoutUser}
          />

          <Route 
            exact 
            path='/' 
            component={Landing} 
          />
          <Route 
            path='/register' 
            render={(props) => {
              return <Register {...props} logInUser={this.logInUser} />
            }} 
          />

          <Route 
            path='/login' 
            render={(props) => {
              return <Login {...props} logInUser={this.logInUser} />
            }} 
          />
          <PrivateRoute 
            path='/search' 
            component={SearchBar} 
            auth={this.state.isAuthenticated}
          />
        </div>
      </Router>
    );
  }
}

export default App;
