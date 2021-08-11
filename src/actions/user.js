import * as actionType from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getVerify = () => async (dispatch) => {
  try {
    const { data } = await api.getverify()

    dispatch({ type: actionType.GET_VERIFY, data })
  } catch (error) {
    //let err = error.request.responseText
    //dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers()

    dispatch({ type: actionType.GET_USERS, data })
  } catch (error) {
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}
