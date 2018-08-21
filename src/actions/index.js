import { FRIEND_LOADING, FRIEND_LOAD, PENDING_FRIENDS, UPDATE_LAST_SEEN, FETCH_PLANS, UPDATE_FRIEND_REQUESTS } from './types';
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

export function updateLastSeen() {
  return dispatch => {
    RestfulAdapter.editFetch('users/1/friendships', this.props.friendship_id, {last_seen: this.state.date }).then(data => {
      dispatch({ type: UPDATE_LAST_SEEN, payload: data });
    });
  };
}

export function updateFriendReq(){
  return dispatch => {
    RestfulAdapter.editFetch('u')
    .then(data => {
      dispatch({ type: UPDATE_FRIEND_REQUESTS, payload: data })
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
