import React, { Component } from 'react'
import './Main.css'
import ContentTable from './ContentTable'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      businesses: {}
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    console.log('name', e.target.name);
  }

  render() {
    return (
      <div>
        {/* IMAGE HERO */}
        <div className="hero is-medium is-relative">
          <div className="is-overlay img"></div>
          <div className="hero-body"></div>
        </div>

        {/* SEARCH BAR + BUTTONS */}
        <section className="section">
          <div className="container">
            <div className="field">
              <input 
                onChange={this.handleOnChange}
                className="input" 
                type="text" 
                placeholder="Type in your current address" 
                name="location" 
              />
            </div>
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button onClick={this.handleOnSubmit} name='restaurants' className="button">Restaurants</button>
              </div>
              <div className="control">
                <button onClick={this.handleOnSubmit} name='bars' className="button">Bars</button>
              </div>
              <div className="control">
                <button onClick={this.handleOnSubmit} name='cafes' className="button">Cafes</button>
              </div>
            </div>
          </div>
        </section>

        {/* ContentTable Component - todo: pass component state to ContentTable props */}
        <ContentTable />
      </div>
    )
  }
}

export default SearchBar