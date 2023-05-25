import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from '../screen/onboarding/onboarding'
import onboardingSlides from '../screen/onboarding/onboardingSlides'
import Login from '../screen/auth/Login'
import SignUp from '../screen/auth/SignUp'
import OTPScreen from '../screen/auth/OTP'
import ResetPassword from '../screen/auth/ResetPassword'

const OnboardingStack = createStackNavigator()

export default function App() {
  return (
    <OnboardingStack.Navigator 
      screenOptions={{
        headerShown: false
      }} >
      <OnboardingStack.Screen  name="OnboardingSlide" component={onboardingSlides} />
      <OnboardingStack.Screen  name="Login" component={Login} />
      <OnboardingStack.Screen  name="Signup" component={SignUp} />
      <OnboardingStack.Screen  name="OTP" component={OTPScreen} />
      <OnboardingStack.Screen  name="Onboarding" component={Onboarding} />
      <OnboardingStack.Screen  name="ResetPassword" component={ResetPassword} />


            

    </OnboardingStack.Navigator>
  )
}