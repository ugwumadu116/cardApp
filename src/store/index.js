import React, {useReducer, useContext} from 'react'

import useCombinedReducers from '../utils/useCombinedReducers'
import StoreContext from './types'

import appReducer, {appInitialState} from './app/reducer'
import themeReducer, {themeInitialState} from './theme/reducer'


const StoreProvider = ({children}) => {
  const [store, dispatch] = useCombinedReducers({
    appState: useReducer(appReducer, appInitialState),
    themeState: useReducer(themeReducer, themeInitialState),

  })

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

const useStoreContext = () => useContext(StoreContext)

export {StoreProvider, useStoreContext}
