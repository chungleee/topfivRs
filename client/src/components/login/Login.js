import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      isAuthenticated: false,
      user: {
        username: ''
      }
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    // prevent page refresh
    e.preventDefault()
    // destructure state
    const { email, password } = this.state
    // assign to userData
    const userData = { email, password }
    // axios post /api/users/login
    axios
      .post('/api/users/login', userData)
      .then((response) => {
        console.log(response);
        // destructure
        const { success, token } = response.data
        // if data.success true && data.token true - isAuthenticated true
        if(success && token) {
          // decode token
          const decoded = jwt_decode(token)
          this.setState({
            isAuthenticated: true,
            user: {
              username: decoded.username
            }
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { isAuthenticated, user } = this.state

    return isAuthenticated 
      ? (
      <div>{user.username}</div>
    ) :
     (
      <section className="section">
        <div className="container">
          <form>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  type="email" 
                  placeholder="email"   
                  className="input" 
                  name='email'
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input 
                type="password" 
                placeholder="password" 
                className="input" 
                name='password'
                onChange={this.handleOnChange}
              />
            </div>
            <div className="field">
              <div className="control">
                <button 
                  onClick={this.handleOnSubmit}
                  type="submit" 
                  className="button is-primary"
                >Log In</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Login