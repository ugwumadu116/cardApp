import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TransactionsScreen from '../screen/Transactions'
import BillsRecieptScreen from '../screen/Transactions/BillsReciept'

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
      <TransactionStack.Screen  name="BillsReciept"
       children={()=><BillsRecieptScreen {...props}/>}
        />
     
    </TransactionStack.Navigator>
  )
}