import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/home'
import AirtimeScreen from '../screen/home/Airtime'
import BettingScreen from '../screen/home/Betting'
import BillsScreen from '../screen/home/Bills'
import SchoolScreen from '../screen/home/SchoolScreen'
import CableTvScreen from '../screen/home/CableTv'
import DataScreen from '../screen/home/Data'
import GiftCardsScreen from '../screen/home/GiftCards'
import MoreScreen from '../screen/home/More'
import VirtualCardScreen from '../screen/home/VirtualCard'
import CreateVirtualCardScreen from '../screen/home/CreateVirtualCard'

import TransferScreen from '../screen/Transactions/Transfer'
import TransferToCardinScreen from '../screen/Transactions/Transfer/TransferToCardin'
import TransferToBankScreen from '../screen/Transactions/Transfer/TransferToBank'
import ConfirmTransferScreen from '../screen/Transactions/Transfer/ConfirmTransfer'
import TransferReceiptScreen from '../screen/Transactions/Transfer/TransferReceipt'

import AddMoneyScreen from '../screen/Transactions/AddMoney'
import AddMoneyWithCardScreen from '../screen/Transactions/AddMoney/WithCard'
import AddMoneyWithCashScreen from '../screen/Transactions/AddMoney/WithCash'
import AddMoneyBankUssdScreen from '../screen/Transactions/AddMoney/BankUssd'
import AddMoneyChooseCryptoScreen from '../screen/Transactions/AddMoney/ChooseCrypto'
import AddMoneyBuyCryptoScreen from '../screen/Transactions/AddMoney/BuyCrypto'
import AddMoneyBankUssdMakePaymentScreen from '../screen/Transactions/AddMoney/BankUssdMakePayment'

import WithdrawScreen from '../screen/Transactions/Withdraw'
import WithdrawLocalBankScreen from '../screen/Transactions/Withdraw/LocalBank'
import WithdrawCryptoScreen from '../screen/Transactions/Withdraw/Crypto'
import WithdrawMonoWalletScreen from '../screen/Transactions/Withdraw/MonoWallet'
import WithdrawVirtualCardScreen from '../screen/Transactions/Withdraw/VirtualCard'

import AccountsScreen from '../screen/Accounts'
import CardScreen from '../screen/Wallets'
import ReferScreen from '../screen/Settings/Refer'
import CustomerServiceScreen from '../screen/Settings/CustomerService'



const HomeStack = createStackNavigator()

export default function App(props) {
  // console.log(props.bottomBarRef)
  // props.bottomBarRef.current?.setVisible(false);
  return (
    <HomeStack.Navigator  
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen  name="home"  children={()=><HomeScreen {...props}/>} />
      <HomeStack.Screen  name="Airtime"  children={()=><AirtimeScreen {...props}/>} />
      <HomeStack.Screen  name="Betting"  children={()=><BettingScreen {...props}/>} />
      <HomeStack.Screen  name="Bills"  children={()=><BillsScreen {...props}/>} />
      <HomeStack.Screen  name="Schools"  children={()=><SchoolScreen {...props}/>} />
      <HomeStack.Screen  name="CableTv"  children={()=><CableTvScreen {...props}/>} />
      <HomeStack.Screen  name="Data"  children={()=><DataScreen {...props}/>} />
      <HomeStack.Screen  name="GiftCards"  children={()=><GiftCardsScreen {...props}/>} />
      <HomeStack.Screen  name="More"  children={()=><MoreScreen {...props}/>} />
      <HomeStack.Screen  name="VirtualCard"  children={()=><VirtualCardScreen {...props}/>} />
      <HomeStack.Screen  name="CreateVirtualCard"  children={()=><CreateVirtualCardScreen {...props}/>} />

      <HomeStack.Screen  name="Transfer" children={() => <TransferScreen  {...props} /> } />
      <HomeStack.Screen  name="TransferToBank" children={() => <TransferToBankScreen  {...props} /> } />
      <HomeStack.Screen  name="TransferToCardin" children={() => <TransferToCardinScreen  {...props} /> } />
      <HomeStack.Screen  name="TransferReceipt" children={() => <TransferReceiptScreen  {...props} /> } />
      <HomeStack.Screen  name="ConfirmTransfer" children={() => <ConfirmTransferScreen  {...props} /> } />

      <HomeStack.Screen  name="AddMoney" children={() => <AddMoneyScreen  {...props} /> } />
      <HomeStack.Screen  name="AddMoneyWithCard" children={() => <AddMoneyWithCardScreen  {...props} /> } />
      <HomeStack.Screen  name="AddMoneyWithCash" children={() => <AddMoneyWithCashScreen  {...props} /> } />
      <HomeStack.Screen  name="AddMoneyBankUssdMakePayment" children={() => <AddMoneyBankUssdMakePaymentScreen  {...props} /> } />
      <HomeStack.Screen  name="AddMoneyBankUssd" children={() => <AddMoneyBankUssdScreen  {...props} /> } />
      <HomeStack.Screen  name="AddMoneyChooseCrypto" children={() => <AddMoneyChooseCryptoScreen  {...props} /> } />
      <HomeStack.Screen  name="AddMoneyBuyCrypto" children={() => <AddMoneyBuyCryptoScreen  {...props} /> } />

      <HomeStack.Screen  name="Withdraw" children={() => <WithdrawScreen  {...props} /> } />
      <HomeStack.Screen  name="WithdrawLocalBank" children={() => <WithdrawLocalBankScreen  {...props} /> } />
      <HomeStack.Screen  name="WithdrawCrypto" children={() => <WithdrawCryptoScreen  {...props} /> } />
      <HomeStack.Screen  name="WithdrawVirtualCard" children={() => <WithdrawVirtualCardScreen  {...props} /> } />
      <HomeStack.Screen  name="WithdrawMonoWallet" children={() => <WithdrawMonoWalletScreen  {...props} /> } />


      <HomeStack.Screen  name="Account" children={() => <AccountsScreen  {...props} /> } />
      <HomeStack.Screen  name="Card" children={() => <CardScreen  {...props} /> } />

      <HomeStack.Screen {...props}  name="Refer"  children={()=><ReferScreen {...props}/>} />     
      <HomeStack.Screen {...props}  name="CustomerService"  children={()=><CustomerServiceScreen {...props}/>} />     

      {/* <HomeStack.Screen  name="Account" component={HomeScreen} /> */}
     
    </HomeStack.Navigator>
  )
}