import React, { Component } from 'react'
import './Main.css'
import ContentTable from './ContentTable'

class SearchBar extends Component {
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
              <input className="input" type="text" placeholder="Type in your current address" name="address" />
            </div>
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button">Restaurants</button>
              </div>
              <div className="control">
                <button className="button">Bars</button>
              </div>
              <div className="control">
                <button className="button">Cafes</button>
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