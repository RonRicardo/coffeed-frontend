import React from 'react';
import FriendCard from './FriendCard';
import FriendRequest from './FriendRequest';
// import CreateFriendRequest from './AddFriend'

export const RecievedFriendRequests = (props) => {
  return props.friends.map(friend => {
      return <FriendRequest {...friend} key={friend.id} />;
  });
}

export const FriendList = (props) => {
  return props.friends.map(friend => {
      return <FriendCard {...friend} key={friend.id} />;
  });
}

// export const AddFriend = () => {
//   return <CreateFriendRequest />
// }
