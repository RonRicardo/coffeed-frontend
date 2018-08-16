
import React from "react";
import FriendCard from "./FriendCard";
import FriendRequest from './FriendRequest';
import { fetchFriends, fetchPendingFriends } from './actions';
import { connect } from "react-redux";

class FriendContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFriends()
    this.props.fetchPendingFriends()
  }

  render() {
    const fetchedFriends = this.props.friends.map(friend => {
      return <FriendCard {...friend} key={friend.id} />;
    });
    const fetchedPendingFriends = this.props.pendingFriends.map(friend => {
      return <FriendRequest {...friend} key={friend.id} />;
    });
    return (
    <div className="friend-grid">
          <h2>Friend Requests</h2>
        {fetchedPendingFriends}
          <h2>Current Friends</h2>
        {fetchedFriends}
    </div>
    );
  }
}


export default connect((state)=> ({friends: state.friends, pendingFriends: state.pendingFriends}), { fetchFriends, fetchPendingFriends })(FriendContainer)
