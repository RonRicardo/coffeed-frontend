import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FriendContainer from './FriendContainer';
import { Row, Col, PageHeader } from 'react-bootstrap';

class App extends Component {


  render() {
    return (
      <div className="App">
        <PageHeader>
        This is where my title would go... <small>if I had one</small>
        </PageHeader>
        <div className="col">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"><FriendContainer/></div>
            <div className="col-md-4"></div>
          </div>
          </div>
      </div>
    );
  }
}

export default connect(null, null)(App);
