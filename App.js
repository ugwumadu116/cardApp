
// import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { StatusBar, Platform } from 'react-native'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import ThemeProvider from './src/theme'
import { StoreProvider } from './src/store'
import AppContainer from './src/navigation'


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false)


  useEffect(() => {

    SplashScreen.preventAutoHideAsync()

    Font.loadAsync({
      'proximaNovaLightItalic': require('./assets/fonts/ProximaNovaCondensedLightItalic.otf'),
      'proximaNovaRegular': require('./assets/fonts/ProximaNovaCondensedRegular.otf'),
      'proximaNovaLight': require('./assets/fonts/ProximaNovaCondensedLight.otf'),
      'proximaNovaSemiBold': require('./assets/fonts/ProximaNovaCondensedSemibold.otf'),
      'proximaNovaRegularItalic': require('./assets/fonts/ProximaNovaCondensedRegularItalic.otf'),
    }).then(data => {
      setAppIsReady(true)
      SplashScreen.hideAsync()

    })
  }, [])

  if (!appIsReady) {

    return null
  }
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <StoreProvider>
        <ThemeProvider>
        <AppContainer />
         

        </ThemeProvider>
      </StoreProvider>
    </>
  )


}

