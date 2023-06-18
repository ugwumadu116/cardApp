import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import NigeriaIcon from '../../assets/js/NigeriaIcon'
import IconFeather from 'react-native-vector-icons/Feather'
import Usa from '../../assets/usa.png'
import Uk from '../../assets/uk.png'
import Eu from '../../assets/eu.png'
import RBSheet from "react-native-raw-bottom-sheet";




export default function App(props) {
  const {navigation} = props
  const bottomSheetRef = useRef(null);


  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)
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

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:25}}>Exchange Rates</Text>

      </View>




      <View 
       style={{
        // justifyContent: "space-between",
        // flexDirection: "row",
        // alignItems: "center",
        marginTop: 21,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 15,
        width:'100%',
      }}
      >

       <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400',}}>Topup Rate</Text>



      <TouchableOpacity
       onPress={() => {
            
              bottomSheetRef.current?.open();
            }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
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
        </TouchableOpacity>

      </View>



      <View 
       style={{
        // justifyContent: "space-between",
        // flexDirection: "row",
        // alignItems: "center",
        marginTop: 21,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 15,
        width:'100%',
      }}
      >

       <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400',}}>Withdrawal Rates</Text>



      <TouchableOpacity
       onPress={() => {
            
              bottomSheetRef.current?.open();
            }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            // backgroundColor: "#FFFFFF",
            // borderRadius: 10,
            // paddingVertical: 12,
            // paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
           <View style={{width:34, height:32, backgroundColor:'#CFF1FF', justifyContent:'center', alignItems:'center', borderRadius:7}}>
         
          <View style={{width:34, height:32, backgroundColor:'#CFF1FF', borderRadius:7, alignItems:'center', justifyContent:'center'}}>
          <Image style={{resizeMode: 'contain', width:24, height:22,borderRadius:100 }} source={Usa} />  

          </View>

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
               United States Dollar
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
USD

              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </TouchableOpacity>

      <TouchableOpacity
       onPress={() => {
            
              bottomSheetRef.current?.open();
            }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            // backgroundColor: "#FFFFFF",
            // borderRadius: 10,
            // paddingVertical: 12,
            // paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
           <View style={{width:34, height:32, backgroundColor:'#CFF1FF', justifyContent:'center', alignItems:'center', borderRadius:7}}>
           <View style={{width:34, height:32, backgroundColor:'#CFF1FF', borderRadius:7, alignItems:'center', justifyContent:'center'}}>
          <Image style={{resizeMode: 'contain', width:24, height:22,borderRadius:100 }} source={Uk} />  

          </View>
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
               British Pounds
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
GBP

              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </TouchableOpacity>

      <TouchableOpacity
       onPress={() => {
            
              bottomSheetRef.current?.open();
            }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            // backgroundColor: "#FFFFFF",
            // borderRadius: 10,
            // paddingVertical: 12,
            // paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
           <View style={{width:34, height:32, backgroundColor:'#CFF1FF', justifyContent:'center', alignItems:'center', borderRadius:7}}>
           <View style={{width:34, height:32, backgroundColor:'#CFF1FF', borderRadius:7, alignItems:'center', justifyContent:'center'}}>
          <Image style={{resizeMode: 'contain', width:24, height:22,borderRadius:100 }} source={Eu} />  

          </View>
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
               Euro
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
              EUR
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </TouchableOpacity>


      </View>




      <View  style={{marginTop:30}}/>

      
          
      </ScrollView>
      <RBSheet
        ref={bottomSheetRef}
        height={Dimensions.get("window").height / 2.8}
        animationType="fade"
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:'center',
            marginTop: 33,
            // borderWidth:1,
          }}
        >
          <View
            style={{ width: "100%",

              alignItems: "center" }}
          >
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                lineHeight: 20,
                fontSize: 14,
                fontWeight: "800",
              }}
            >
              Topup Rate
            </Text>

          </View>

          <View
            style={{ width: "100%", marginTop: "12%",marginBottom:"10%", alignItems: "center", flexDirection:'row', justifyContent:'space-evenly' }}
          >
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                lineHeight: 27,
                fontSize: 20,
                fontWeight: "800",
              }}
            >
              $1.00
            </Text>

          

            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                lineHeight: 21,
                fontSize: 14,
                fontWeight: "800",
              }}
            >
             TO
            </Text>
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                lineHeight: 27,
                fontSize: 20,
                fontWeight: "800",
              }}
            >
              N733.00
            </Text>
          </View>

          <View
            style={{ width: "100%",  alignItems: "center", borderTopColor:'#B2B2B2', borderTopWidth:1 }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                lineHeight: 18,
                fontSize: 12,
                fontWeight: "800",
                textAlign:'center',
                paddingHorizontal:17,
                marginTop:15,
              }}
            >
              The exchange rate is subject to change based  on current {"\n"}
market condition & trends
            </Text>

          </View>


        </View>
      </RBSheet>

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
