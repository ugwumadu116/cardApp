import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../screen/Settings'
import BankCardAccountsScreen from '../screen/Settings/BankCardAccounts'
import ChangePasswordScreen from '../screen/Settings/ChangePassword'
import CustomerServiceScreen from '../screen/Settings/CustomerService'
import IdentityVerificationScreen from '../screen/Settings/IdentityVerification'
import RateUsScreen from '../screen/Settings/RateUs'
import ReferScreen from '../screen/Settings/Refer'

const SettingsStack = createStackNavigator()

export default function App(props) {
  return (
    <SettingsStack.Navigator  
    // initialRouteName="Setting"

      screenOptions={{
        headerShown: false
      }}>

      <SettingsStack.Screen {...props}  name="Setting"  children={()=><SettingsScreen {...props}/>} />     
      <SettingsStack.Screen {...props}  name="BankCardAccounts"  children={()=><BankCardAccountsScreen {...props}/>} />     
      <SettingsStack.Screen {...props}  name="ChangePassword"  children={()=><ChangePasswordScreen {...props}/>} />     
      <SettingsStack.Screen {...props}  name="CustomerService"  children={()=><CustomerServiceScreen {...props}/>} />     
      <SettingsStack.Screen {...props}  name="IdentityVerification"  children={()=><IdentityVerificationScreen {...props}/>} />     
      <SettingsStack.Screen {...props}  name="RateUs"  children={()=><RateUsScreen {...props}/>} />     
      <SettingsStack.Screen {...props}  name="Refer"  children={()=><ReferScreen {...props}/>} />     
    </SettingsStack.Navigator>
  )
}