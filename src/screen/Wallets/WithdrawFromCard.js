import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import UncheckedRadio from '../../assets/js/SquareUncheckedRadioBTN'
import CheckedRadio from '../../assets/js/SquareCheckedRadioBTN'
import NigeriaIcon from '../../assets/js/NigeriaIcon'
import IconFeather from 'react-native-vector-icons/Feather'
import PiggyBank from '../../assets/piggyBank.png'
import GiftCircleBox from '../../assets/js/GiftCircleBox'
import RBSheet from "react-native-raw-bottom-sheet";
import PinInput from "../../components/input/PinInput";

import FingerPrintTransfer from "../../assets/js/FingerPrintTransfer";




export default function App(props) {
  const {navigation} = props
  const bottomSheetRef = useRef(null);



  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)
  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})
  const [code, setCode] = useState("");

  return (
    <GlassBoardLayout bgColor="#F8F8FA"  style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => {
            navigation.navigate("Card");
            // navigation.goBack("Card")
        }}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:25}}>Withdraw from card</Text>

      </View>




      <View style={{width:'100%', marginTop:21}}>
      <View style={{backgroundColor:'#1C9BC9', borderRadius:10, paddingHorizontal:12, paddingVertical:20}}>
        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Total balance</Text>
        
        <TouchableOpacity 
        onPress={() => {
        navigation.setParams({ goBack: "Account" })

          navigation.navigate('Transaction')
        }}

        style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Transaction History</Text>
        <IconFeather name={'chevron-right'} size={12} color={"#FFFFFF"} />

        </TouchableOpacity>

       



        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:30, fontWeight:'400',marginTop:5, marginRight:20}}>₦8,364.35</Text>
        <IconFeather name={'eye'} size={21} color={"#ffffff"} />

        </View>
      

        </View>

        <View style={{ width: "100%", marginTop: 20 }}>
          <InputText
      leftIconInputSpacing={20}
      keyboardType={'numeric'}
      label={"Amount"}
      style={{leftStyle:{top:16}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#F8F8FA', height:60, padding:0, paddingBottom:30 }}}
              leftIcon={() =>  <Text  family="proximaNovaRegular"  style={{
                color:'#000000',
                fontSize:20, lineHeight:26, fontWeight:'400',
              }}>
             $
              </Text>}
            //   rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text> <IconFontisto name={'close'} size={17} color={"#3F37C9"} /> </Text></TouchableOpacity>}
              placeholder={''}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  
          </View>

          <View style={{ marginTop: 36, width: "100%" }}>
      
      <Button
        title="Withdraw"
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
            bottomSheetRef.current?.open();

        }}
      />
    </View>
   

    </View>



  
      <View  style={{marginTop:120}}/>
      <View  style={{marginTop:30}}/>

      
          
      </ScrollView>
      <RBSheet
        ref={bottomSheetRef}
        height={Dimensions.get("window").height / 2.2}
        animationType="fade"
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 17,
            marginTop: 33,
          }}
        >
          <View
            style={{ width: "100%", marginBottom: 1, alignItems: "center" }}
          >
            <Text
              family="proximaNovaSemiBold"
              style={{
                color: "#000000",
                lineHeight: 20,
                fontSize: 14,
                fontWeight: "800",
                marginTop: 2,
              }}
            >
              Enter Payment Pin
            </Text>

            <View
              style={{
                //   flexDirection: "row",
                //   alignItems: "center",
                //   justifyContent: "center",
                marginTop: 12,
                //   width:'100%',
              }}
            >
              <PinInput
                cellSize={Math.round(Dimensions.get("window").width / 6)}
                codeLength={4}
                value={code}
                // onFocus={() => {
                //   animation()
                // }}
                // onBlur={() => {
                //   animationClose()
                // }}
                restrictToNumbers={true}
                // animated={false}
                cellSpacing={10}
                cellStyleFocused={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#3F37C9",
                  colors: "#000000",
                }}
                textStyle={{
                  fontSize: 20,
                  fontFamily: "proximaNovaSemiBold",
                  color: "#000000",
                }}
                cellStyle={{
                  borderWidth: 1,
                  borderColor: "#DADADA",
                  borderRadius: 10,
                  width: 59,
                  height: 59,
                }}
                onTextChange={(password) => {
                  setCode(password);
                }}
              />
            </View>

            <Text
              family="proximaNovaRegular"
              style={{
                color: "#3F37C9",
                lineHeight: 18,
                fontSize: 12,
                fontWeight: "800",
                marginTop: 25,
              }}
            >
              Forgot Payment PIN?
            </Text>
          </View>

          <View
            style={{
              marginTop: 31,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              title="Confirm"
              family="proximaNovaRegular"
              style={{
                backgroundColor: true ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
                borderColor: true ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
                borderWidth: 1,
                width: "80%",
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
                bottomSheetRef.current?.close();

                navigation.navigate("BillsReciept");
              }}
            />
            <View style={{ width: 50, height: 50 }}>
              <FingerPrintTransfer />
            </View>
          </View>
        </View>
      </RBSheet>

       </GlassBoardLayout> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
