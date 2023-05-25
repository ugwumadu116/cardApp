import {GET_THEME,} from './types'

export const themeInitialState = {
  activeState: 'light',
}

const reducer = (state = themeInitialState, action) => {
  switch (action.type) {
  case GET_THEME.pending: {
    return {
      ...state,
      fetching: true,
      fetched: false,
      onError: false,
      error: {},
    }
  }
  case GET_THEME.fulfilled: {
    return {
      ...state,
      activeState: action.payload,
    }
  }
  case GET_THEME.rejected: {
    return {
      ...state,
      fetching: false,
      fetched: false,
      onError: true,
      error: action.payload,
    }
  }
   
  default: {
    return {
      ...state,
    }
  }
  }
}

export default reducer
