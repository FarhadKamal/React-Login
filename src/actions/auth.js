import * as actionType from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)

    dispatch({ type: actionType.SIGN_UP, data })
  } catch (error) {
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)

    dispatch({ type: actionType.GET_VERIFY, data })

    router.push('/home')
  } catch (error) {
    let err = error.request.responseText
    console.log(err)

    dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const signout = () => async (dispatch) => {
  try {
    await api.signOut()

    dispatch({ type: actionType.LOGOUT })
  } catch (error) {
    let err = error.request.responseText
    console.log(err)

    dispatch({ type: actionType.MSG_ERROR, err })
  }
}
