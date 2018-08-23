import { FETCH_PLANS, CREATE_PLAN, EDIT_PLAN, DELETE_PLAN } from '../actions/types'

const initialState = {
  plans: []
}

const planReducer = (state = initialState, action) => {
  switch (action.type){
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
      default:
      return state
    }
}

export default planReducer
