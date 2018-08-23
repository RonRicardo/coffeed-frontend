// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { FRIEND_LOAD, FRIEND_LOADING, PENDING_FRIENDS, FETCH_PLANS, CREATE_PLAN, EDIT_PLAN, DELETE_PLAN, ACCEPT_FRIEND, REJECT_FRIEND, UPDATE_LAST_SEEN, DELETE_FRIEND, DROPDOWN_FRIENDS } from '../actions/types'

export default function friendReducer(
  state = {
    friends: [], pendingFriends: [], selectedFriend: null, loading: false, plans: [], dropdownFriends: []
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
        //////////////
      case CREATE_PLAN:
        // let plans = [...state.plans]
        //   const newPlanList = plans.find(req => req.id === action.payload.friend_id)
        //   const acceptedIndex = plans.indexOf(acceptFriend)
        //   newPlanList.splice(acceptedIndex, 1)
        return {
          ...state,
          plans: action.payload
        }
      case EDIT_PLAN:
        return {
          ...state,
          plans: action.payload
        }
      case DELETE_PLAN:
        return {
          ...state,
          plans: action.payload
        }
        /////////////
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
            const newFriends = currF.map(friend => {
              const formatFriends = {};
              debugger;
                formatFriends.text = friend.name;
                formatFriends.value = friend.id;
                return formatFriends
             })
            return {
              ...state,
             dropdownFriends: newFriends
        }
    default:
      return state;
  }
}
