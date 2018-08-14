import { FRIEND_LOADING, SELECT_FRIEND, FRIEND_LOAD, PENDING_FRIENDS } from './types';
import { RestfulAdapter } from "../adapter";


// Define and export your action creators here
// EXAMPLE:

// export const changeExampleMessage = () => {
//   return {
//     type: CHANGE_MESSAGE
//   }
// }

export function fetchFriends() {
  return dispatch => {
    dispatch({ type: FRIEND_LOADING });
    RestfulAdapter.indexFetch("/users/1/friends/").then(data => {
      dispatch({ type: FRIEND_LOAD, payload: data });
    });
  };
}

export function fetchPendingFriends() {
  return dispatch => {
    RestfulAdapter.indexFetch("/users/1/pending_friends/").then(data => {
      dispatch({ type: PENDING_FRIENDS, payload: data });
    });
  };
}

export function selectFriend(friend) {
  return { type: SELECT_FRIEND, payload: friend };
}
