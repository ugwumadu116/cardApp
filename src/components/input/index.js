import React, {Fragment} from 'react'
import {View,} from 'react-native'
import ErrorTag from './assets/ErrorTag'
import Text from '../Text'
import {Container,} from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Input(props) {
  const {error=''} = props
  return (
    <Fragment >
      {props.inputLabel && <Text family="proximaNovaSemiBold"  style={[
        {
          fontSize: 16,
          color: '#000000',
          lineHeight: 20,
          marginBottom: 6,
 
        },
        props.inputLabelStyle

      ]}>{props.inputLabel}</Text>}
      <View style={{width:'100%', position:'relative',}}>
      <Ionicons
        name={"ios-home-outline"}
        size={25}
        color={'black'}
        style={{position:'absolute', top:61,  right:0}}
      />
      <Container placeholderTextColor="#000000" autoCapitalize='none' {...props} />
      <Ionicons
        name={"settings-outline"}
        size={25}
        color={'black'}
        style={{position:'absolute', top:20, right:10}}
      />
      </View>
      {error.length? (
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, padding: 5}}>
          <ErrorTag/>
          <Text style={{
            fontSize: 15,
            color: '#EE0F1C',
            lineHeight: 20,
            marginLeft: 10
          }}>{error}</Text>
        </View>
      ): null}
    </Fragment>
  )
}
