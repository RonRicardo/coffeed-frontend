import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';
import SignUp from './auth/SignUp.js';

// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <SignUp />
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
