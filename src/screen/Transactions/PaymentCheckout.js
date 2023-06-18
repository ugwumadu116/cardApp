import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable , Dimensions} from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import TuneIcon from '../../assets/js/Tune'
import CircleChecked from '../../assets/js/CircleChecked'
import CircleUnchecked from '../../assets/js/CircleUnchecked'
import IconFeather from 'react-native-vector-icons/Feather'
import IconEntypo from 'react-native-vector-icons/Entypo'
import CircleMono from '../../assets/js/CircleMono'
import IconAntDesign from "react-native-vector-icons/AntDesign";
import CircleCardToup from '../../assets/js/CircleCardToup'
import FingerPrintTransfer from '../../assets/js/FingerPrintTransfer'
import CircleCryptoDeposite from '../../assets/js/CircleCryptoDeposite'
import RBSheet from 'react-native-raw-bottom-sheet'
import PinInput from "../../components/input/PinInput";






export default function App({navigation}) {

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [activePaymentMethod, setActivePaymentMethod] = useState("wallet")
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})
  const bottomSheetRef = useRef(null)
  const [code, setCode] = useState("");


  return (
    <GlassBoardLayout  bgColor="#F8F8FA" style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:25}}>Payment Checkout</Text>

      </View>


      <View style={{width:'100%', marginTop:21}}>
      <View style={{backgroundColor:'#1C9BC9', borderRadius:10, paddingHorizontal:12, paddingVertical:20}}>
        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Actual payment</Text>
        
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:30, fontWeight:'400',}}>₦500.00</Text>

        </View>
      

        </View>
   

    </View>

    <View style={{width:'100%', marginTop:12}}>
      <View style={{backgroundColor:'#FFFFFF', borderRadius:10, paddingHorizontal:12, paddingVertical:20}}>
        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#F8F8FA'}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400',}}>Product name</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400',}}>Airtel-7015948443</Text>
        
        </View>

        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400',}}>Fee</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400',}}>₦0.00</Text>
        
        </View>

       
      

        </View>
   

    </View>

    <View style={{width:'100%', marginTop:12}}>
      <View style={{backgroundColor:'#FFFFFF', borderRadius:10, paddingHorizontal:12, paddingVertical:20}}>
        <View style={{borderBottomWidth:1, borderBottomColor:'#F8F8FA', paddingBottom:10}}>

<Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Payment method </Text>
        </View>

    
      <Pressable 
        onPress={() => setActivePaymentMethod("wallet")}

      style={{marginTop:11,  justifyContent:'center',}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <CircleMono />
    
<View style={{marginLeft:18,}}>
<Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:21, fontWeight:'400',}}>Balance (₦8,364.35)</Text>

    </View>   

        </View>

        <View>
      
      {
        activePaymentMethod==="wallet"?(
<CircleChecked />

        ):(
<CircleUnchecked />

        )
      }

        </View>
        </View>
          

      </Pressable>
      

        
      <Pressable 
        onPress={() => setActivePaymentMethod("card")}

      style={{marginTop:11,  justifyContent:'center', borderBottomWidth:1, borderBottomColor:'#F8F8FA', paddingBottom:10}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <CircleCardToup />
    
<View style={{marginLeft:18,}}>
<Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:21, fontWeight:'400',}}>Bank Card</Text>

    </View>   

        </View>

        <View>
      
        {
        activePaymentMethod==="card"?(
<CircleChecked />

        ):(
<CircleUnchecked />

        )
      }

        </View>
        </View>
          

      </Pressable>


  
      <Pressable 
        onPress={() =>  setActivePaymentMethod("crypto")}

      style={{marginTop:11,  justifyContent:'center', }}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <CircleCryptoDeposite />
    
<View style={{marginLeft:18,}}>
<Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:21, fontWeight:'400',}}>Cryptocurrency</Text>

    </View>   

        </View>

        <View>
      
        {
        activePaymentMethod==="crypto"?(
<CircleChecked />

        ):(
<CircleUnchecked />

        )
      }

        </View>
        </View>
          

      </Pressable>


        </View>
   

    </View>

    <View style={{marginTop:21, width:'100%', }}>
                    <Button 
                        title="Continue"
                        family="proximaNovaRegular"
                        style={{backgroundColor: true?'#3F37C9':"rgba(63, 55, 201, 0.5)",  borderColor:true?'#3F37C9':"rgba(63, 55, 201, 0.5)", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                        //   navigation.navigate('ConfirmTransfer')
                          // console.log("yesss")
                          bottomSheetRef.current?.open()


                      }}
                    />

                 
                   </View>

   




        <View  style={{marginTop:120}}/>
      <View  style={{marginTop:30}}/>

      
          

      </ScrollView>

      <RBSheet
        ref={bottomSheetRef}
        height={Dimensions.get('window').height / 2.2}
        animationType="fade"
        customStyles={{ container: { borderTopLeftRadius: 30, borderTopRightRadius: 30,  backgroundColor: "#FFFFFF", } }}
      >

        <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingHorizontal: 17,
                  marginTop: 33,
                }}
              >
             

                <View style={{ width: '100%', marginBottom: 1, alignItems:'center'}}>
                  <Text
                    family="proximaNovaSemiBold"
                    style={{
                      color: "#000000",
                      lineHeight: 20,
                      fontSize: 14,
                      fontWeight: '800',
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
                      fontWeight: '800',
                      marginTop: 25,
                    }}
                  >
               Forgot Payment PIN?
                  </Text>
        

                
                </View>


                <View style={{ marginTop: 31, width: "100%", flexDirection:"row",justifyContent:"space-around" }}>
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
                bottomSheetRef.current?.close()

                navigation.navigate('PaymentSuccess')

              }}
            />
           <View style={{width:50, height:50}}>
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
