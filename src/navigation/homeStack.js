import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/home'


const HomeStack = createStackNavigator()

export default function App(props) {
  // console.log(props.joel)
  // props.joel.current?.setVisible(false);
  return (
    <HomeStack.Navigator  
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen {...props}  name="home" component={HomeScreen} />
      {/* <HomeStack.Screen  name="Account" component={HomeScreen} /> */}
     
    </HomeStack.Navigator>
  )
}