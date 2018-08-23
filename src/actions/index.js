import { FRIEND_LOADING, FRIEND_LOAD, PENDING_FRIENDS, UPDATE_LAST_SEEN, FETCH_PLANS, EDIT_PLAN, DELETE_PLAN, CREATE_PLAN, ACCEPT_FRIEND, REJECT_FRIEND, DELETE_FRIEND, DROPDOWN_FRIENDS } from './types';
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

export function acceptFriendReq(id){
  return dispatch => {
    RestfulAdapter.editFetch('users/1/friend_requests', id)
    .then(data => {
      dispatch({ type: ACCEPT_FRIEND, payload: data })
    })
  }
}

export function rejectFriendReq(id){
  return dispatch => {
    RestfulAdapter.deleteFetch('users/1/friend_requests', id)
    .then(data => {
      dispatch({ type: REJECT_FRIEND, payload: data })
    })
  }
}

export function deleteFriend(id){
  return dispatch => {
    RestfulAdapter.deleteFetch('users/1/friends/destroy', id)
    .then(data => {
      dispatch({ type: DELETE_FRIEND, payload: data })
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
export function createPlan(plan){
  return dispatch => {
    RestfulAdapter.createFetch('/users/1/plans', plan).then(data =>{
      dispatch({ type: CREATE_PLAN, payload: data})
    });
  };
}

export function editPlan(plan_id){
  return dispatch => {
    RestfulAdapter.editFetch('/users/1/plans', plan_id).then(data =>{
      dispatch({ type: EDIT_PLAN, payload: data})
    });
  };
}

export function deletePlan(plan_id){
  return dispatch => {
    RestfulAdapter.deleteFetch('/users/1/plans/destroy', plan_id).then(data =>{
      dispatch({ type: DELETE_PLAN, payload: data})
    });
  };
}

export function renderDropdownFriends(){
  return dispatch => {
      dispatch({ type: DROPDOWN_FRIENDS })
    }
}
