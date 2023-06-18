import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, Image } from "react-native";
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


        <ScrollView style={{marginTop:"15%"}}   horizontal={true} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' showsHorizontalScrollIndicator={false} >
          {
            gifts.map(item => {
              return (
                <View key={item.id} style={{width:102, height:301, justifyContent:'space-between', alignItems:'center', flexDirection:'column', backgroundColor:item.bg, borderRadius:10, marginRight:8, paddingVertical:33}}>
                <Image style={{resizeMode: 'contain', }} source={item.logo} />  
                
                <Text
                family="proximaNovaSemiBold"
                style={{
                  color:item.name==="Asos"?"#00000": "#FFFFFF",

                  fontSize: 20,
                  lineHeight: 35,
                  fontWeight: "400",
                  transform: [{ rotate: '-90deg'}]

                }}
              >
                {item.name}
              </Text>
              <Text
                family="proximaNovaRegular"
                style={{
                  color:item.name==="Asos"?"#00000": "#FFFFFF",
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: "400",
                }}
              >
                {item.price}
                
              </Text>
                </View>
              )
            })
          }
         

          

        </ScrollView>

        {{
          stageOne:(
            <View style={{marginTop:30,}}>
               <View style={{marginTop:0,}}>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',}}>Gift cards are here!</Text>
                  <Text family="proximaNovaLight"  style={{color:'#000000', fontSize:14, lineHeight:15, fontWeight:'700',marginBottom:32}}>Get gift cards and vouchers to shop{"\n"}
at top brands around the world.</Text>
                
                  <StageOne />

                  </View>

                  <View style={{marginTop:'20%', alignItems:'center', flexDirection:'row', justifyContent:'flex-end', width:'100%'}}>
                    {/* <Button 
                      title="Back"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageTwo')

                      }}
                    /> */}
                    <Button 
                      title="Continue"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageTwo')

                      }}
                    />
                </View>
            </View>
          ),
          stageTwo:(
            <View>
               <View style={{marginTop:30,}}>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',}}>Your assets are secure</Text>
                  <Text family="proximaNovaLight"  style={{color:'#000000', fontSize:14, lineHeight:15, fontWeight:'700',marginBottom:32}}>Surprise your loved ones with a gift card{"\n"}
or voucher.</Text>
                  <StageTwo />

                  </View>

                  <View style={{marginTop:'20%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                    <Button 
                      title="Back"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageOne')

                      }}
                    />
                    <Button 
                      title="Continue"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                      //  setStage('stageFour')
                      navigation.navigate("SearchGiftCard")

                      }}
                    />
                </View>
            </View>
          ),

        }[stage]}

    
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
