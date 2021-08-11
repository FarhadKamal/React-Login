import * as actionType from '../constants/actionTypes'

const userReducer = (state = { userData: [], sessionData: [] }, action) => {
  switch (action.type) {
    case actionType.GET_USERS:
      return {
        ...state,
        userData: action.data,
      }

    case actionType.GET_VERIFY:
      return {
        ...state,
        sessionData: action.data,
      }

    case actionType.LOGOUT:
      return {
        ...state,
        sessionData: [],
        userData: [],
      }

    case actionType.DELETE_USER:
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== action.payload),
      }

    case actionType.UPDATE_USER:
      return {
        ...state,
        userData: state.userData.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      }
    default:
      return state
  }
}

export default userReducer
