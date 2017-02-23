import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name } = this.props.user;
    const { year, photos } = this.props.page;
    return <div>
      <p>Hello from app, {name}!</p>
      <p>You have { photos } from {year}!</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);