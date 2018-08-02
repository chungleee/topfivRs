import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <form>
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
              <div className="control">
                <button type="submit" className="button is-primary">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Login