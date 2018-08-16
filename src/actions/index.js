import { FRIEND_LOADING, FRIEND_LOAD, PENDING_FRIENDS } from './types';
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
    RestfulAdapter.indexFetch("/users/1/friendships/").then(data => {
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

// export function editLastSeen() {
//   return dispatch => {
//     RestfulAdapter.editFetch('/users/1/friends').then(data => {
//       dispatch({ type: EDIT_LAST_SEEN, payload: data });
//     });
//   };
// }

// export function editLastSeen(friend) {
//   return { type: EDIT_FRIEND, payload: data };
// }
