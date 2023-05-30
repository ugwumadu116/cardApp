import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

// import HomeTab from './general'
import HomeTab from './home'
import Auth from './authentication'
import OnboardingScreen from './onboarding'
import {useStoreContext} from '../store'


export default function App() {
    const {
        store: {appState}
      } = useStoreContext()
  
    return (
      <NavigationContainer>
         {
        appState === 'Onboarding'? (
          <OnboardingScreen />
        ) :  appState === 'Auth'? (
          <Auth />
        ) : (
          <HomeTab />
        )
      } 
      </NavigationContainer>
    )
  }