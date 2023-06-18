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
import billsuccess from "../../assets/billsuccess.png";

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
            height: 614,
            // marginTop: 30,
          }}
          imageStyle={{
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={billsuccess}
        >
          <View
            style={{
              marginTop: "46%",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#EBF2FF",
                height: 20,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                paddingHorizontal: 13,
              }}
            >
              <Text
                family="proximaNovaSemiBold"
                style={{
                  color: "#3F37C9",
                  fontSize: 12,
                  lineHeight: 12,
                  fontWeight: "700",
                }}
              >
                Novermeber 5,19:14
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
          Status
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'
              }}
            >
              SUCCESS
            </Text>
          </View>


          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
              Bank name
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'
              }}
            >
  United Bank For Africa

            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
              Account number
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
  0123456789

            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
              Account name
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                JOHN DOE JOHN DOE

            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
             Paid with
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                Balance Payment

            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
              SessionID
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                10000000000000000008387832

            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
            VAT
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                ₦.00

            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
            Remark
            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                withdraw

            </Text>
          </View>

<View style={{marginTop:"6%"}} />

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
              Transaction number

            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                  23444038284082048038


            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: "4%",
            }}
          >
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#B2B2B2",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
              }}
            >
            Choose category

            </Text>
            <Text
              family="proximaNovaRegular"
              style={{
                color: "#000000",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "400",
                
                textAlign:'right'

              }}
            >
                Transfer

            </Text>
          </View>

        </ImageBackground>

        <View style={{marginTop:'0%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                    <Button 
                      title="Report an Error"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                    //    setStage('stageOne')

                      }}
                    />
                    <Button 
                      title="Done"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {

                       navigation.reset({
                        index: 0,
                        routes: [{ name: 'Homes' }]
                   })
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
