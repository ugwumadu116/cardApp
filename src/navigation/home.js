import React, {useRef} from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  View,
  Text,
  Image
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AccountIcons from './assets/User'
import TransactionsIcons from './assets/Transaction'
import CardsIcons from './assets/Cards'
import SettingsIcons from './assets/Settings'
import HomeScreen from '../screen/home'
import HomeStack from './homeStack'
import TransactionStack from './TransactionStack'
import CardStack from './cardStack'
import AccountStack from './accountStack'
import SettingsStack from './settingsStack'





export default function App() {
  const ref = useRef(null);
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Accounts':
        icon = 'user';
        break;
      case 'Transactions':
        icon = 'user';
        break;
      case 'Cards':
        icon = 'user';
        break;
      case 'Settings':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    if(routeName === "Accounts"){
      return (
        <Pressable
          onPress={() => navigate("Account")}
          style={styles.tabbarItem}
        >
          <AccountIcons size={25} color={routeName === selectedTab ? '#3F37C9' : '#000000'} />
        <Text  style={{color:routeName === selectedTab ? '#3F37C9' : '#000000', fontSize:12, lineHeight:13, fontWeight:'400', fontFamily:'proximaNovaRegular', marginTop:5}}>Accounts</Text>

        </Pressable>
      );

    }else if(routeName === "Transactions"){
      return (
        <Pressable
          onPress={() => navigate(routeName)}
          style={styles.tabbarItem}
        >
          <TransactionsIcons size={25} color={routeName === selectedTab ? '#3F37C9' : '#000000'} />
        <Text family="proximaNovaRegular"  style={{color:routeName === selectedTab ? '#3F37C9' : '#000000', fontSize:12, lineHeight:13, fontWeight:'400', fontFamily:'proximaNovaRegular', marginTop:5}}>Transactions</Text>

        </Pressable>
      );

    }else if(routeName === "Cards"){
      return (
        <Pressable
          onPress={() => navigate(routeName)}
          style={styles.tabbarItem}
        >
          <CardsIcons size={25} color={routeName === selectedTab ? '#3F37C9' : '#000000'} />
        <Text family="proximaNovaRegular"  style={{color:routeName === selectedTab ? '#3F37C9' : '#000000', fontSize:12, lineHeight:13, fontWeight:'400', fontFamily:'proximaNovaRegular', marginTop:5}}>Cards</Text>

        </Pressable>
      );

    }else if(routeName === "Settings"){
      return (
        <Pressable
          onPress={() => navigate(routeName)}
          style={styles.tabbarItem}
        >
          <SettingsIcons size={25} color={routeName === selectedTab ? '#3F37C9' : '#000000'} />
        <Text family="proximaNovaRegular"  style={{color:routeName === selectedTab ? '#3F37C9' : '#000000', fontSize:12, lineHeight:13, fontWeight:'400', fontFamily:'proximaNovaRegular', marginTop:5}}>Settings</Text>

        </Pressable>
      );

    }
    else{
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={styles.tabbarItem}
        >
          <AccountIcons size={25} color={routeName === selectedTab ? '#3F37C9' : '#000000'} />
          
        </TouchableOpacity>
      );
    }
   
  };

  return (
      <CurvedBottomBarExpo.Navigator
        ref={ref}
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={90}
        circleWidth={60}
        bgColor="white"
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Homes"
        // borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate("Homes")}
            >
            <Image style={{resizeMode: 'contain', }} source={require('../assets/HomeNAV.png')} />  
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Homes"
          position="CIRCLE"
          component={(props) => <HomeStack bottomBarRef={ref} {...props} />}
        />
        <CurvedBottomBarExpo.Screen
          name="Accounts"
          position="LEFT"
          component={AccountStack}
        />
        <CurvedBottomBarExpo.Screen
          name="Transactions"
          position="LEFT"
          component={TransactionStack}
        />
        <CurvedBottomBarExpo.Screen
          name="Cards"
          component={CardStack}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name="Settings"
          component={SettingsStack}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
 
  );
}

export const styles = StyleSheet.create({
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    // flex: 1,
    // justifyContent: 'center',
  },
  bottomBar: {
    // borderWidth:1,
    // borderColor:'red',
    // height:104,
  },
  btnCircleUp: {
    bottom: 19,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:23,
  },
  img: {
    width: 30,
    height: 30,
  },
});