
import React from "react";
import FriendCard from "./FriendCard";
import FriendRequest from './FriendRequest';
import { fetchFriends, fetchPendingFriends } from './actions';
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

class FriendContainer extends React.Component {
  //
  // state = {
  //   friends: [],
  //   friend_requests: [],
  //   users: []
  // }

  componentDidMount() {
    this.props.fetchFriends()
    this.props.fetchPendingFriends()
    // fetch("http://localhost:3000/users/1/friends")
    //   .then(r => r.json())
    //   .then(r => this.fetchFriends(r))
    //
    // fetch("http://localhost:3000/users/1/friend_requests/incoming")
    //   .then(r => r.json())
    //   .then(r => this.fetchFriendRequests(r))
    //
    //   fetch("http://localhost:3000/users/")
    //     .then(r => r.json())
    //     .then(r => this.fetchUsers(r))
  }

  // fetchUsers = (resp) => {
  //   this.setState({
  //     users: resp
  //   })
  // }
  //
  // fetchFriendRequests = (resp) => {
  //   this.setState({
  //     friend_requests: resp
  //   })
  // }
  //
  // fetchFriends = (resp) => {
  //   this.setState({
  //     friends: resp
  //   })
  // }

  render() {
    const fetchedFriends = this.props.friends.map(friend => {
      return <FriendCard {...friend} key={friend.id} />;
    });
    const fetchedPendingFriends = this.props.pendingFriends.map(friend => {
      return <FriendRequest {...friend} key={friend.id} />;
    });
    console.log(this.props)
    return (
      <Row className="show-grid">
      <h2>Current Friends</h2>
        <Col lg={6} >{fetchedFriends}</Col>

        <h2>Friend Requests</h2>
        <Col lg={6} >{fetchedPendingFriends}</Col>
      </Row>
    );
  }
}


export default connect((state)=> ({friends: state.friends, pendingFriends: state.pendingFriends}), { fetchFriends, fetchPendingFriends })(FriendContainer)
