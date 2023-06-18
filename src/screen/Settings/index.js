import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
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
import { authBoundActionCreator } from '../../store/app/action'
import { useStoreContext } from '../../store'
import * as StoreReview from 'expo-store-review';
// import { logoutFulfilled } from '../../../store/investment/auth/action'


export default function App(props) {
  const {
    dispatch,
    store: { activeApp },
  } = useStoreContext()

  const {navigation} = props
  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(true)
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
            Settings
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={
                {
                  // borderRadius: 17,
                  // borderWidth: 2,
                  // borderColor: "#8DBBFF",
                  // flexDirection: 'row',
                  // position: 'relative',
                  // width: 55, height: 55, borderRadius: 55
                }
              }
            >
              <FaceID />
            </Pressable>

            <View style={{ marginLeft: 16 }}>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 13,
                  fontWeight: "400",
                }}
              >
                Hi, Cajethan
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  family="proximaNovaLight"
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    lineHeight: 13,
                    fontWeight: "400",
                    marginRight: 8,
                  }}
                >
                  $3P3ERT
                </Text>
                <CopyIcon />
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 9 }} />

        <Pressable
         onPress={() => {
          navigation.navigate('IdentityVerification')
       
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
            <IdentityVerificationIcon />
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
                Identity Verification
              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
                Verify your account with your Government issued ID card
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>

        <Pressable
         onPress={() => {
          navigation.navigate('Refer')
       
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
            <ReferIcon />
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
               Refer & Earn
              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
                Invite your friends and get a bonus
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>


        <Pressable
         onPress={() => {
          navigation.navigate('CustomerService')
       
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
            <CustomerService />
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
               Customer Service
              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
             seek support from us
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>


        {/* <Pressable
         onPress={() => {
          navigation.navigate('BankCardAccounts')
       
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
            <BankIcon />
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
               Bank Card/Accounts
              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
             Add payment option
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable> */}


        <Pressable
         onPress={() => {
          navigation.navigate('ChangePassword')
       
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
             
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>



        <Pressable
          onPress={async () => {
            if (StoreReview.isAvailableAsync()) {
             await StoreReview.requestReview()
             .then(function(response){
               console.log("response is",response)
              })
             .catch(e => { console.log(e) })
            }else{
              console.log("review no dey")
            }
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
            <RateUsIcon />
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
              Rate Us
              </Text>
              <Text
                family="proximaNovaLight"
                style={{
                  color: "#B2B2B2",
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
             Rate our APP
              </Text>
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>


        <Pressable
         onPress={() => {
          // navigation.navigate('Signup')
          authBoundActionCreator(dispatch)



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
            <LogoutIcon />
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
              Log out
              </Text>
             
            </View>
          </View>

          <View style={{}}>
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>

   
        <View  style={{marginTop:120}}/>
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
