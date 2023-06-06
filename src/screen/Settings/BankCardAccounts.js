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
            Bank Card/Accounts
          </Text>
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
