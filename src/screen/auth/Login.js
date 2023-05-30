import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import UncheckedRadio from '../../assets/js/SquareUncheckedRadioBTN'
import CheckedRadio from '../../assets/js/SquareCheckedRadioBTN'
import FingerPrintIcon from '../../assets/js/FingerPrint'
import { registeredBoundActionCreator } from '../../store/app/action'
import { useStoreContext } from '../../store'

export default function App({navigation}) {
  const {
    dispatch,
    store: { activeApp },
  } = useStoreContext()

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Sign in</Text>

      </View>
      <View style={{width:'100%', marginTop:70}}>
          <PhoneInput
              value={input.phone_number.trim()}
              placeholder='Enter phone number'
              // style={{inputFenceFocus:{borderColor:'red'}}}
              returnInput={(value) => {
                setInput({...input,phone_number:value.phone,phone_code:value.code})
              // setInputError({email:'', password:'', password_confirmation:'',f_name:"", l_name:"",phone_number:"", activePickerValidation:''})
              }}
            />

      </View>

      <View style={{width:'100%', marginTop:17}}>
         <InputSecureText
                  // label={'Card name security'}
                  placeholder={'Enter 6-digits password'}
                  returnInput={(value) => {
                  // console.log(value);
                  }}
                />
     </View>

      <View style={{width:'100%', flexDirection:'row', marginTop:14, alignItems:'center',}}>
      <Pressable
          hitSlop={27}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {
            rememberMe?( <CheckedRadio />):( <UncheckedRadio />)
          }
         
        </Pressable>
        
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:12, lineHeight:30, fontWeight:'400', marginLeft:8}}>Remember Password</Text>

     </View>

     <View style={{marginTop:47, width:'100%'}}>
                    <Button 
                        title="Sign in"
                        family="proximaNovaRegular"
                        style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          // navigation.navigate('Signup')
      registeredBoundActionCreator(dispatch)



                      }}
                    />

                   <Button 
                      title="Create account"
                      family="proximaNovaRegular"
                      style={{backgroundColor: 'transparent',  borderColor:"#3F37C9", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center',marginTop:21,}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                        navigation.navigate('Signup')



                      }}
                    />
                   </View>

     <View style={{marginTop:38, width:'100%', alignItems:'center'}}>
                 <Pressable>
                  <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400', }}>Forgot Password?</Text>
                 </Pressable>
                 <Pressable style={{marginTop:42}}>
                 <FingerPrintIcon />
                 </Pressable>
                 
                   </View>



                   <View style={{marginTop:30}}></View>
      </ScrollView>

      </GlassBoardLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
