import React, { Component } from 'react';
import UserLogin from './UserLogin';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';

// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

class App extends Component {

  state = {
    username: ''
  }

  handleChange = () => {
    this.setState(username: event.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <UserLogin onChange={this.handleChange}/>
          </div>
        </header>
      </div>
    )
  }
}

export default App

// const mapStateToProps = (state) => {
//   return {
//     exampleMessage: state.exampleState.exampleMessage
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeExampleMessage: () => { dispatch(changeExampleMessage()) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
