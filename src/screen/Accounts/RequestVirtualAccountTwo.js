import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import PhoneInput from "../../components/input/PhoneInput";
import Input from "../../components/input";
import { InputSecureText } from "../../components/input/InputSecureText";
import { InputText } from "../../components/input/InputText";
import Text from "../../components/Text";
import { GlassBoardLayout } from "../../components/layouts/GlassBoardLayout";
import Button from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../assets/js/Goback";
import TuneIcon from "../../assets/js/Tune";
import CircleChecked from "../../assets/js/CircleChecked";
import CircleUnchecked from "../../assets/js/CircleUnchecked";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import CircleMono from "../../assets/js/CircleMono";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import CircleCardToup from "../../assets/js/CircleCardToup";
import FingerPrintTransfer from "../../assets/js/FingerPrintTransfer";
import CircleCryptoDeposite from "../../assets/js/CircleCryptoDeposite";
import RBSheet from "react-native-raw-bottom-sheet";
import PinInput from "../../components/input/PinInput";

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
  const [activePaymentMethod, setActivePaymentMethod] = useState("wallet");
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
  const bottomSheetRef = useRef(null);
  const [code, setCode] = useState("");

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
              marginLeft: 25,
            }}
          >
            Request virtual Account
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
      

          <View style={{ width: "100%", marginTop:10}}>
            <InputText
              leftIconInputSpacing={20}
              // keyboardType={"numeric"}
              label={"Country of Residence"}
              rightIcon={() => (
                <TouchableOpacity
                  onPress={() => {
                    console.log("get OTP");
                  }}
                >
                  <Text>
                    {" "}
                    <IconFeather
                      name={"chevron-down"}
                      size={22}
                      color={"#B2B2B2"}
                    />{" "}
                  </Text>
                </TouchableOpacity>
              )}
              // label={"Enter amount"}
              //

              style={{
                leftStyle: {},
                rightStyle: { marginRight: "5%" },
                inputFenceFocus: {
                  backgroundColor: "#F8F8FA",
                  height: 60,
                  padding: 0,
                  paddingBottom: 30,
                },
              }}
              placeholder={"Select country"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

          <View style={{ width: "100%", marginTop: 28 }}>
            <InputText
              leftIconInputSpacing={10}
              label={"State"}
              style={{
                leftStyle: {},
                rightStyle: { marginRight: "5%" },
                inputFenceFocus: {
                  backgroundColor: "#F8F8FA",
                  height: 60,
                  padding: 0,
                  paddingBottom: 30,
                },
              }}
              placeholder={"Lagos"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>
          <View style={{ width: "100%", marginTop: 28 }}>
            <InputText
              leftIconInputSpacing={10}
              label={"City"}
              style={{
                leftStyle: {},
                rightStyle: { marginRight: "5%" },
                inputFenceFocus: {
                  backgroundColor: "#F8F8FA",
                  height: 60,
                  padding: 0,
                  paddingBottom: 30,
                },
              }}
              placeholder={"Ajah"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>
          <View style={{ width: "100%", marginTop: 28 }}>
            <InputText
              leftIconInputSpacing={10}
              label={"Street"}
              style={{
                leftStyle: {},
                rightStyle: { marginRight: "5%" },
                inputFenceFocus: {
                  backgroundColor: "#F8F8FA",
                  height: 60,
                  padding: 0,
                  paddingBottom: 30,
                },
              }}
              placeholder={"Richmand estate 3"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>
          <View style={{ width: "100%", marginTop: 28 }}>
            <InputText
              leftIconInputSpacing={10}
              label={"Zip Code"}
              style={{
                leftStyle: {},
                rightStyle: { marginRight: "5%" },
                inputFenceFocus: {
                  backgroundColor: "#F8F8FA",
                  height: 60,
                  padding: 0,
                  paddingBottom: 30,
                },
              }}
              placeholder={"102273"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

        </View>

        <View style={{ marginTop: 36, width: "100%" }}>
      
          <Button
            title="Next"
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
                navigation.navigate('AccountSuccess')
            }}
          />
        </View>

        <View style={{ marginTop: 30 }} />
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
