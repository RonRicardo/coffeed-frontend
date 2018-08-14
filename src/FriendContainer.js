
import React from "react";
import FriendCard from "./FriendCard";
// import EditFriend from "./EditFriend";
// import { connect } from "react-redux";

export default class FriendContainer extends React.Component {

  state = {
    friends: [],
    friend_requests: [],
    users: []
  }

  componentDidMount() {
    // this.props.fetchHobsWithJobs()
    fetch("http://localhost:3000/users/1/friends")
      .then(r => r.json())
      .then(r => this.fetchFriends(r))

    fetch("http://localhost:3000/users/1/friend_requests/incoming")
      .then(r => r.json())
      .then(r => this.fetchFriendRequests(r))

      fetch("http://localhost:3000/users/")
        .then(r => r.json())
        .then(r => this.fetchUsers(r))
  }

  fetchUsers = (resp) => {
    this.setState({
      users: resp
    })
  }

  fetchFriendRequests = (resp) => {
    this.setState({
      friend_requests: resp
    })
  }

  fetchFriends = (resp) => {
    this.setState({
      friends: resp
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
      { this.state.friends.map(friend => <FriendCard key={friend.id} friend={friend}/> ) }

      <button>See Friend Requests</button>
      {

      }

      </div>
    );
  }
}
