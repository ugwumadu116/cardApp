import {ONBOARDING, AUTH, REGISTERED} from './types'

export const appInitialState = 'Onboarding'

const reducer = (state = userInitialState, action) => {
  switch (action.type) {
  case ONBOARDING.fulfilled: {
    return 'Onboarding'
  }
  case AUTH.fulfilled: {
    return 'Auth'
  }
  case REGISTERED.fulfilled: {
    return 'REGISTERED'
  }
  default: {
    return state
  }
  }
}

export default reducer
