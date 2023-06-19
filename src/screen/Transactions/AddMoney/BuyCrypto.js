import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity,Image, TextInput } from 'react-native';
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
import CircleUsdt from "../../../assets/svgToImg/Tether.png";



export default function App(props) {
    const {navigation} = props

React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)

  }, [props])


  const [input, setInput] = useState({email:'0', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
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

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Buy USDT</Text>

      </View>

      <View style={{marginTop:26, alignItems:'center'}}>
      <View style={{ width:224, backgroundColor:'#FFFFFF',
      flexDirection:'row', alignItems:'center', justifyContent:'space-between',
      shadowColor: 'rgba(63, 55, 201, 0.1);', padding:12,
      shadowOffset: {width: 0, height: 20},
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 12,
         height:65, borderRadius:100}}>
          <View style={{ flexDirection:'row', alignItems:'center',}}>
        <Image style={{resizeMode: 'contain', }} source={CircleUsdt} />  

          <View style={{marginLeft:15}}>
          <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>USDT</Text>
          <Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:12, lineHeight:14, fontWeight:'400',}}>(TetherUS)</Text>


          </View>

          </View>

          <View>
            <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:17, fontWeight:'400', textAlign:'right'}}>₦462.09</Text>
            <Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:12, lineHeight:14, fontWeight:'400',textAlign:'right'}}>-0.33%</Text>
            
          </View>
      


     
     </View>

      </View>

     

     <View style={{marginTop:153, alignItems:'center', marginLeft:15, position:'relative'}}>
    

          <View style={{width:"100%",  flexDirection:'row', alignItems:'center', justifyContent:'center', height:72, paddingLeft:15, paddingRight:30 }}>

              
        <Text family="proximaNovaRegular"  style={{color:"#000000",fontSize: 36, opacity: 0, textAlign:'center', lineHeight:40, fontWeight:'400', }}>{input.email}</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000",fontSize: 14, textAlign:'right', lineHeight:20, fontWeight:'400', marginTop:10, marginLeft:"10%",}}>NGN</Text>
          </View>

          <TextInput
            secureTextEntry={false}
            value={input.email}
            keyboardType={'numeric'}
            style={{
              color:'#000000', textAlign:'center', fontFamily: 'proximaNovaRegular', 
              fontSize: 36,  width:"100%", height:72,
              //  paddingHorizontal:20, 
               paddingLeft:15, paddingRight:30,
              position:"absolute", 
            }}
            autoCapitalize='none'
            // placeholder={"0NGN"}
            // placeholderTextColor={"red"} 
            onChangeText={(val) => {
              setInput({...input, email:`${val.trim()}`})
              
            }}
          

          />




     </View>

     {/* <View style={{marginTop:16,}}>
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
     </View> */}



   


    
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
