import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './Header';
import FriendContainer from './FriendContainer';

class App extends Component {


  render() {
    return (
      <div className="App">
          <FriendContainer/>
      </div>
    );
  }
}

function mapStateToProps(state) {

    return {
      state: {...state}
    };
}

export default connect(mapStateToProps, null)(App);
