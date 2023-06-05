import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WalletsScreen from '../screen/Wallets'


const WalletsStack = createStackNavigator()

export default function App(props) {
  return (
    <WalletsStack.Navigator  
      screenOptions={{
        headerShown: false
      }}>
      <WalletsStack.Screen  name="Card" 
       children={()=><WalletsScreen {...props}/>}
       />
     
    </WalletsStack.Navigator>
  )
}