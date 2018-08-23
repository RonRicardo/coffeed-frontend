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
      let plans = [...state.plans]
        let newPlan = plans.find(plan => plan.id === action.payload.id)
        const planIndex = plans.indexOf(newPlan)
        plans.splice(planIndex, 1)
      return {
        ...state,
        plans: [...state.plans, action.payload]
      }
    case EDIT_PLAN:
      return {
        ...state,
        plans: action.payload
      }
    case DELETE_PLAN:
      plans = [...state.plans]
        newPlan = plans.find(plan => plan.id === action.payload.id)
        let deleteIndex = plans.indexOf(newPlan)
      plans.splice(0, deleteIndex, 1)
        return {
          ...state,
          plans: plans
          }
        default:
          return state
    }
}

export default planReducer
