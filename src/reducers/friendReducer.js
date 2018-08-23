// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { FRIEND_LOAD, FRIEND_LOADING, PENDING_FRIENDS,  ACCEPT_FRIEND, REJECT_FRIEND, UPDATE_LAST_SEEN, DELETE_FRIEND, DROPDOWN_FRIENDS } from '../actions/types'

const initialState = {
    friends: [], pendingFriends: [], loading: false, dropdownFriends: []
}

const friendReducer = (state = initialState, action) => {
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
        let requests = [...state.pendingFriends]
        const acceptFriend = requests.find(req => req.id === action.payload.friend_id)
        debugger;
        const acceptedIndex = requests.indexOf(acceptFriend)
        requests.splice(acceptedIndex, 1)
        return {
          ...state,
          friends: [...state.friends, action.payload.friend ],
          pendingFriends: requests
        }
        case REJECT_FRIEND:
          requests = [...state.pendingFriends]
          const rejectedFriend = requests.find(req => req.id === action.payload.friend_id)
          const rejectIndex = requests.indexOf(rejectedFriend)
          requests.splice(rejectIndex, 1)
          return {
            ...state,
            pendingFriends: requests
          }
        case DELETE_FRIEND:
          const prevFriends = [...state.friends]
          const deletedF = prevFriends.find(frd => frd.friendship_id === action.payload.friendship_id)
          const deleteIndex = prevFriends.indexOf(deletedF)
          prevFriends.splice(deleteIndex, 1)
          return {
            ...state,
            friends: prevFriends
          }
        case DROPDOWN_FRIENDS:
          const currF = [...state.friends]
            const fList = currF.map(friend => {
              const formatFriends = {};
                formatFriends.text = friend.name;
                formatFriends.value = friend.friend_id;
                return formatFriends
             })
            return {
              ...state,
             dropdownFriends: fList
        }
    default:
      return state;
  }
}

export default friendReducer
