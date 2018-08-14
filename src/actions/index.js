import { CHANGE_MESSAGE, FETCH_FRIENDS } from './types'

// Define and export your action creators here
// EXAMPLE:

export const changeExampleMessage = () => {
  return {
    type: CHANGE_MESSAGE
  }
}

export function fetchFriends() {
  //using thunk, we return are returning a function here instead of
  //a plain object.  Thunk intercepts this returned value, and if it is a
  //function, cancels the normal event of calling our reducers, and
  //instead, passes in 'dispatch' as an argument to the function.
  //the fetch request was extracted out to our adapter, but still functions the same
  return dispatch => {
    dispatch({ type: "HOBBITS_LOADING" });
    RestfulAdapter.indexFetch("friends").then(data => {
      dispatch({ type: "HOBBIT_LOAD", payload: data });
    });
  };
}
