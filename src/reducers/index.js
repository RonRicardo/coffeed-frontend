// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { FRIEND_LOAD, FRIEND_LOADING, PENDING_FRIENDS } from '../actions/types'

export default function friendReducer(
  state = {
    friends: [], pendingFriends: [], selectedFriend: null, loading: false,
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
          pendingFriends: action.payload,
      };
    // case "SELECT_FRIEND":
    //   return {
    //     ...state,
    //     selectedFriend: action.payload
    //   };
    // case "UPDATE_FORM":
    //   return {
    //     ...state,
    //     formData: {...state.formData, ...action.payload}
    //   }
    // case "SET_HOBBIT":
    //
    //   return {
    //     ...state,
    //     hobbits: state.hobbits.map(hobbit => {
    //       if(hobbit.id === action.payload.id) {
    //         return action.payload
    //       } else {
    //         return hobbit
    //       }
    //     })
    //   }
    default:
      return state;
  }
}