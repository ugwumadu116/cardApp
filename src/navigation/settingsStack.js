import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../screen/Settings'


const SettingsStack = createStackNavigator()

export default function App(props) {
  return (
    <SettingsStack.Navigator  
    initialRouteName="Setting"

      screenOptions={{
        headerShown: false
      }}>
      <SettingsStack.Screen {...props}  name="Setting" component={SettingsScreen} />     
    </SettingsStack.Navigator>
  )
}