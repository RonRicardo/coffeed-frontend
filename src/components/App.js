import React, { Component } from 'react';
import '../App.css';
import { fetchPlans } from '../actions';
import { connect } from 'react-redux'
import FriendContainer from './FriendContainer'
import PlansList from './PlansList'

class App extends Component {

  componentDidMount() {
    this.props.fetchPlans()
  }

  render() {
    return (
      <div className="App">
        <FriendContainer />
        <PlansList plans={this.props.plans}/>
      </div>
    );
  }
}

export default connect((state)=> ({ plans: state.plans}), { fetchPlans }, null)(App)
