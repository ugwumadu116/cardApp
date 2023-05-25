import {GET_THEME} from './types'

export const registerFulfilled = payload => ({
  type: GET_THEME.fulfilled,
  payload,
})

export const toggleTheme = payload => ({
  type: GET_THEME.fulfilled,
  payload,
})

export const startRegistration = () => ({
  type: GET_THEME.pending,
})

export const registerRejected = payload => ({
  type: GET_THEME.rejected,
  payload,
})

export const registerUserBoundActionCreator = async (dispatch, data) => {
  try {
   console.log("here__")
  } catch (error) {
  }
}

export default registerUserBoundActionCreator
