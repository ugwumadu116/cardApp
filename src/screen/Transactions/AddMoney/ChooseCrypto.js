import React, { useState, useEffect, useRef, } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import PhoneInput from "../../../components/input/PhoneInput";
import Input from "../../../components/input";
import { InputSecureText } from "../../../components/input/InputSecureText";
// import { InputText } from "../../../components/input/InputText";
import Text from "../../../components/Text";
import { GlassBoardLayout } from "../../../components/layouts/GlassBoardLayout";
import Button from "../../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../../assets/js/Goback";
import CircleCardToup from "../../../assets/js/CircleCardToup";
import CircleCashDeposite from "../../../assets/js/CircleCashDeposite";
import CircleCardin from "../../../assets/js/CircleCardin";
import CircleUsdt from "../../../assets/svgToImg/circleCrypto.png";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontisto from "react-native-vector-icons/Fontisto";

export default function App(props) {
  const { navigation } = props;

  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false);
  }, [props]);

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
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
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
              marginLeft: 33,
            }}
          >
            Choose Crypto
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

        <Pressable onPress={() => navigation.navigate("AddMoneyBuyCrypto")} style={{marginTop:17, backgroundColor:'#FFFFFF', borderRadius:10, justifyContent:'center', padding:12, paddingLeft:9}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <Image style={{resizeMode: 'contain', }} source={CircleUsdt} />  

    
<View style={{marginLeft:18,}}>
<Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>USDT</Text>
<Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:12, lineHeight:20, fontWeight:'400',}}>(TetherUS)</Text>

    </View>    
        </View>

        <View>
      
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>₦462.09</Text>
<Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:12, lineHeight:20, fontWeight:'400',}}>-0.33%</Text>

        </View>
        </View>
          

      </Pressable>

      <View style={{marginTop:30}}></View>

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
