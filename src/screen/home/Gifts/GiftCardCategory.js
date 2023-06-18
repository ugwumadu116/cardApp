import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import PhoneInput from "../../../components/input/PhoneInput";
import Input from "../../../components/input";
import { InputSecureText } from "../../../components/input/InputSecureText";
import { InputText } from "../../../components/input/InputText";
import Text from "../../../components/Text";
import { GlassBoardLayout } from "../../../components/layouts/GlassBoardLayout";
import Button from "../../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../../assets/js/Goback";
import addidas from "../../../assets/GiftCardsFolder/addidas.png";
import AirBnB from "../../../assets/GiftCardsFolder/AirBnB.png";
import amazon from "../../../assets/GiftCardsFolder/amazon.png";
import americanEagle from "../../../assets/GiftCardsFolder/americanEagle.png";
import Apple from "../../../assets/GiftCardsFolder/apple.png";
import asda from "../../../assets/GiftCardsFolder/asda.png";
import Asos from "../../../assets/GiftCardsFolder/Asos.png";
import Atheleta from "../../../assets/GiftCardsFolder/Atheleta.png";
import bananaRepo from "../../../assets/GiftCardsFolder/bananaRepo.png";
import netflix from "../../../assets/GiftCardsFolder/netflix.png";
import CircleShoppingCart from "../../../assets/GiftCardsFolder/CircleShoppingCart";
import ngn from "../../../assets/GiftCardsFolder/ngn.png";
import sa from "../../../assets/GiftCardsFolder/sa.png";
import uk from "../../../assets/GiftCardsFolder/uk.png";
import usa from "../../../assets/GiftCardsFolder/usa.png";
import IconFeather from "react-native-vector-icons/Feather";


export default function App(props) {
    const gifts = [
        {
          id:1,
          name:"iTunes",
          displayName:"iTunes",
          logo:Apple,
          price:"$1000",
          bg:'#000000',
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
  
        },
        {
          id:2,
          name:"Netflix",
          displayName:"Netflix",
          des:"Netflix, Inc. is an American subscription streaming service and production company based in Los Gatos, California",
          logo:netflix,
          price:"$1000",
          bg:'#D80C16',
        },
        {
          id:3,
          name:"Amazon",
          displayName:"Amazon",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:amazon,
          price:"$1000",
          bg:'#FF9900',
        },
        {
          id:4,
          name:"American",
          displayName:"American Eagle Outfitters",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:americanEagle,
          price:"$1000",
          bg:'#000000',
        },
        {
          id:5,
          name:"BR",
          displayName:"Banana Republic",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:bananaRepo,
          price:"$1000",
          bg:'#000000',
        },
        {
          id:6,
          name:"Airbnb",
          displayName:"Airbnb",
          logo:AirBnB,
          price:"$1000",
          bg:'#FF5A5F',
        },
        {
          id:7,
          name:"Adidas",
          displayName:"Adidas",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:addidas,
          price:"$1000",
          bg:'#000000',
        },
        {
          id:8,
          name:"Athleta",
          displayName:"Athleta",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:Atheleta,
          price:"$1000",
          bg:'#8F2B92',
        },
        {
          id:9,
          name:"Asos",
          displayName:"Asos",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:Asos,
          price:"$1000",
          // bg:'#8F2B92',
          bg:'#FFFFFF',
        },
        {
          id:10,
          name:"Asda",
          displayName:"Asda",
          des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
          logo:asda,
          price:"$1000",
          bg:'#44BF00',
        },
      ]
    const {navigation} = props
    let selectedCard = props?.route?.params?.cardIndex
  const [selectedCountry, setSelectedCountry] = useState('ngn')
  const [stage, setStage] = useState('stageTwo')



   

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
            onPress={() => navigation.goBack()}
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
            Category 
          </Text>
        </View>

        <View style={{width:"100%",backgroundColor:'#CFF1FF', flexDirection:'row', alignItems:'center', marginTop:23}}>
            <View style={{
            width: Math.round(Dimensions.get("window").width /3),
             height:3, backgroundColor:stage==="stageOne"?'#3F37C9':'#CFF1FF'}}/>
            <View style={{
            width: Math.round(Dimensions.get("window").width /3),
             height:3,backgroundColor:stage==="stageTwo"?'#3F37C9':'#CFF1FF'}}/>
            <View style={{
            width: Math.round(Dimensions.get("window").width /3),
             height:3,backgroundColor:stage==="stageThree"?'#3F37C9':'#CFF1FF'}}/>
            
        </View>

        <View style={{backgroundColor:gifts[selectedCard].bg, borderRadius:20, width:'100%', padding:35, height:255, marginTop:25}}>
        <Image style={{resizeMode: 'contain', }} source={gifts[selectedCard].logo} />  
        <Text
                family="proximaNovaSemiBold"
                style={{
                  color:gifts[selectedCard].name==="Asos"?"#00000": "#FFFFFF",

                  fontSize: 25,
                  lineHeight: 35,
                  fontWeight: "400",
                  marginTop:70,
                //   transform: [{ rotate: '-90deg'}]

                }}
              >
                {gifts[selectedCard].displayName}
              </Text>
              <Text
                family="proximaNovaRegular"
                style={{
                  color:gifts[selectedCard].name==="Asos"?"#00000": "#FFFFFF",
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: "400",
                  marginTop:10,

                }}
              >
                {/* {gifts[selectedCard].price} */}
                $10 - $1000
                
              </Text>
        </View>

        <View style={{ width: "100%", marginTop:50}}>
            <InputText
              leftIconInputSpacing={20}
              // keyboardType={"numeric"}
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
              placeholder={"Select Country"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

          <View style={{ width: "100%", marginTop:5}}>
            <InputText
              leftIconInputSpacing={20}
              // keyboardType={"numeric"}
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
              placeholder={"Select Card Type"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

          <View style={{ width: "100%", marginTop:5}}>
            <InputText
              leftIconInputSpacing={20}
              // keyboardType={"numeric"}
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
              placeholder={"Select Sub-Category"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>

          <View style={{ width: "100%", marginTop:5}}>
            <InputText
              leftIconInputSpacing={20}
              editable={false} selectTextOnFocus={false}
              // keyboardType={"numeric"}
              rightIcon={() => (
                <TouchableOpacity
                  onPress={() => {
                    console.log("get OTP");
                  }}
                >
                  <Text  family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 21,
              fontWeight: "400",
            }}>
                  ₦0/$
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
              placeholder={"Current Rate"}
              returnInput={(value) => {
                // console.log(value);
              }}
            />
          </View>


          <View style={{ marginTop: 31, width: "100%" }}>
      
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
                navigation.navigate('GiftCardHowMuch')
              // console.log("yesss")
            //   bottomSheetRef.current?.open();
            }}
          />
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
