import React from 'react';
import FriendCard from './FriendCard';

const FriendList = (props) => {
  return props.friends.map(friend => {
      return <FriendCard {...friend} key={friend.id} />;
  });
}

export default FriendList
