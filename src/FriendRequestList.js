import React from 'react';
import FriendList from './FriendList';
import FriendRequest from './FriendRequest';

const FriendRequestList = (props) => {
  return props.friends.map(friend => {
      return <FriendRequest {...friend} key={friend.id} />;
  });
}

export default FriendRequestList
