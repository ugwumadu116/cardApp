import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import PhoneInput from '../../../components/input/PhoneInput'
import Input from '../../../components/input'
import { InputSecureText } from '../../../components/input/InputSecureText'
import { InputText } from '../../../components/input/InputText'
import Text from '../../../components/Text'
import {GlassBoardLayout} from  '../../../components/layouts/GlassBoardLayout'
import Button from '../../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../../assets/js/Goback'
import CircleCardToup from '../../../assets/js/CircleCardToup'
import CircleCashDeposite from '../../../assets/js/CircleCashDeposite'
import CircleCardin from '../../../assets/js/CircleCardin'
import CircleCryptoDeposite from '../../../assets/js/CircleCryptoDeposite'
import IconFeather from 'react-native-vector-icons/Feather'
import IconFontisto from 'react-native-vector-icons/Fontisto'

export default function App(props) {
    const {navigation} = props

React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)

  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout bgColor="#F8F8FA" style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:10,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Top-up with Card/Account</Text>

      </View>

      <View style={{width:'100%', marginTop:38}}>
      <InputText
      leftIconInputSpacing={17}
      label={"Amount"}
      style={{leftStyle:{}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#E9F6FF'}}}
            //   leftIcon={() => <IconFeather name={'lock'} size={21} color={"#3F37C9"} /> }
              rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text> <IconFontisto name={'close'} size={17} color={"#3F37C9"} /> </Text></TouchableOpacity>}
              placeholder={'₦17,1500.00'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  
     </View>

     <View style={{marginTop:40, flexDirection:'row', alignItems:'center', marginLeft:15}}>
     <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:12, lineHeight:17, fontWeight:'400',}}>For amount above ₦100,000.00</Text>
     <Text family="proximaNovaRegular"  style={{color:"#3F37C9", fontSize:12, lineHeight:17, fontWeight:'400',}}>{" "}click here</Text>

     </View>

     <View style={{marginTop:16,}}>
     <Button 
                        title="Next"
                        family="proximaNovaRegular"
                        style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          // navigation.navigate('Signup')
    //   registeredBoundActionCreator(dispatch)



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
