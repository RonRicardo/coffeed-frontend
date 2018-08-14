// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { CHANGE_MESSAGE } from '../actions/types'


const initialState = {
  exampleMessage: 'Hello World'
}

const exampleReducer = (state = initialState, action) => {
  switch (action.type){

    case CHANGE_MESSAGE:
    return {exampleMessage: 'Hola Mundo'}

    default:
    return state

  }
}

function hobbitReducer(
  state = { hobbits: [], selectedHobbit: null, loading: false, formData: {name: "", title: "", key_skill: ""} },
  action
) {
  switch (action.type) {
    case "HOBBITS_LOADING":
      return {
        ...state,
        loading: true
      }
    case "HOBBIT_LOAD":
      return {
        ...state,
        hobbits: action.payload,
        loading: false
      };
    case "SELECT_HOBBIT":
      return {
        ...state,
        formData: action.payload
      };
    case "UPDATE_FORM":
      return {
        ...state,
        formData: {...state.formData, ...action.payload}
      }
    case "SET_HOBBIT":

      return {
        ...state,
        hobbits: state.hobbits.map(hobbit => {
          if(hobbit.id === action.payload.id) {
            return action.payload
          } else {
            return hobbit
          }
        })
      }
    default:
      return state;
  }
}

export default exampleReducer, hobbitReducer
