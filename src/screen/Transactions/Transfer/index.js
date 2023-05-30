import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable,  } from 'react-native';
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

export default function App(props) {
    const {navigation} = props

React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(false)

  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout bgColor="#F8F8FA" style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:10,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Transfer</Text>

      </View>


      <Pressable
        onPress={() => navigation.navigate("TransferToBank")}
       style={{marginTop:11, backgroundColor:'#FFFFFF', borderRadius:10, justifyContent:'center', padding:12, paddingLeft:9}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <CircelBank />
    
<View style={{marginLeft:18,}}>
<Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>To Bank Account</Text>
<Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:12, lineHeight:20, fontWeight:'400',}}>Transfers to bank accounts are free</Text>

    </View>    
        </View>

        <View>
      
        <IconFeather name={'chevron-right'} size={22} color={"#B2B2B2"} />

        </View>
        </View>
          

      </Pressable>


      <Pressable 
        onPress={() => navigation.navigate("TransferToCardin")}
      style={{marginTop:11, backgroundColor:'#FFFFFF', borderRadius:10, justifyContent:'center', padding:12, paddingLeft:9}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <CircleCardin />
    
<View style={{marginLeft:18,}}>
<Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>To CardinAfrica Account</Text>
<Text family="proximaNovaRegular"  style={{color:"#B2B2B2", fontSize:12, lineHeight:20, fontWeight:'400',}}>Transfers to CardinAfrica accounts are free</Text>

    </View>    
        </View>

        <View>
      
        <IconFeather name={'chevron-right'} size={22} color={"#B2B2B2"} />

        </View>
        </View>
          

      </Pressable>


    


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
