import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, ImageBackground } from "react-native";
import PhoneInput from "../../components/input/PhoneInput";
import Input from "../../components/input";
import { InputSecureText } from "../../components/input/InputSecureText";
import { InputText } from "../../components/input/InputText";
import Text from "../../components/Text";
import { GlassBoardLayout } from "../../components/layouts/GlassBoardLayout";
import Button from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../assets/js/Goback";
import RateUsIcon from "../../assets/js/RateUs";
import ChangePasswordIcon from "../../assets/js/changePasswordIcon";
import BankIcon from "../../assets/js/BankIcon";
import LogoutIcon from "../../assets/js/LogoutIcon";
import IconFeather from "react-native-vector-icons/Feather";

import AcceptanceIcon from "../../assets/js/createVirtualCard/Acceptance";
import InstantAccessIcon from "../../assets/js/createVirtualCard/InstantAccess";
import SafetyIcon from "../../assets/js/createVirtualCard/Safety";
import SecurityIcon from "../../assets/js/createVirtualCard/Security";
import Visa from '../../assets/js/Visa'
import VirCard from '../../assets/VirCard.png'


export default function App(props) {
    const {navigation} = props

    React.useLayoutEffect(() => {
        props.bottomBarRef.current?.setVisible(false)
    
      }, [props])
  const [input, setInput] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    phone_code: "NG",
    address: "Nill",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    activePickerValidation: "",
    address: "",
  });

  return (
    <GlassBoardLayout
      bgColor="#F8F8FA"
      style={{ container: { paddingLeft: "5%", paddingRight: "5%" } }}
      navigation={navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{ marginTop: 23, flexDirection: "row", alignItems: "center" }}
        >
          <Pressable
            hitSlop={27}
            onPress={() => navigation.goBack()}
          >
            <GoBack />
          </Pressable>

          <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 16,
              lineHeight: 30,
              fontWeight: "400",
              marginLeft: 25,
            }}
          >
             Cardin Africa cards
          </Text>
        </View>

   


      <ImageBackground
          style={{
             borderRadius:14,
            //  justifyContent:'center',
            //  alignItems:'center',
             width:'100%',
             height:215,
             marginTop:10,
              // flexDirection:'row', alignItems:'center', justifyContent:'space-between',
            }}
          
             
              imageStyle={{borderRadius:14, resizeMode: "contain",    }}
          source={VirCard}
        >

            <View style={{position:'relative'}}>

            <View style={{ width:"100%", marginTop:86, paddingHorizontal:16 }}>
<Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>$96.95</Text>
<Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:26, fontWeight:'400',}}>***************5093</Text>


</View>

<View style={{ flexDirection:'row', alignItems:'flex-end', width:'100%', justifyContent:'space-between',  paddingHorizontal:16 , marginTop:38, }} >
<Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Cardin Africa Virtual Card</Text>
<Visa />
 </View>

            </View>
         
           
        </ImageBackground>


        <View style={{marginTop:20}}>


        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 37,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <InstantAccessIcon />

            <View style={{ marginLeft: 15 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Instant Access

              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: "400",
                }}
              >
Apply and activate instantly

              </Text>
            </View>
          </View>

         
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 37,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SafetyIcon />

            <View style={{ marginLeft: 15 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Safety 

              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: "400",
                }}
              >
No physical handling, No risk of loss.

              </Text>
            </View>
          </View>

         
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 37,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AcceptanceIcon />

            <View style={{ marginLeft: 15 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Online Merchant Acceptance


              </Text>
          
            </View>
          </View>

         
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 37,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SecurityIcon />

            <View style={{ marginLeft: 15 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Security 

              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: "400",
                }}
              >
Licenced

              </Text>
            </View>
          </View>

         
        </View>

        </View>


      <View style={{marginTop:50}}>
<Button 
                        title="Continue"
                        family="proximaNovaRegular"
                        style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          navigation.navigate('RequestVirtualCard')



                      }}
                    />
</View>

<View  style={{marginTop:30}}/>
    

      </ScrollView>
    </GlassBoardLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
