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
import IconAntDesign from "react-native-vector-icons/AntDesign";
import CustomerService from "../../assets/js/CustomerService";
import ReferIcon from "../../assets/js/ReferIcon";
import IdentityVerificationIcon from "../../assets/js/IdentityVerification";
import DocumentIcon from "../../assets/js/IDVerification/Document";

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
            onPress={() => navigation.navigate("Setting")}

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
            Verify identity
          </Text>
        </View>

        <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 12,
              lineHeight: 20,
              fontWeight: "400",
              marginTop:30
            }}
          >
            To remove all limits on your account, we need to verify your identity.
          </Text>


          <Pressable
         onPress={() => {
        //   navigation.navigate('IdentityVerification')
       
      }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 19,
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
                Face ID
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
                Verified
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
          <IconAntDesign style={{marginRight:7}} name={"checkcircle"} size={22} color={"#05EB00"} />

            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>


        <Pressable
         onPress={() => {
        //   navigation.navigate('IdentityVerification')
       
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
            <DocumentIcon />
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
              ID Document
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
                Unverified
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
            <IconAntDesign style={{marginRight:7}} name={"exclamationcircle"} size={22} color={"#F60A0B"} />
            <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
          </View>
        </Pressable>

     




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
