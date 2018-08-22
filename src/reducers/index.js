// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { FRIEND_LOAD, FRIEND_LOADING, PENDING_FRIENDS, FETCH_PLANS, ACCEPT_FRIEND, UPDATE_LAST_SEEN } from '../actions/types'

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
      case UPDATE_LAST_SEEN:
        const updateFriends = [...state.friends]
        const friendObj = updateFriends.find(friend => friend.friendship_id === action.payload.friendship_id)
        const friendIndex = updateFriends.indexOf(friendObj)
        const newFriend = {...friendObj, last_seen: action.payload.last_seen}
        updateFriends.splice(friendIndex, 1, newFriend)
        return {
          ...state,
          friends: updateFriends
        }
      case ACCEPT_FRIEND:
        // const Requests = [...state.pendingFriends]
        // const friendObj = Requests.find(friend => friend.id === action.payload.friend.id)
        debugger;
        return {
          ...state,
        }
    default:
      return state;
  }
}
