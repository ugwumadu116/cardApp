import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
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
import IconIonicons from 'react-native-vector-icons/Ionicons'
import CasdDepositInfoImg from '../../../assets/casdDepositInfoImg.png'

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

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Cash Deposit</Text>
      </View>

      <View style={{width:'100%', height:107, marginTop:38, backgroundColor:'#3F37C9', justifyContent:'center', alignItems:'center', borderRadius:10}}>
      <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Account Number</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:26, fontWeight:'400',}}>210 336 0432 {" "}</Text>
        <IconIonicons size={22} name="copy-outline" color="#FFFFFF" />
      </View>
    
     </View>

    



     <View style={{marginTop:18}}>
     <ImageBackground
          style={{
             borderRadius:16,
            //  justifyContent:'center',
             alignItems:'center',
             width:'100%',
             height:303,
              resizeMode: "center",
            //   flexDirection:'row', alignItems:'center', justifyContent:'space-between',
              // resizeMode: "cover",
            }}
          
             imageStyle={{borderRadius:16,    }}
          source={CasdDepositInfoImg}
        >
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:15, fontWeight:'400', marginTop:30}}>How to make a Cash Deposit</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:15, fontWeight:'400', marginTop:33}}>Give Cash to the POS Merchant</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:15, fontWeight:'400', marginTop:10, textAlign:'center'}}>Give cash to the POS merchant and ask for the funds to be transferred to your Cardin Africa Account <Text family="proximaNovaRegular"  style={{color:"#3F37C9", fontSize:14, lineHeight:15, fontWeight:'400',}}>210 336 0432 </Text></Text>
       
     
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:15, fontWeight:'400', marginTop:73}}>Confirm Receipt of Funds</Text>

<Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:15, fontWeight:'400', marginTop:10, textAlign:'center'}}>Confirm your Cardin Africa Account has been funded with the correct amount</Text>



            </ImageBackground>
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
