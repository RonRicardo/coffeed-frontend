import { FRIEND_LOADING, FRIEND_LOAD, PENDING_FRIENDS, UPDATE_LAST_SEEN, FETCH_PLANS, ACCEPT_FRIEND } from './types';
import { RestfulAdapter } from "../adapter";


export function fetchFriends() {
  return dispatch => {
    dispatch({ type: FRIEND_LOADING });
    RestfulAdapter.indexFetch("users/1/friendships").then(data => {
      dispatch({ type: FRIEND_LOAD, payload: data });
    });
  };
}

export function fetchPendingFriends() {
  return dispatch => {
    RestfulAdapter.indexFetch("users/1/pending_friends/")
    .then(data => {
      dispatch({ type: PENDING_FRIENDS, payload: data });
    });
  };
}

export function updateLastSeen(friendship_id, date) {
  return dispatch => {
    RestfulAdapter.editFetch('users/1/friendships', friendship_id, {last_seen: date }).then(data => {
      dispatch({ type: UPDATE_LAST_SEEN, payload: data });
    });
  };
}

export function acceptFriendReq(friend_id){
  return dispatch => {
    RestfulAdapter.editFetch('users/1/pending_friends', friend_id)
    .then(data => {
      debugger;
      dispatch({ type: ACCEPT_FRIEND, payload: data })
    })
  }
}

export function fetchPlans(){
  return dispatch => {
    RestfulAdapter.indexFetch('/users/1/plans').then(data =>{
      dispatch({ type: FETCH_PLANS, payload: data})
    });
  };
}
