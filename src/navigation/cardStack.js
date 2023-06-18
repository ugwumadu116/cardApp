import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WalletsScreen from '../screen/Wallets'
import WithdrawFromCardScreen from '../screen/Wallets/WithdrawFromCard'
import FundCardScreen from '../screen/Wallets/FundCard'
import ManageCardsScreen from '../screen/Wallets/ManageCards'
import ChangePinScreen from '../screen/Wallets/ChangePin'


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
      <WalletsStack.Screen  name="WithdrawFromCard" 
       children={()=><WithdrawFromCardScreen {...props}/>}
       />
      <WalletsStack.Screen  name="FundCard" 
       children={()=><FundCardScreen {...props}/>}
       />
      <WalletsStack.Screen  name="ManageCards" 
       children={()=><ManageCardsScreen {...props}/>}
       />
      <WalletsStack.Screen  name="ChangePin" 
       children={()=><ChangePinScreen {...props}/>}
       />
     
    </WalletsStack.Navigator>
  )
}