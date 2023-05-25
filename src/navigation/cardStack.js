import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WalletsScreen from '../screen/Wallets'


const WalletsStack = createStackNavigator()

export default function App() {
  return (
    <WalletsStack.Navigator  
      screenOptions={{
        headerShown: false
      }}>
      <WalletsStack.Screen  name="card" component={WalletsScreen} />
     
    </WalletsStack.Navigator>
  )
}