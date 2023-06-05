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

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Transfer to Cardin Account</Text>

      </View>

      <View style={{width:'100%', marginTop:21}}>
      <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:16, fontWeight:'600', marginBottom:11, }}>   Saved Beneficiary </Text>
      <ScrollView   horizontal={true} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' showsHorizontalScrollIndicator={false} >
        <View style={{
            width: 80.39,
            marginRight:6,
            height: 94.16,
            borderRadius:9,
            backgroundColor:'rgba(172, 93, 244, 0.19)',
            alignItems:'center',
            justifyContent:'center',
            padding:10,
        }}>
            <BeneficiaryIcon /> 

      <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:11, fontWeight:'600', textAlign:'center', marginTop:8, }}>Choose Beneficiary</Text>
        </View>

        <View style={{
            width: 80.39,
            marginRight:6,
            height: 94.16,
            borderRadius:9,
            backgroundColor:'#F8F8FA',
            alignItems:'center',
            justifyContent:'center',
            padding:10,

        }}>
            <UBAIcon  /> 
      <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:11, fontWeight:'600', textAlign:'center', marginTop:8, }}>Nnaemeka Ezenwaijiaku</Text>
        </View>

        <View style={{
            width: 80.39,
            marginRight:6,
            height: 94.16,
            borderRadius:9,
            backgroundColor:'#F8F8FA',
            alignItems:'center',
            justifyContent:'center',
            padding:10,

        }}>
            <AccessIcon  /> 
      <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:11, fontWeight:'600', textAlign:'center', marginTop:8, }}>Nnaemeka
Ezenwaijiaku</Text>
        </View>

        <View style={{
            width: 80.39,
            marginRight:6,
            height: 94.16,
            borderRadius:9,
            backgroundColor:'#F8F8FA',
            alignItems:'center',
            justifyContent:'center',
            padding:10,

        }}>
            <KudaIcon  /> 
      <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:11, fontWeight:'600', textAlign:'center', marginTop:8, }}>Nnaemeka
Ezenwaijiaku</Text>
        </View>

        <View style={{
            width: 80.39,
            marginRight:6,
            height: 94.16,
            borderRadius:9,
            backgroundColor:'#F8F8FA',
            alignItems:'center',
            justifyContent:'center',
            padding:10,

        }}>
            <WemaIcon  /> 
      <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:11, fontWeight:'600', textAlign:'center', marginTop:8, }}>Nnaemeka
Ezenwaijiaku</Text>
        </View>




    </ScrollView>
   

    </View>

      <View style={{width:'100%', marginTop:31, position:"relative"}}>

            <InputText
                // leftIcon={() => <IconFeather name={'user'} size={21} color={"#3F37C9"} /> }
      style={{leftStyle:{}, rightStyle:{}, inputFenceFocus:{}}}

                leftIconInputSpacing={15}
                label={"Amount"}
                placeholder={'N0.00'}
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
                label={"Bank"}
                placeholder={'Select Bank'}
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
    label={"Account Number"}
    placeholder={'0123456789'}
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
    label={"Add a Note"}
    placeholder={'What’s this for?'}
    returnInput={(value) => {
    // console.log(value);
    }}
/>  


</View>

<View style={{marginTop:77, width:'100%', }}>
                    <Button 
                        title="Next"
                        family="proximaNovaRegular"
                        style={{backgroundColor: true?'#3F37C9':"rgba(63, 55, 201, 0.5)",  borderColor:true?'#3F37C9':"rgba(63, 55, 201, 0.5)", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          navigation.navigate('ConfirmTransfer')
                          // console.log("yesss")


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
