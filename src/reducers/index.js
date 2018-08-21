// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { FRIEND_LOAD, FRIEND_LOADING, PENDING_FRIENDS, FETCH_PLANS } from '../actions/types'

export default function friendReducer(
  state = {
    friends: [], pendingFriends: [], selectedFriend: null, loading: false, plans: []
  },
    action
  ) {
  switch (action.type) {
    case FRIEND_LOADING:
      return {
        ...state,
        loading: true
      }
    case FRIEND_LOAD:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
      case PENDING_FRIENDS:
        return {
          ...state,
          pendingFriends: action.payload
      };
      case FETCH_PLANS:
        return {
          ...state,
          plans: action.payload
        }
    default:
      return state;
  }
}
