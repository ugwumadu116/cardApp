import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, Modal, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import PhoneInput from "../../components/input/PhoneInput";
import Input from "../../components/input";
import { InputSecureText } from "../../components/input/InputSecureText";
import { InputText } from "../../components/input/InputText";
import Text from "../../components/Text";
import { GlassBoardLayout } from "../../components/layouts/GlassBoardLayout";
import Button from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../assets/js/Goback";
import RateUsIcon from "../../assets/js/RateUs";
import ChangePasswordIcon from "../../assets/js/changePasswordIcon";
import BankIcon from "../../assets/js/BankIcon";
import LogoutIcon from "../../assets/js/LogoutIcon";
import IconFeather from "react-native-vector-icons/Feather";
import AddMoreIcon from "../../assets/js/more/AddMore";
import BettingIcon from "../../assets/js/more/Betting";
import BillsIcon from "../../assets/js/more/Bills";
import BookIcon from "../../assets/js/more/Book";
import GiftIcon from "../../assets/js/more/Gift";
import TvIcon from "../../assets/js/more/Tv";
import VirtualAccountIcon from "../../assets/js/more/VirtualAccount";
import VirtualCardIcon from "../../assets/js/more/VirtualCard";
import AirtimeIcon from "../../assets/js/more/Airtime";
import DataIcon from "../../assets/js/more/Data";
import CloseGiftCard from '../../assets/js/CloseGiftCard'
import GiftCardImg from '../../assets/GiftCardImg.png'

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
  const [cardError, setCardError] = useState(false)

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
      bgColor="#FFFFFF"
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
            More
          </Text>
        </View>


        <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "400",
              marginTop:21,
            }}
          >
            Bill payment
          </Text>

          <View style={{width:"100%", justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:24}}>

            <Pressable 
             onPress={() => {
                navigation.navigate('Airtime')

            }}
            style={{width:"47%", height:70, justifyContent:'center', flexDirection:'row', alignItems:'center', backgroundColor:'#1C9BC9', borderRadius:10,}}>
            <AirtimeIcon />
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "400",
              marginLeft:16
            }}
          >
            Airtime
          </Text>
              
            </Pressable>

            <Pressable
             onPress={() => {
              navigation.navigate('Data')

          }}
             style={{width:"47%", height:70, justifyContent:'center', flexDirection:'row', alignItems:'center', backgroundColor:'#3F37C9', borderRadius:10,}}>
            <DataIcon />
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "400",
              marginLeft:16
            }}
          >
            Data
          </Text>
              
            </Pressable>

          </View>

          <View style={{width:"100%", justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:13}}>

<Pressable 
  onPress={() => {
    navigation.navigate('CableTv')

}}
style={{width:"47%", height:70, justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<TvIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Cable TV
</Text>
  
</Pressable>

<Pressable 
 onPress={() => {
  navigation.navigate('Bills')

}}
 style={{width:"47%", height:70, justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<BillsIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Bills
</Text>
  
</Pressable>



</View>


<View style={{width:"100%", justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:13}}>

<Pressable 
 onPress={() => {
  navigation.navigate('Schools')

}}
style={{width:"47%", height:70, justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<BookIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
School & Exam
</Text>
  
</Pressable>

<Pressable
onPress={() => {
  setCardError(true)

}}
 style={{width:"47%", height:70,justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<GiftIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Gift card
</Text>
  
</Pressable>



</View>
    


<View style={{width:"100%", justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:13}}>

<Pressable 
 onPress={() => {
  navigation.navigate('Card')

}}
 style={{width:"47%", height:70, justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<VirtualCardIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Virtual card
</Text>
  
</Pressable>

<Pressable 
 onPress={() => {
  navigation.navigate('Account')

}}
style={{width:"47%", height:70,justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<VirtualAccountIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Virtual account
</Text>
  
</Pressable>



</View>
    


<View style={{width:"100%", justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:13}}>

<Pressable
 onPress={() => {
  navigation.navigate('Betting')

}}
 style={{width:"47%", height:70, justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<BettingIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Betting
</Text>
  
</Pressable>

<View style={{width:"47%", height:70,justifyContent:'flex-start', paddingLeft:23, flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8FA', borderRadius:10,}}>
<AddMoreIcon  />
<Text
family="proximaNovaRegular"
style={{
  color: "#000000",
  fontSize: 14,
  lineHeight: 20,
  fontWeight: "400",
  marginLeft:16
}}
>
Add more
</Text>
  
</View>



</View>
    
<View  style={{marginTop:30}}/>
    

      </ScrollView>


      <Modal
        animationType="slide"
        transparent={true}
        visible={cardError}
        onRequestClose={() =>  {
          setCardError(!cardError)
        }}
      >
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', }}>

       <ImageBackground
          style={{
            
            width: "100%",
            // height: 590,
            height: 417,
            // marginTop: 30,
          }}
          imageStyle={{
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={GiftCardImg}
        >
           <View
              style={{
                marginTop: "16%",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
                <View style={{marginTop:'0%', width:253}}>
                   
                   <Button 
                     title="Buy gift cards"
                     family="proximaNovaRegular"
                     style={{backgroundColor: '#FFC300',  borderColor:"#FFC300", borderWidth:1, width:"100%", height:67, justifyContent:'center', alignItems:'center',}}
                     textStyle={{fontSize: 20, fontWeight: '400',  color:"#000000", lineHeight:21, textAlign:'center'}}
                     onPress={() => {
                       setCardError(false)
          navigation.navigate('BuyGiftCards')


                     }}
                   />

                   
               </View>

             <View style={{marginTop:10, width:253}}>
                  
             <Button 
                     title="Redeem gift cards"
                     family="proximaNovaRegular"
                     style={{backgroundColor: '#24BDFF',  borderColor:"#24BDFF", borderWidth:1, width:"100%", height:67, justifyContent:'center', alignItems:'center',}}
                     textStyle={{fontSize: 20, fontWeight: '400',  color:"#000000", lineHeight:21, textAlign:'center'}}
                     onPress={() => {
                      

                       setCardError(false)
                       navigation.navigate('SellGiftCard')

                     }}
                   />


               </View>



             <TouchableOpacity
                onPress={() => {
                  setCardError(false)

                }}
              style={{marginTop:"10%"}}>
              <CloseGiftCard />
             </TouchableOpacity>

            </View>


          </ImageBackground>
          
        </View>

      </Modal>
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
