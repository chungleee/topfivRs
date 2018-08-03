import React, { Component } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  type="text" 
                  placeholder="username" 
                  name="username" 
                  className="input" 
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name='email'
                  type="email" 
                  placeholder="email"   
                  className="input"
                  onChange={this.handleOnChange} 
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input 
                name='password'
                type="password" 
                placeholder="password" 
                className="input"
                onChange={this.handleOnChange} 
              />
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <input 
                name='password2'
                type="password" 
                className="input"
                onChange={this.handleOnChange} 
              />
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-primary">Register</button>
              </div>
              <div className="control">
                <button type="reset" className="button">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Register