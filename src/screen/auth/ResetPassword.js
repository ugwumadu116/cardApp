import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Text from "../../components/Text";
import { GlassBoardLayout } from "../../components/layouts/GlassBoardLayout";
import Button from "../../components/button";
import GoBack from "../../assets/js/Goback";
import MessageSent from "../../assets/js/MessageSent";
import ResetPasswordIcon from "../../assets/js/ResetPassword";
import PinInput from "../../components/input/PinInput";
import Icon from 'react-native-vector-icons/Feather'
import { registeredBoundActionCreator } from '../../store/app/action'
import { useStoreContext } from '../../store'


export default function App({ navigation }) {
    const {
        dispatch,
        store: { activeApp },
      } = useStoreContext()

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
  const [rememberMe, setRememberMe] = useState(true);
  const [signUpFlow, setSignUpFlow] = useState("With email");
  const [code, setCode] = useState("");
  const [code2, setCode2] = useState("");

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
      style={{ container: { paddingLeft: "5%", paddingRight: "5%" } }}
      navigation={navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            marginTop: 23,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable hitSlop={27} onPress={() => navigation.goBack()}>
              <GoBack />
            </Pressable>

            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 16,
                lineHeight: 30,
                fontWeight: "400",
                marginLeft: 33,
              }}
            >
              Reset password
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ResetPasswordIcon />
          {/* <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 12,
              lineHeight: 18,
              fontWeight: "400",
              marginTop: 30,
            }}
          >
           Oops! Is like you forgot your password
          </Text> */}
          <View style={{ flexDirection: "row", width:'100%',marginTop: 40, }}>
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 18,
                fontWeight: "400",
              }}
            >
              Oops! Is like you forgot your password
            </Text>
          </View>

          <View style={{ flexDirection: "row", width:'100%',marginTop: 12, }}>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 18,
                fontWeight: "400",
              }}
            >
             Set Password
            </Text>

            <Icon name={'eye-off'} style={{ marginLeft: 20}} size={14} color={"#000000"} />

           
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              width:"95%"
            }}
          >
            <PinInput
              cellSize={Math.round(Dimensions.get("window").width / 8)}
              codeLength={6}
              value={code}
              // onFocus={() => {
              //   animation()
              // }}
              // onBlur={() => {
              //   animationClose()
              // }}
              restrictToNumbers={true}
              // animated={false}
              cellSpacing={10}
              cellStyleFocused={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#3F37C9",
                colors: "#000000",
              }}
              textStyle={{
                fontSize: 20,
                fontFamily: "proximaNovaSemiBold",
                color: "#000000",
              }}
              cellStyle={{
                borderWidth: 1,
                borderColor: "#DADADA",
                borderRadius: 10,
                // width: 50,
                height: 58,
              }}
              onTextChange={(password) => {
                setCode(password);
              }}
            />
          </View>


          <View style={{ flexDirection: "row", width:'100%',marginTop: 24, }}>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 18,
                fontWeight: "400",
              }}
            >
             Re-enter Password
            </Text>

            <Icon name={'eye-off'} style={{ marginLeft: 20}} size={14} color={"#000000"} />

           
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              width:"95%"
            }}
          >
            <PinInput
              cellSize={Math.round(Dimensions.get("window").width / 8)}
              codeLength={6}
              value={code2}
              // onFocus={() => {
              //   animation()
              // }}
              // onBlur={() => {
              //   animationClose()
              // }}
              restrictToNumbers={true}
              // animated={false}
              cellSpacing={10}
              cellStyleFocused={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#3F37C9",
                colors: "#000000",
              }}
              textStyle={{
                fontSize: 20,
                fontFamily: "proximaNovaSemiBold",
                color: "#000000",
              }}
              cellStyle={{
                borderWidth: 1,
                borderColor: "#DADADA",
                borderRadius: 10,
                // width: 50,
                height: 58,
              }}
              onTextChange={(password) => {
                setCode2(password);
              }}
            />
          </View>

        

          <View style={{ marginTop: 27, width: "100%" }}>
            <Button
              title="Done"
              family="proximaNovaRegular"
              style={{
                backgroundColor: false ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
                borderColor: false ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
                borderWidth: 1,
                width: "100%",
                height: 56,
                justifyContent: "center",
                alignItems: "center",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "400",
                color: "#FFFFFF",
                lineHeight: 20,
                textAlign: "center",
              }}
              onPress={() => {
                // navigation.navigate('Signup')
                console.log("yesss");
      registeredBoundActionCreator(dispatch)

              }}
            />
          </View>

        
        </View>

        <View style={{marginTop:30}}></View>
      </ScrollView>
    </GlassBoardLayout>
  );
}


