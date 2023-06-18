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
import PinInput from "../../components/input/PinInput";
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
              Verification code
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
          <MessageSent />
          <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 18,
              fontWeight: "400",
              marginTop: 30,
            }}
          >
            Please, enter verification code that we've
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 18,
                fontWeight: "400",
                marginLeft: 2,
              }}
            >
              just sent to
            </Text>
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 18,
                fontWeight: "400",
                marginLeft: 2,
              }}
            >
              {" "}
              +234 7015 948 443
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 28,
            }}
          >
            <PinInput
              cellSize={Math.round(Dimensions.get("window").width / 6)}
              codeLength={4}
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
                width: 59,
                height: 59,
              }}
              onTextChange={(password) => {
                setCode(password);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 21,
              alignItems: "center",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 30,
                fontWeight: "400",
                marginLeft: 0,
              }}
            >
              Verification code will expire in
            </Text>
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 30,
                fontWeight: "400",
                marginLeft: 2,
              }}
            >
              10:32
            </Text>
          </View>

          <View style={{ marginTop: 21, width: "100%" }}>
            <Button
              title="Continue"
              family="proximaNovaRegular"
              style={{
                backgroundColor: true ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
                borderColor: true ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
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
                // navigation.navigate('ResetPassword')
      registeredBoundActionCreator(dispatch)

              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 28,
              alignItems: "center",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 30,
                fontWeight: "400",
                marginLeft: 0,
              }}
            >
              Didn't receive a code?{" "}
            </Text>
            <TouchableOpacity>
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#000000",
                  fontSize: 14,
                  lineHeight: 30,
                  fontWeight: "400",
                  marginLeft: 2,
                }}
              >
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop:30}}></View>
      </ScrollView>
    </GlassBoardLayout>
  );
}


