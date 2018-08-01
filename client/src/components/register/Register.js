import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <form>
            <div className="field">
              <label for="username" className="label">Username</label>
              <div className="control">
                <input type="text" placeholder="username" name="username" className="input" />
              </div>
            </div>
            <div className="field">
              <label for="email" className="label">Email</label>
              <div className="control">
                <input type="email" placeholder="email"   className="input" />
              </div>
            </div>
            <div className="field">
              <label for="password" className="label">Password</label>
              <input type="password" placeholder="password" className="input" />
            </div>
            <div className="field">
              <label for="password2" className="label">Confirm Password</label>
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