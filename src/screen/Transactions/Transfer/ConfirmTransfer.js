import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, Dimensions,ImageBackground  } from 'react-native';
import { InputSecureText } from '../../../components/input/InputSecureText'
import { InputText } from '../../../components/input/InputText'
import Text from '../../../components/Text'
import {GlassBoardLayout} from  '../../../components/layouts/GlassBoardLayout'
import Button from '../../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../../assets/js/Goback'
import CircelBank from '../../../assets/js/CircelBank'
import IconFeather from 'react-native-vector-icons/Feather'
import PinInput from "../../../components/input/PinInput";

export default function App(props) {
    const {navigation} = props

React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)

  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})
  const [code, setCode] = useState("");


  return (
    <GlassBoardLayout bgColor="#FFFFFF" style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:10,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Confirm</Text>

      </View>


      <View style={{backgroundColor:'#EBF2FF', borderRadius:10, marginTop:23}}>
        <View style={{backgroundColor:'#3F37C9', borderRadius:10, alignItems:'center', justifyContent:'center', paddingVertical:20}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>To</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Nnaemeka Ezenwaijiaku Nnaemeka</Text>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',marginTop:5}}>Amount</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:30, fontWeight:'400',}}>₦500.00</Text>


        </View>

        <View style={{marginTop:21, justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingHorizontal:16}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>From:</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',textAlign:'right'}}>2024307769</Text>

        </View>

        <View style={{marginTop:15, justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingHorizontal:16, marginBottom:17}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Transaction fee:</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400', textAlign:'right'}}>₦0.00</Text>

        </View>

      </View>


      <View style={{backgroundColor:'#F8F8FA', borderRadius:10, marginTop:17}}>
       

        <View style={{marginTop:20, justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingHorizontal:16}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>From:</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',textAlign:'right'}}>2024307769</Text>

        </View>

        <View style={{marginTop:15, justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingHorizontal:16, marginBottom:17}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Transaction fee:</Text>
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400', textAlign:'right'}}>₦0.00</Text>

        </View>

      </View>


      <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 48,
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


          <View style={{ marginTop: 25, width: "100%" }}>
            <Button
              title="Confirm"
              family="proximaNovaRegular"
              style={{
                backgroundColor: false ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
                borderColor: false ? "#3F37C9" : "rgba(63, 55, 201, 0.5)",
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
                navigation.navigate('TransferReceipt')
              }}
            />
          </View>



    


      </ScrollView>

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
