import React, { Component } from 'react'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <form>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input type="text" placeholder="username" name="username" className="input" />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input type="email" placeholder="email"   className="input" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input type="password" placeholder="password" className="input" />
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <input type="password" className="input" />
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