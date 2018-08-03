import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return (
        <div></div>
      )
    }} />
  )
}

export default PrivateRoute