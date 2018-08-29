import { SHOW_CURRENT_FRIENDS, SHOW_FRIEND_REQUESTS } from '../actions/types'

const initialState = {
  nav: '',
}

const navReducer = (state = initialState, action) => {
  switch (action.type){
    case SHOW_FRIEND_REQUESTS:
      return {
        // ...state,
        // plans: action.payload
      }
      //////////////
    case SHOW_CURRENT_FRIENDS:
      // let plans = [...state.plans]
      //   const newPlanList = plans.find(req => req.id === action.payload.friend_id)
      //   const acceptedIndex = plans.indexOf(acceptFriend)
      //   newPlanList.splice(acceptedIndex, 1)
      return {
        // ...state,
        // plans: action.payload
      }
      default:
      return state
    }
}

export default navReducer
