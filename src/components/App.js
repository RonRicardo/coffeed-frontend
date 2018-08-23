import React, { Component } from 'react';
import '../App.css';
import { fetchPlans } from '../actions';
import FriendContainer from './FriendContainer'
import PlansList from './PlansList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <FriendContainer />
      </div>
    );
  }
}

export default App
