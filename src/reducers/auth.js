import * as actionType from '../constants/actionTypes'

const authReducer = (state = { message: null, isModalOpen: false }, action) => {
  switch (action.type) {
    case actionType.SIGN_UP:
      return {
        ...state,
        message: 'Registration successful',
        isModalOpen: true,
      }

    case actionType.MSG_ERROR:
      let msgerr = ''

      try {
        msgerr = JSON.parse(action.err)
      } catch (error) {
        return {
          ...state,
          message: 'Server down, please try again.',
          isModalOpen: true,
        }
      }

      return { ...state, message: msgerr.message, isModalOpen: true }
    case actionType.MSG_CLOSE:
      return { ...state, isModalOpen: false }

    default:
      return state
  }
}

export default authReducer
