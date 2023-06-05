import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Login from '../screen/auth/Login'
import SignUp from '../screen/auth/SignUp'
import OTPScreen from '../screen/auth/OTP'
import ResetPassword from '../screen/auth/ResetPassword'


const AuthStack = createStackNavigator()

export default function App() {
  return (
    <AuthStack.Navigator 
      screenOptions={{
        headerShown: false
      }} >
      <AuthStack.Screen  name="Login" component={Login} />
      <AuthStack.Screen  name="Signup" component={SignUp} />
      <AuthStack.Screen  name="OTP" component={OTPScreen} />
      <AuthStack.Screen  name="ResetPassword" component={ResetPassword} />

            
    </AuthStack.Navigator>
  )
}