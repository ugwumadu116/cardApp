import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'

export default function App() {

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text>Login Screen</Text>
     

<View style={{width:'90%'}}>
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

<View style={{width:'90%', marginTop:50}}>
<InputSecureText
              label={'Card name security'}
              placeholder={'Share something with others...'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />
</View>
<View style={{width:'90%', marginTop:50}}>
<InputSecureText
              // label={'Card name security'}
              placeholder={'Share something with others...'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />
</View>

<View style={{width:'90%',marginTop:50}}>
<InputText
              label={'Card name'}
              rightIcon={true}
              leftIcon={true}
              placeholder={'Share something with others...'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />
</View>
<View style={{width:'90%',marginTop:50}}>
<InputText
              // label={'Card name'}
              rightIcon={true}
              leftIcon={true}
              placeholder={'Share something with others...'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />
</View>

   

    {/* <View style={{width:'90%'}}>
    <Input
              value={input.email.trim()}
              inputLabel="Joel"
              returnInput={(value) => {
                setInput({...input,phone_number:value.phone,phone_code:value.code})
              // setInputError({email:'', password:'', password_confirmation:'',f_name:"", l_name:"",phone_number:"", activePickerValidation:''})
              }}
              onChange={(val) => console.log("vaaall")}
            />
    </View> */}
    </View>
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
