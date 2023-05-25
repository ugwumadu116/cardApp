import React, {Fragment, useRef} from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { StyleSheet, TextInput,  View, Pressable, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window') 

export default function Input({style = {}, label, secureTextEntry, preInput = '', returnInput, focused, placeholder = '', reference, testID}) {
  const phoneInput = useRef(null)

 
  const [input, setInput] = React.useState(preInput)
  const [formattedValue, setFormattedValue] = React.useState('NG')


  return (
    <View style={[{...styles.inputFence, backgroundColor:'#F8F8FA'}, style.inputFence, style.inputFenceFocus] }>
      
      <PhoneInput
        ref={phoneInput}
        defaultValue={input}
        defaultCode="NG"
        layout="first"
        placeholder={placeholder}
        placeholderTextColor={"rgba(186, 186, 186, 1)"} 
        // placeholderTextColor={"#000000"} 
        textContainerStyle={{
          backgroundColor:'transparent',
          color: "#000000",
          paddingLeft:0,
          padding:0,
          margin:0,

          



        }}
        disableArrowIcon={true}
        textInputStyle={{
          fontSize:16,
          fontFamily: 'proximaNovaRegular',
          color: "#000000"

        }}
        codeTextStyle={{
          fontSize:16,
          lineHeight:18,
          fontFamily: 'proximaNovaRegular',
          color: '#000000',

        }}
   
        flagButtonStyle={{
          width: '15%',

        }}
   
        containerStyle={{
          width: '100%',
          height: '100%',
          fontSize: 16,
          backgroundColor:'transparent',
          color: "#000000",
        }}
        onChangeText={(text) => {
          setInput(text) 
          returnInput({phone:text, code:formattedValue})
        }}
        onChangeCountry={(cod)=> {
          setFormattedValue(cod.cca2)
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  inputFence: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor:'#3F37C9',
    borderRadius: 10,
    maxHeight: 69,
    paddingTop: '1%'
  },
  input: {
    width: '90%',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'proximaNovaRegular',
    lineHeight: 16.98,
    height: '100%',
    fontWeight: '400',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',

  },
  label: {

    fontSize: 12,
    lineHeight: 14.56,
    alignSelf: 'center',
    fontWeight: '400',
    fontFamily: 'proximaNovaRegular',
  },
  labelBackground: {
    paddingLeft: '3%',
    paddingRight: '3%',
    position: 'absolute',
    marginLeft: '4%',
    top: -7,
     
  },
  
  fakeIcon: {
    height: 11,
    width: 11
  },


  marginRight: {
    alignSelf:'center',
    paddingTop:'5%',
    marginRight: '5%'
  },
})
