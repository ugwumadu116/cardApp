import * as React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'



export const BottomBoardLayout  = ({ bottomBarRef=()=>{}, navigation, children, style, bgColor="#FFFFFF" }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  
  }, [navigation])

  style = style ?? {}

  return (

    <View style={[styles.container, style.container,
    { backgroundColor: bgColor }
    ]}>
      <KeyboardAvoidingView style={{ flex: 1, marginTop: getStatusBarHeight() }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingTop: 0,
    // paddingLeft: '5%',
    // paddingRight: '5%',
  }
})
