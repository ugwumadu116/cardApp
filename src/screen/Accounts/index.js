import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, ImageBackground } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import UncheckedRadio from '../../assets/js/SquareUncheckedRadioBTN'
import CheckedRadio from '../../assets/js/SquareCheckedRadioBTN'
import NigeriaIcon from '../../assets/js/NigeriaIcon'
import IconFeather from 'react-native-vector-icons/Feather'
import PiggyBank from '../../assets/piggyBank.png'
import GiftCircleBox from '../../assets/js/GiftCircleBox'




export default function App(props) {
  const {navigation} = props

  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(true)
  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout bgColor="#F8F8FA"  style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:25}}>Accounts</Text>

      </View>




      <View style={{width:'100%', marginTop:21}}>
      <View style={{backgroundColor:'#3F37C9', borderRadius:10, paddingHorizontal:12, paddingVertical:20}}>
        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Total balance</Text>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Transaction History</Text>
        <IconFeather name={'chevron-right'} size={12} color={"#FFFFFF"} />

        </View>

       



        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:30, fontWeight:'400',marginTop:5, marginRight:20}}>₦8,364.35</Text>
        <IconFeather name={'eye'} size={21} color={"#ffffff"} />

        </View>
      

        </View>
   

    </View>


    <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:27}}>
       <View>
       <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400',}}>Recent Transactions</Text>
       

       </View>
       
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaSemiBold"  style={{color:"#B2B2B2", fontSize:16, lineHeight:30, fontWeight:'400',}}>View all</Text>
       

        </View>


        </View>



      <View 
       style={{
        // justifyContent: "space-between",
        // flexDirection: "row",
        // alignItems: "center",
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 15,
        width:'100%',
      }}
      >

       <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400',}}>Topup Rate</Text>



      <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            // backgroundColor: "#FFFFFF",
            // borderRadius: 10,
            // paddingVertical: 12,
            // paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
           <View style={{width:34, height:32, backgroundColor:'#CFF1FF', justifyContent:'center', alignItems:'center', borderRadius:7}}>
            <NigeriaIcon />
           </View>
            <View style={{ marginLeft: 18 }}>
              <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Nigerian Naira
              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#B2B2B2",
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: "400",
                }}
              >
              NGN
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </View>

      </View>



      <View style={{marginTop:20,}}>
      <ImageBackground
          style={{
             borderRadius:10,
             width:'100%',
             height:135,
              resizeMode: "cover",
            }}
          
             imageStyle={{borderRadius:10,    }}
          source={PiggyBank}
        >

            <View style={{paddingHorizontal:21, paddingVertical:19 }} >
              <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Create your virtual USD {"\n"}Bank account</Text>

              <Pressable
                style={{
                  borderRadius:5,
                  backgroundColor:'#FFFFFF',
                  width:142,
                  height:35,
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:17,
                }}
                >
              <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Request virtual account</Text>
              
            </Pressable>
            </View>

          

           
        </ImageBackground>

        
      </View>



   <View style={{marginTop:14, backgroundColor:'#FFFFFF', borderRadius:15, justifyContent:'center', padding:12}}>
     <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <GiftCircleBox />
    
            <View style={{marginLeft:12}}>
            <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Refer to earn ₦800</Text>
              <Text family="proximaNovaSemiBold"  style={{color:"rgba(0, 0, 0, 0.5)", fontSize:14, lineHeight:20, fontWeight:'400',}}>Get N500 bonus for each new user you invite</Text>

            </View>
        </View>

        <View>
      
        <IconFeather name={'chevron-right'} size={22} color={"#BABABA"} />

        </View>
        </View>
          

      </View>


      <View  style={{marginTop:120}}/>
      <View  style={{marginTop:30}}/>

      
          
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
