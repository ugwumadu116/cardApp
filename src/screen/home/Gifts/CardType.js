import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, Image, TextInput , Dimensions, TouchableOpacity} from "react-native";
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
import StageOne from "./StageOne";
import IconFeather from "react-native-vector-icons/Feather";
import StageTwo from "./StageTwo";

export default function App(props) {
    const {navigation} = props
  const [stage, setStage] = useState('stageOne')


    const gifts = [
      {
        id:1,
        name:"iTunes",
        displayName:"iTunes",
        logo:Apple,
        price:"$1000",
        bg:'#000000',
      },
      {
        id:2,
        name:"Netflix",
        displayName:"Netflix",

        logo:netflix,
        price:"$1000",
        bg:'#D80C16',
      },
      {
        id:3,
        name:"Amazon",
        displayName:"Amazon",

        logo:amazon,
        price:"$1000",
        bg:'#FF9900',
      },
      {
        id:4,
        name:"American",
        displayName:"American Eagle Outfitters",

        logo:americanEagle,
        price:"$1000",
        bg:'#000000',
      },
      {
        id:5,
        name:"BR",
        displayName:"Banana Republic",
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

        logo:addidas,
        price:"$1000",
        bg:'#000000',
      },
      {
        id:8,
        name:"Athleta",
        displayName:"Athleta",

        logo:Atheleta,
        price:"$1000",
        bg:'#8F2B92',
      },
      {
        id:9,
        name:"Asos",
        displayName:"",

        logo:Asos,
        price:"$1000",
        // bg:'#8F2B92',
        bg:'#FFFFFF',
      },
      {
        id:10,
        name:"Asda",
        displayName:"",
        logo:asda,
        price:"$1000",
        bg:'#44BF00',
      },
    ]

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
            Gift Cards
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

        <View style={{ width: "100%", marginTop: 18, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
        

        <TextInput
                    secureTextEntry={false}
            style={{backgroundColor: "#FFFFFF",    fontFamily: 'proximaNovaRegular', fontSize: 14,  width:"80%", height:59, borderRadius:10,marginRight:8, paddingHorizontal:20, }}
                    autoCapitalize='none'
                    placeholder={"Search Gift cards"}
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


        <ScrollView style={{marginTop:19, marginBottom:3}}   horizontal={true} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' showsHorizontalScrollIndicator={false} >
        <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 All
                  
                </Text>
         </View>
         <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 App
                  
                </Text>
         </View>

         <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 Beauty
                  
                </Text>
         </View>

         <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 Electronics
                  
                </Text>
         </View>
         <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 Fashion
                  
                </Text>
         </View>
         <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 Film & TV
                  
                </Text>
         </View>
         <View  style={{justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#FFFFFF", borderRadius:8, marginRight:8, padding:8}}>
                <Text
                  family="proximaNovaRegular"
                  style={{
                    color:"#00000",
                    fontSize: 14,
                    lineHeight: 15,
                    fontWeight: "400",
                  }}
                >
                 Entertainment
                  
                </Text>
         </View>

         

          

        </ScrollView>


        <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap', }}>
           
        {
            gifts.map((item, index) => {
              return (
                <TouchableOpacity 
                onPress={() => {
                    navigation.setParams({ cardIndex: index })
                    navigation.navigate('GiftCardCategory')

                    }}
                key={item.id} style={{width:"48%", height:120, borderRadius:15, backgroundColor:item.bg, alignItems:'center', justifyContent:'center', marginTop:14}}>
                    <Image style={{resizeMode: 'contain', }} source={item.logo} />  
                    <Text
                            family="proximaNovaSemiBold"
                            style={{
                                color: "#FFFFFF",

                                fontSize: 20,
                                lineHeight: 20,
                                fontWeight: "400",
                                textAlign:'center',
                                marginTop:10,
                            //   transform: [{ rotate: '-90deg'}]

                            }}
                            >
                            {item.displayName}
                            </Text>
                  
                </TouchableOpacity>
              )
            })
          }

          

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
