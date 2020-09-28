import { ADD_NUMBER, SUB_NUMBER } from "./constants"

// 拆分counter reducer
const initialCounterState = {
  counter: 0
}
function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.data}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.data}
    default:
      return state
  }
}

export default counterReducer
