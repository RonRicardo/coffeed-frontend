import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import FriendContainer from './FriendContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <FriendContainer />
      </div>
    );
  }
}

export default connect(null, null)(App);
