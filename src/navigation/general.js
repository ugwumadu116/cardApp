import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/home'
import HomeGeneralStack from './home'



const GeneralStack = createStackNavigator()

export default function App() {
  return (
    <GeneralStack.Navigator  
    initialRouteName="Gen"

      screenOptions={{
        headerShown: false
      }}
      >
      <GeneralStack.Screen  name="Gen" component={HomeGeneralStack} />
      <GeneralStack.Screen  name="GenOne" component={HomeScreen} />
      <GeneralStack.Screen  name="GenTwo" component={HomeScreen} />
      <GeneralStack.Screen  name="GenThree" component={HomeScreen} />
     
    </GeneralStack.Navigator>
  )
}