import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './Header';
import FriendContainer from './FriendContainer';
import { Row, Col, PageHeader } from 'react-bootstrap';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
          <FriendContainer/>
      </div>
    );
  }
}

export default connect(null, null)(App);
