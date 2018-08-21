import React from "react";
import '../App.css';
import { fetchFriends, fetchPendingFriends } from '../actions';
import { connect } from "react-redux";
import { Container, Divider, Header } from 'semantic-ui-react'
import { FriendList, RecievedFriendRequests } from './FriendList';
import PlansForm from './PlansForm';

class FriendContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFriends()
    this.props.fetchPendingFriends()
  }

  render() {
    return (
    <Container>
      <Header as='h2' icon inverted textAlign='center'>
        Hey hey hey
      </Header>
      <Divider />
        <RecievedFriendRequests friends={this.props.pendingFriends} />
        <FriendList friends={this.props.friends} />
        <PlansForm friends={this.props.friends} />
    </Container>
    );
  }
}


export default connect((state)=> ({friends: state.friends, pendingFriends: state.pendingFriends}), { fetchFriends, fetchPendingFriends })(FriendContainer)
