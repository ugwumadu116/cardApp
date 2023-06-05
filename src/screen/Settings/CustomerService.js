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
import EmailIcon from "../../assets/js/Social/Email";
import FacebookIcon from "../../assets/js/Social/Facebook";
import InstagramIcon from "../../assets/js/Social/Instagram";
import PhoneIcon from "../../assets/js/Social/Phone";
import TwitterIcon from "../../assets/js/Social/Twitter";
import IconFeather from "react-native-vector-icons/Feather";
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
            onPress={() => navigation.navigate(props?.route?.params?.goBack? props?.route?.params?.goBack:"Setting")}


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
            Customer service
          </Text>
        </View>

     


          <Pressable
         onPress={() => {
        //   navigation.navigate('IdentityVerification')
       
      }}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 24,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <PhoneIcon />
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
                0700033666223
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
                Our call center is open to you 24/7
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>

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
            <EmailIcon />
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
              help@cardinafrica.ng
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
               Send us an email for any inquiry
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
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
            <FacebookIcon />
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
              Cardinafrica_ng
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
               Follow us on Facebook
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
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
            <TwitterIcon />
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
                @cardinafrica_ng
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
               Follow us on Twitter
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
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
            <InstagramIcon />
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
              @cardinafrica_ng
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
               Follow us on Instagram
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
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
