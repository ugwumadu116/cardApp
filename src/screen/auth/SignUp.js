import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import IconFeather from 'react-native-vector-icons/Feather'
import GoBack from '../../assets/js/Goback'
import UncheckedRadio from '../../assets/js/SquareUncheckedRadioBTN'
import CheckedRadio from '../../assets/js/SquareCheckedRadioBTN'
import FingerPrintIcon from '../../assets/js/FingerPrint'
import GetOTP from '../../assets/js/GetOTP'

export default function App({navigation}) {

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(true)
  const [signUpFlow, setSignUpFlow] = useState("With email")
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center',  justifyContent:'space-between'}}>
   
    <View style={{flexDirection:'row', alignItems:'center',}}>
    <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Create account</Text>


    </View>

    <TouchableOpacity 
    onPress={() => {
      setSignUpFlow(signUpFlow==="With email"?"With phone":"With email")
    }} 
    style={{ borderRadius:8, borderColor:'#3F37C9', paddingHorizontal:11, paddingVertical:10, borderWidth:1}}>
       <Text family="proximaNovaRegular"  style={{color:"#3F37C9", fontSize:11, lineHeight:10, fontWeight:'400',}}>{signUpFlow}</Text>
      
    </TouchableOpacity>
      
      </View>

      <View style={{width:'100%', marginTop:70}}>

          <InputText
              leftIcon={() => <IconFeather name={'user'} size={21} color={"#3F37C9"} /> }
              placeholder={'Enter full name'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  
      </View>


{
  signUpFlow==="With email"?(
    <View style={{width:'100%', marginTop:20}}>
     <InputText
              leftIcon={() => <IconFeather name={'mail'} size={21} color={"#3F37C9"} /> }
              placeholder={'Enter email address'}
              returnInput={(value) => {
              // console.log(value);
              }}
            /> 

</View>
  ):(
    <View style={{width:'100%', marginTop:20}}>
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
  )
}
      
    

      <View style={{width:'100%', marginTop:20}}>
      <InputText
      leftIconInputSpacing={65}
      style={{leftStyle:{}, rightStyle:{marginRight:"5%"}}}
              leftIcon={() => <IconFeather name={'lock'} size={21} color={"#3F37C9"} /> }
              rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text><GetOTP name={'lock'} size={21} color={"#3F37C9"} /> </Text></TouchableOpacity>}
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
        
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:12, lineHeight:30, fontWeight:'400', marginLeft:8}}>Click “Confirm” to accept</Text>
        <Text family="proximaNovaRegular"  style={{color:"#3F37C9", fontSize:12, lineHeight:30, fontWeight:'400', marginLeft:2}}>Terms and Conditions</Text>

     </View>

     <View style={{marginTop:47, width:'100%', }}>
                    <Button 
                        title="Create account"
                        family="proximaNovaRegular"
                        style={{backgroundColor: true?'#3F37C9':"rgba(63, 55, 201, 0.5)",  borderColor:true?'#3F37C9':"rgba(63, 55, 201, 0.5)", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          navigation.navigate('OTP')
                          // console.log("yesss")


                      }}
                    />

                 
                   </View>


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
