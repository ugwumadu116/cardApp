import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable,ImageBackground, Dimensions, KeyboardAvoidingView, Platform, Image} from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import Paymentsuccessful from '../../assets/Paymentsuccessful.png'
import PaymentSuccesInfo from '../../assets/paymentSuccesInfo.png'
import HomeNAV from '../../assets/HomeNAVSuccess.png'
import Share from '../../assets/js/Share'
import TransactionWithdraw from '../../assets/js/transactionWithdraw'

import IconFeather from 'react-native-vector-icons/Feather'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { getStatusBarHeight } from 'react-native-status-bar-height'




export default function App(props) {
    const {navigation} = props

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    props.bottomBarRef.current?.setVisible(false)

      }, [navigation])

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <ImageBackground
    style={{
      //   flex: 1,
      //   resizeMode: "cover",
      flex: 1,
      flexDirection: 'column',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
       paddingLeft: '5%',
    paddingRight: '5%',
    

    }}
    imageStyle={{
    width: Math.round(Dimensions.get("window").width),
    height: Math.round(Dimensions.get("window").height),

    }}
    source={Paymentsuccessful}
  >
     <KeyboardAvoidingView style={{ flex: 1, marginTop: getStatusBarHeight() }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>

        <ImageBackground
          style={{
            //   flex: 1,
            // width: Math.round(Dimensions.get("window").width-10),
            // paddingLeft:12,
            // paddingRight:12,
            // paddingTop:21,
            width:'100%',
            height:614,
            marginTop:30,
          }}
          imageStyle={{
            borderRadius:20,
            resizeMode: "contain",

        }}
          source={PaymentSuccesInfo}
        >

<View style={{
            // backgroundColor:'red',
            // marginTop:1,
            position:'relative',
        
            }}>
                <View style={{
            // backgroundColor:'red',
            // marginTop:1,
            position:'absolute',
            width:"100%",
            top:65,


        
            }}>
                <View style={{width:"100%", 

                alignItems:'flex-end', 
                paddingRight:15,
                paddingTop:19,
                }}>
                <Share />

                </View>
                <View style={{
            marginTop:85,
            alignItems:'center',
            justifyContent:'center',
            width:'100%',

                }}>
                <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:20, lineHeight:30, fontWeight:'700',}}>Top up success</Text>
                <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',marginTop:13}}>Total top us</Text>
                <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:25, lineHeight:30, fontWeight:'700',marginTop:10}}>₦500.00</Text>

                </View>

                <View style={{
            marginTop:15,
            // alignItems:'center',
            // justifyContent:'center',
            width:'100%',
            paddingHorizontal:10,

                }}>
                <Text family="proximaNovaLight"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',marginTop:13}}>Top up destination</Text>
              
                <View style={{flexDirection:'row', justifyContent:'space-between', borderRadius:10,backgroundColor:'#F8F8FA', marginTop:10,paddingVertical:15, paddingHorizontal:11,}}>
                    <View style={{flexDirection:'row', }}>
                    <Image style={{resizeMode: 'contain',marginTop:1 }} source={HomeNAV} />  
                    <View style={{marginLeft:10}}>
                    <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'700',}}>Cardin Virtual Card</Text>
                    <Text family="proximaNovaLight"  style={{color:"#BABABA", fontSize:12, lineHeight:12, fontWeight:'700',marginTop:8}}>1234 - 1234 - 1234 - 1234</Text>

                    </View>

                    </View>
                    <View style={{justifyContent:'flex-end'}}>
                <Text family="proximaNovaLight"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',marginTop:13}}>3:15PM</Text>

                    </View>

                </View>


<View style={{marginTop:12, width:'100%', }}>
                    <Button 
                        title="Done"
                        family="proximaNovaRegular"
                        style={{backgroundColor: true?'#3F37C9':"rgba(63, 55, 201, 0.5)",  borderColor:true?'#3F37C9':"rgba(63, 55, 201, 0.5)", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          // navigation.navigate('home')
                          navigation.reset({
                            index: 0,
                            routes: [{ name: 'Homes' }]
                       })
                          // console.log("yesss")


                      }}
                    />

                    

                 
                   </View>

<View style={{marginTop:5, width:'100%', }}>
                    <Button 
                        title="Top up more money"
                        family="proximaNovaRegular"
                        style={{backgroundColor: "#FFFFFF",  borderColor:"#FFFFFF", borderWidth:1, width:"100%", height:26, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          navigation.navigate('AddMoney')
                          // console.log("yesss")


                      }}
                    />

                    

                 
                   </View>


                </View>


                </View>
          
        </View>
            </ImageBackground>

        </ScrollView>

       
      </KeyboardAvoidingView>

   

    </ImageBackground>
 
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
