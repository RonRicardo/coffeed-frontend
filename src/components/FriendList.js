import React from 'react';
import FriendCard from './FriendCard';
import FriendRequest from './FriendRequest';
import { connect } from 'react-redux';
// import CreateFriendRequest from './AddFriend'

const RecievedFriendRequests1 = (props) => {
  return props.pendingFriends.map(friend => {
      return <FriendRequest {...friend} key={friend.id} />;
  });
}

const mapFriendRequestsToProps = (state) => {
  return {pendingFriends: state.pendingFriends}
}

export const RecievedFriendRequests = connect( mapFriendRequestsToProps )(RecievedFriendRequests1)


const FriendList1 = (props) => {
  return props.friends.map(friend => {
      return <FriendCard {...friend} key={friend.friend_id} />;
  });
}

const mapFriendsToProps = (state) => {
  return {friends: state.friends}
}

export const FriendList = connect ( mapFriendsToProps )(FriendList1)



// export const AddFriend = () => {
//   return <CreateFriendRequest />
// }
