import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, Image, TouchableOpacity } from "react-native";
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
            textTransform: 'capitalize',

            }}
          >
            {gifts[selectedCard].name} gift card
          </Text>
        </View>

        <View style={{backgroundColor:gifts[selectedCard].bg, borderRadius:20, width:'100%', padding:35, height:255, marginTop:15}}>
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

<View style={{marginTop:50, borderBottomColor:'#EBF2FF', borderBottomWidth:1, paddingBottom:14}}>
<Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#D80C16",
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: "400",
                  marginTop:10,

                }}
              >
               Description
                
              </Text>
<Text
                family="proximaNovaRegular"
                style={{
                  color:"#000000",
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: "400",
                  marginTop:10,

                }}
              >
               {gifts[selectedCard].des}
                
              </Text>
</View>

<View style={{marginTop:25, flexDirection:"row", alignItems:'flex-start', justifyContent:'space-between'}}>
    <View style={{width:46, height:174, borderRadius:10, borderWidth:1, borderColor:'#D9D9D9', alignItems:'center', justifyContent:'center'}}>
    <Text
                family="proximaNovaRegular"
                style={{
                  color:"#000000",
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: "400",
                  transform: [{ rotate: '-90deg'}],
                  width:80


                }}
              >
               Select option
                
              </Text>
    </View>

   <View style={{width:"80%"}}>
 
  <View>
    <Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#B2B2B2",
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: "400",

                }}
              >
               Select size
                
              </Text>

              <View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <TouchableOpacity style={{width:59, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, borderColor:'#D9D9D9', borderWidth:1}}>
                <Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#000000",
                  fontSize: 20,
                  lineHeight: 20,
                  fontWeight: "400",

                }}
              >
            -
                
              </Text>

                </TouchableOpacity>

                <Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#000000",
                  fontSize: 20,
                  lineHeight: 20,
                  fontWeight: "400",

                }}
              >
        $100
                
              </Text>

                <TouchableOpacity style={{width:59, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, borderColor:'#D9D9D9', borderWidth:1}}>
                <Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#000000",
                  fontSize: 20,
                  lineHeight: 20,
                  fontWeight: "400",

                }}
              >
            +
                
              </Text>

                </TouchableOpacity>

                <CircleShoppingCart />

              </View>
   
    </View>
   

    <View style={{marginTop:"7%"}}>
    <Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#B2B2B2",
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: "400",

                }}
              >
              Select store
                
              </Text>

              <View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <TouchableOpacity 
                onPress={() => {
                    setSelectedCountry("ngn")
                }}
                style={{width:59, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, borderColor:selectedCountry==="ngn"?"#FFC300":'#D9D9D9', borderWidth:1}}>
        <Image style={{resizeMode: 'contain', }} source={ngn} />  
                

                </TouchableOpacity>

              

                <TouchableOpacity
                 onPress={() => {
                    setSelectedCountry("usa")
                }}
                 style={{width:59, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, borderColor:selectedCountry==="usa"?"#FFC300":'#D9D9D9', borderWidth:1}}>
        <Image style={{resizeMode: 'contain', }} source={usa} />  
               

                </TouchableOpacity>

                <TouchableOpacity 
                 onPress={() => {
                    setSelectedCountry("uk")
                }}
                style={{width:59, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, borderColor:selectedCountry==="uk"?"#FFC300":'#D9D9D9', borderWidth:1}}>
        <Image style={{resizeMode: 'contain', }} source={uk} />  
               

                </TouchableOpacity>

              

                <TouchableOpacity 
                 onPress={() => {
                    setSelectedCountry("sa")
                }}
                style={{width:59, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, borderColor:selectedCountry==="sa"?"#FFC300":'#D9D9D9', borderWidth:1}}>
        <Image style={{resizeMode: 'contain', }} source={sa} />  
              

                </TouchableOpacity>

                

              </View>
   
    </View>
   </View>

</View>

<View style={{marginTop:"10%", width:"100%", justifyContent:'space-between', alignItems:'center', flexDirection:"row"}}>
<TouchableOpacity style={{width:"48%", height:80, alignItems:'flex-start', justifyContent:'center', borderRadius:10, borderColor:'#D9D9D9', borderWidth:1, paddingLeft:20}}>
                <Text
                family="proximaNovaRegular"
                style={{
                  color:"#B2B2B2",
                  fontSize: 14,
                  lineHeight: 14,
                  fontWeight: "400",

                }}
              >
        Total price
                
              </Text>

              <Text
                family="proximaNovaSemiBold"
                style={{
                  color:"#000000",
                  fontSize: 25,
                  lineHeight: 25,
                  fontWeight: "400",

                }}
              >
        $1000
                
              </Text>

                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                    navigation.setParams({ cardIndex: selectedCard })
                    
                    navigation.navigate("SuccessGiftCard")
                }}
                 style={{width:"48%", height:80, alignItems:'center', justifyContent:'center', borderRadius:10, borderColor:'#000000', borderWidth:1, backgroundColor:"#000000"}}>
                <Text
                family="proximaNovaRegular"
                style={{
                  color:"#FFFFFF",
                  fontSize: 16,
                  lineHeight: 16,
                  fontWeight: "400",

                }}
              >
        Buy Now
                
              </Text>


                </TouchableOpacity>

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
