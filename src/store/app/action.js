import {ONBOARDING, AUTH, REGISTERED} from './types'



export const startONBOARDING= () => ({
  type: ONBOARDING.fulfilled,
})
export const startAUTH = () => ({
  type: AUTH.fulfilled,
})
export const startREGISTERED= () => ({
  type: REGISTERED.fulfilled,
})


export const onboardingBoundActionCreator =  (dispatch) => {
  dispatch(startONBOARDING())
  
}

export const authBoundActionCreator =  (dispatch) => {
  dispatch(startAUTH())
  
}
export const registeredBoundActionCreator =  (dispatch) => {
  // navigation.navigate(to)
  dispatch(startREGISTERED())
  
}

