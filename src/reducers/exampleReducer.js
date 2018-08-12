// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { FriendLister } from '../actions/types'


const initialState = {
  friends: []
}

const FriendLister = (state = initialState, action) => {
  switch (action.type){

    case SHOW_FRIENDS
    // case CHANGE_MESSAGE:
    // return {exampleMessage: 'Hola Mundo'}

    default:
    return state

  }
}

export default exampleReducer
