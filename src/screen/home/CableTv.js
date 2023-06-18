import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, TextInput, TouchableOpacity } from "react-native";
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
          style={{ marginTop: 13, flexDirection: "row", alignItems: "center" }}
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
            Cable TV
          </Text>
        </View>


        <View style={{ width: "100%", marginTop: 38, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
        

        <TextInput
                    secureTextEntry={false}
            style={{backgroundColor: "#FFFFFF",    fontFamily: 'proximaNovaRegular', fontSize: 14,  width:"80%", height:59, borderRadius:10,marginRight:8, paddingHorizontal:20, }}
                    autoCapitalize='none'
                    placeholder={"Search"}
                    placeholderTextColor={"#B2B2B2"} 
                  
        
                  />
                  <TouchableOpacity  style={{
                      backgroundColor: "#3F37C9",
                      borderColor: "#3F37C9",
                      borderWidth: 1,
                      borderRadius:10,
                      width: 59,
                      height:59,
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <IconFeather name="search" size={24} color={"#FFFFFF"} />
        
                  </TouchableOpacity>
        
        
                </View>


        
       <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                DAARSAT Communications
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                DSTV Subscription
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>


           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               GoTV
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>


           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                Play Subscription
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                Startimes Payments
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                DSTV Box Office Wallet Topup
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
              Infinity TV Payments
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

           
        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                IROKOtv
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>


        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
              
Kwese TV
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                Linda Ikeji TV
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                Montage Cable TV
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('CableTvBillsCheckout')}

          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 16,
          }}
        >
           <Text
                family="proximaNovaRegular"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                Play Subscription
              </Text>

            <IconFeather name={"chevron-right"} size={24} color={"#BABABA"} />
     
        </TouchableOpacity>
    
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
