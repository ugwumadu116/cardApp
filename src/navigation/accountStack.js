import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountsScreen from '../screen/Accounts'
import ExchangeRateScreen from '../screen/Accounts/ExchangeRate'
import RequestVirtualAccountOneScreen from '../screen/Accounts/RequestVirtualAccountOne'
import RequestVirtualAccountTwoScreen from '../screen/Accounts/RequestVirtualAccountTwo'
import AccountSuccessScreen from '../screen/Accounts/AccountSuccess'
import TransactionsScreen from '../screen/Transactions'
// import HomeScreen from '../screen/home'




const AccountStack = createStackNavigator()

export default function App(props) {
  return (
    <AccountStack.Navigator  
    initialRouteName="Account"

      screenOptions={{
        headerShown: false
      }}>
      {/* <AccountStack.Screen {...props}  name="home" component={HomeStack} />      */}
      <AccountStack.Screen name="Account" 
      children={()=><AccountsScreen {...props}/>}
      />     
      {/* <AccountStack.Screen name="home" 
      children={()=><HomeScreen {...props}/>}
      />      */}
      <AccountStack.Screen name="ExchangeRate" 
      children={()=><ExchangeRateScreen {...props}/>}
      />     
      <AccountStack.Screen name="RequestVirtualAccountOne" 
      children={()=><RequestVirtualAccountOneScreen {...props}/>}
      />     
      <AccountStack.Screen name="RequestVirtualAccountTwo" 
      children={()=><RequestVirtualAccountTwoScreen {...props}/>}
      />     
      <AccountStack.Screen name="AccountSuccess" 
      children={()=><AccountSuccessScreen {...props}/>}
      />     
      <AccountStack.Screen name="Transaction" 
      children={()=><TransactionsScreen {...props}/>}
      />     
    </AccountStack.Navigator>
  )
}