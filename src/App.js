import React, { Component } from 'react';
import FriendContainer from './FriendContainer';
// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

class App extends Component {
  handleClick = () => {
     console.log('hello')
     this.props.changeExampleMessage()
   }

   render() {
     return (
       <div className="App">
        <FriendContainer />
       </div>
     );
   }
 }

export default App
//
// const mapStateToProps = (state) => {
//   return {
//     exampleMessage: state.exampleState.exampleMessage
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeExampleMessage: () => { dispatch(changeExampleMessage()) }
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
