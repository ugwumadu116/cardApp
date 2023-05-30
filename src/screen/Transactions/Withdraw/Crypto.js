import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { InputSecureText } from '../../../components/input/InputSecureText'
import { InputText } from '../../../components/input/InputText'
import Text from '../../../components/Text'
import {GlassBoardLayout} from  '../../../components/layouts/GlassBoardLayout'
import Button from '../../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../../assets/js/Goback'
import CircelBank from '../../../assets/js/CircelBank'
import CircleCardin from '../../../assets/js/CircleCardin'
import IconFeather from 'react-native-vector-icons/Feather'
import BeneficiaryIcon from '../../../assets/js/banks/Beneficiary'
import AccessIcon from '../../../assets/js/banks/Access'
import KudaIcon from '../../../assets/js/banks/Kuda'
import UBAIcon from '../../../assets/js/banks/UBA'
import WemaIcon from '../../../assets/js/banks/Wema'

export default function App(props) {
    const {navigation} = props

React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)

  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

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

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Withdraw to Crypto</Text>

      </View>

      <View style={{width:'100%', marginTop:21}}>
      <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:16, fontWeight:'600', marginBottom:11, }}>Withdraw from </Text>
      <View style={{backgroundColor:'#3F37C9', borderRadius:10, paddingHorizontal:12, paddingVertical:20}}>
        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Available</Text>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:30, fontWeight:'400',}}>Transaction History</Text>
        <IconFeather name={'chevron-right'} size={12} color={"#FFFFFF"} />

        </View>

       



        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:30, fontWeight:'400',marginTop:5, marginRight:20}}>100.99794431</Text>
        <IconFeather name={'eye'} size={21} color={"#ffffff"} />

        </View>
      

        </View>
   

    </View>

      <View style={{width:'100%', marginTop:31, position:"relative"}}>

            <InputText
                // leftIcon={() => <IconFeather name={'user'} size={21} color={"#3F37C9"} /> }
      style={{leftStyle:{}, rightStyle:{}, inputFenceFocus:{}}}

                leftIconInputSpacing={15}
                label={"Enter wallet address"}
                placeholder={'e.g. 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy. Bech32'}
                returnInput={(value) => {
                // console.log(value);
                }}
            />  

      <Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:14, lineHeight:20, fontWeight:'600', position:'absolute', right:0 }}>Balance: N8,364.35</Text>

        </View>


        <View style={{width:'100%', marginTop:33,}}>

            <InputText
                // leftIcon={() => <IconFeather name={'user'} size={21} color={"#3F37C9"} /> }
            style={{leftStyle:{}, rightStyle:{}, inputFenceFocus:{}}}

                leftIconInputSpacing={15}
                label={"Amount (USDT)"}
                placeholder={'65'}
                returnInput={(value) => {
                // console.log(value);
                }}
            />  


        </View>

        <View style={{width:'100%', marginTop:33,}}>

<InputText
    // leftIcon={() => <IconFeather name={'user'} size={21} color={"#3F37C9"} /> }
style={{leftStyle:{}, rightStyle:{}, inputFenceFocus:{}}}

    leftIconInputSpacing={15}
    label={"Convert"}
    placeholder={'49.9964732'}
    returnInput={(value) => {
    // console.log(value);
    }}
/>  


</View>



<View style={{marginTop:77, width:'100%', }}>
                    <Button 
                        title="Withdraw"
                        family="proximaNovaRegular"
                        style={{backgroundColor: false?'#3F37C9':"rgba(63, 55, 201, 0.5)",  borderColor:false?'#3F37C9':"rgba(63, 55, 201, 0.5)", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                        //   navigation.navigate('ConfirmTransfer')
                          // console.log("yesss")


                      }}
                    />

                 
                   </View>




    

                   <View style={{marginTop:30}}></View>
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
