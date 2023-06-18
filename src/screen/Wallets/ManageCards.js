import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, } from "react-native";
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
import RadioOn from "../../assets/js/RadioOn";
import Limit from "../../assets/js/Limit";
import BlockCard from "../../assets/js/BlockCard";
import RadioOff from "../../assets/js/RadioOff";
import { authBoundActionCreator } from '../../store/app/action'
import { useStoreContext } from '../../store'
import * as StoreReview from 'expo-store-review';


export default function App(props) {
  const {
    dispatch,
    store: { activeApp },
  } = useStoreContext()

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
            onPress={() => navigation.navigate("Card")}
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
            Manage card
          </Text>
        </View>

       

        <View style={{ marginTop: 9 }} />

      


        <Pressable
         onPress={() => {
          // navigation.navigate('ChangePassword')
       
      }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Limit />
            <View style={{ marginLeft: 18 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Set Limit
              </Text>

              <Text
                family="proximaNovaRegular"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
               Set a daily transaction limit
              </Text>
             
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>
      

        <Pressable
         onPress={() => {
          navigation.navigate('ChangePin')
       
      }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ChangePasswordIcon />
            <View style={{ marginLeft: 18 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Change Password
              </Text>

              <Text
                family="proximaNovaRegular"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
               Check or change your card PIN
              </Text>
             
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>
      
        <Pressable
         onPress={() => {
          // navigation.navigate('ChangePassword')
          setRememberMe(!rememberMe)
       
      }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <BlockCard />
            <View style={{ marginLeft: 18 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
               Block Card
              </Text>

              <Text
                family="proximaNovaRegular"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
             Temporarily disable this card
              </Text>
             
            </View>
          </View>

          <View style={{}}>
{
  rememberMe?(
    <RadioOn />
  ):(
    <RadioOff />
  )
}

           
            {/* <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} /> */}
          </View>
        </Pressable>
      

   
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
