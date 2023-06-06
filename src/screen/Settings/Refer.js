import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
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
import CustomerService from "../../assets/js/CustomerService";
import ReferIcon from "../../assets/js/ReferIcon";
import IdentityVerificationIcon from "../../assets/js/IdentityVerification";
import FaceID from "../../assets/js/FaceID";
import CopyIcon from "../../assets/js/CopyIcon";
import IconIonicons from 'react-native-vector-icons/Ionicons'

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
            onPress={() => navigation.navigate(props?.route?.params?.goBack? props?.route?.params?.goBack:"Setting")}


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
            Refer & Earn
          </Text>
        </View>

     <View style={{justifyContent:'center', alignItems:'center', marginTop:"50%"}}>
     <Image style={{resizeMode: 'contain', }} source={require('../../assets/HomeNAV.png')} />  

     <Text
            family="proximaNovaSemiBold"
            style={{
              color: "#000000",
              fontSize: 16,
              lineHeight: 30,
              fontWeight: "400",
              marginRight:8,
            }}
          >
           Share Cardin Africa Now

          </Text>

          <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 12,
              lineHeight: 15,
              fontWeight: "400",
              marginRight:8,
              textAlign:'center',
            }}
          >
           Share the Cardin app and your referral code {"\n"}DIIKGRI2 with friends and family.

          </Text>
     <Button 
                        title="DIIKGRI2"
                        family="proximaNovaRegular"
                        style={{backgroundColor: "#E9F6FF",  borderColor:"#E9F6FF", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', marginTop:21 }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#000000", lineHeight:20, textAlign:'center',}}
                        onPress={() => {
                          navigation.navigate('OTP')
                          // console.log("yesss")


                      }}
                    />


                   <TouchableOpacity style={{backgroundColor:'#3F37C9', width:"100%", height:56, justifyContent:'center', alignItems:'center', flexDirection:'row', borderRadius:10, marginTop:12, borderColor:"#3F37C9", borderWidth:1,}} >
                   <Text
            family="proximaNovaRegular"
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              lineHeight: 16,
              fontWeight: "400",
              marginRight:8,
            }}
          >
            Copy your referral link

          </Text>
                   <IconIonicons size={22} name="copy-outline" color="#FFFFFF" />

                    </TouchableOpacity>   

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
