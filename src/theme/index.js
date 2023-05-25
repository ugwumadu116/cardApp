import React, {useContext, useEffect} from 'react'
import {ThemeProvider, ThemeContext} from 'styled-components/native'
import { useColorScheme } from 'react-native'
import {useStoreContext} from '../store'
import {toggleTheme} from '../store/theme/action'



import {theme} from './style'

const Theme = ({children}) => {
  const {
    dispatch,
    store: {activeApp, themeState}
  } = useStoreContext()

  const colorScheme = useColorScheme()

  useEffect(() => {
    dispatch(toggleTheme(colorScheme))
  }, [colorScheme])



  return <ThemeProvider theme={{...theme, colorScheme:themeState.activeState}}>{children}</ThemeProvider>
}

export const useThemeContext = () => useContext(ThemeContext)

export default Theme
