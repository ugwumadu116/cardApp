import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Login from '../screen/auth/Login'

const AuthStack = createStackNavigator()

export default function App() {
  return (
    <AuthStack.Navigator 
      screenOptions={{
        headerShown: false
      }} >
      <AuthStack.Screen  name="Login" component={Login} />
            
    </AuthStack.Navigator>
  )
}