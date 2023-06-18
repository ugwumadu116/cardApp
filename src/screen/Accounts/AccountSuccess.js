import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
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
import accountSuccess from "../../assets/accountSuccess.png";

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
        <ImageBackground
          style={{
            
            width: "100%",
            // height: 590,
            height: 514,
            marginTop: 30,
          }}
          imageStyle={{
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={accountSuccess}
        >
      <View
            style={{
              marginTop: "96%",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "700",
                }}
              >
               Application Successful
              </Text>
              <Text
                family="proximaNovaRegular"
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  lineHeight: 17,
                  fontWeight: "700",
                  textAlign:'center',
                  marginTop:7,
                }}
              >
            Congratulations! Your virtual account card is {'\n'}
ready to use now.
              </Text>
              <View style={{ marginTop: 18, width: "80%" }}>
       
       <Button
         title="Done"
         family="proximaNovaRegular"
         style={{
           backgroundColor: true ? "rgba(255, 255, 255, 0.2)" : "rgba(63, 55, 201, 0.5)",
           borderColor: true ? "rgba(255, 255, 255, 0.2)" : "rgba(63, 55, 201, 0.5)",
           borderWidth: 0,
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
         onPress={ async () => {
            //  navigation.navigate('home')
             navigation.reset({
                index: 0,
                routes: [{ name: 'Homes' }]
                // routes: [{ name: 'Account' }]
           })
      
         }}
       />
     </View>
          </View>


        </ImageBackground>


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
