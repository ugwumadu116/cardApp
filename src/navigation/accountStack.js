import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountsScreen from '../screen/Accounts'
import HomeStack from './homeStack'


const AccountStack = createStackNavigator()

export default function App(props) {
  return (
    <AccountStack.Navigator  
    initialRouteName="Account"

      screenOptions={{
        headerShown: false
      }}>
      {/* <AccountStack.Screen {...props}  name="home" component={HomeStack} />      */}
      <AccountStack.Screen {...props}  name="Account" component={AccountsScreen} />     
    </AccountStack.Navigator>
  )
}