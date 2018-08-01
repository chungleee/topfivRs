import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <section class="section">
        <div class="container">
          <form>
            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control">
                <input type="email" placeholder="email"   class="input" />
              </div>
            </div>
            <div class="field">
              <label for="password" class="label">Password</label>
              <input type="password" placeholder="password" class="input" />
            </div>
            <div class="field">
              <div class="control">
                <button type="submit" class="button is-primary">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Login