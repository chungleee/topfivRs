import React, { Component } from 'react'

class ContentTable extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <table className="table is-hoverable is-margin-auto">
            <tbody>
              <tr>
                <th>#1</th>
                <td>Carver</td>
                <td>123 peter street</td>
              </tr>
              <tr>
                <th>#2</th>
                <td>starbucks</td>
                <td>123 peter street</td>
              </tr>
              <tr>
                <th>#3</th>
                <td>starbucks</td>
                <td>123 peter street</td>
              </tr>
              <tr>
                <th>#4</th>
                <td>starbucks</td>
                <td>123 peter street</td>
              </tr>
              <tr>
                <th>#5</th>
                <td>starbucks</td>
                <td>123 peter street</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}

export default ContentTable