import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/input";
import { InputSecureText } from "../../components/input/InputSecureText";
import { InputText } from "../../components/input/InputText";
import Text from "../../components/Text";
import { GlassBoardLayout } from "../../components/layouts/GlassBoardLayout";
import Button from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../assets/js/Goback";
import TuneIcon from "../../assets/js/Tune";
import Calender from "../../assets/js/Calender";
import CircleUnchecked from "../../assets/js/CircleUnchecked";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import DocumentNumberIcon from "../../assets/js/DocumentNumberIcon";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import CircleCardToup from "../../assets/js/CircleCardToup";
import FingerPrintTransfer from "../../assets/js/FingerPrintTransfer";
import CircleCryptoDeposite from "../../assets/js/CircleCryptoDeposite";
import RBSheet from "react-native-raw-bottom-sheet";
import PinInput from "../../components/input/PinInput";
import * as DocumentPicker from 'expo-document-picker';

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

 
    const pickDocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log(result.uri);
      console.log(result);
    };

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
              label={"Country  Issued"}
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
              placeholder={"Enter here"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

          <View style={{ width: "100%", marginTop:28}}>
            <InputText
              leftIconInputSpacing={20}
              // keyboardType={"numeric"}
              label={"Document to Upload"}
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
              placeholder={"Select document type"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

          <View style={{ width: "100%", marginTop: 28 }}>
          <InputText
      leftIconInputSpacing={40}
    //   keyboardType={'numeric'}
      label={"Document Number"}
      style={{leftStyle:{top:4}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#F8F8FA', height:60, padding:0, paddingBottom:30 }}}
              leftIcon={() =>  <Text>
                {" "}
                <DocumentNumberIcon
                />{" "}
              </Text>}
            //   rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text> <IconFontisto name={'close'} size={17} color={"#3F37C9"} /> </Text></TouchableOpacity>}
              placeholder={''}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  
          </View>

          <View style={{ width: "100%", marginTop: 28, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>

          <View style={{ width: "46%", }}>
          <InputText
      leftIconInputSpacing={40}
    //   keyboardType={'numeric'}
      label={"Issue Date"}
      style={{leftStyle:{top:6}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#F8F8FA', height:60, padding:0, paddingBottom:30 }}}
              leftIcon={() =>  <Text>
                {" "}
                <Calender
                />{" "}
              </Text>}
            //   rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text> <IconFontisto name={'close'} size={17} color={"#3F37C9"} /> </Text></TouchableOpacity>}
              placeholder={''}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  
          </View>

          <View style={{ width: "46%", }}>
          <InputText
      leftIconInputSpacing={10}
    //   keyboardType={'numeric'}
      label={"Expiry Date"}
      style={{leftStyle:{}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#F8F8FA', height:60, padding:0, paddingBottom:30 }}}
             
            //   rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text> <IconFontisto name={'close'} size={17} color={"#3F37C9"} /> </Text></TouchableOpacity>}
              placeholder={''}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  
          </View>

          </View>

          

        <View style={{width: "100%", marginTop: 28,}}>
        <Text
            family="proximaNovaSemiBold"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "400",
              marginBottom:6
            }}
          >
        Upload Document
          </Text>
        <TouchableOpacity
         onPress={pickDocument}
         style={{ width: "100%", marginTop: 2, borderWidth:1, borderStyle:'dashed', height:138, alignItems:'center',justifyContent:'center', borderRadius:10 }}>
          <Text
            family="proximaNovaRegular"
            style={{
              color: "#B2B2B2",
              fontSize: 14,
              lineHeight: 30,
              fontWeight: "400",
              textAlign:'center'
            }}
          >
            Tap here to upload image
          </Text>
          </TouchableOpacity>
        </View>


        </View>

        <View style={{ marginTop: 29, width: "100%" }}>
       
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
                navigation.navigate('RequestVirtualAccountTwo')
         
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
