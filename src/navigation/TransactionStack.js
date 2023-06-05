import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TransactionsScreen from '../screen/Transactions'


const TransactionStack = createStackNavigator()

export default function App(props) {
  return (
    <TransactionStack.Navigator  
      screenOptions={{
        headerShown: false
      }}>
      <TransactionStack.Screen  name="Transaction"
       children={()=><TransactionsScreen {...props}/>}
        />
     
    </TransactionStack.Navigator>
  )
}