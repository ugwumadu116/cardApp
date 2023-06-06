import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, ImageBackground } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import Visa from '../../assets/js/Visa'
import VirCard from '../../assets/VirCard.png'
import TuneIcon from '../../assets/js/Tune'
import ManageIcon from '../../assets/js/Manage'
import WidthdrawIcon from '../../assets/js/Widthdraw'
import FundIcon from '../../assets/js/FundIcon'
import DisableIcon from '../../assets/js/Disable'
import TransactionDeposite from '../../assets/js/transactionDeposite'
import TransactionWithdraw from '../../assets/js/transactionWithdraw'
import IconFeather from 'react-native-vector-icons/Feather'


export default function App(props) {
  const {navigation} = props

  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(true)
  }, [props])


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout bgColor="#F8F8FA"  style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:25}}>Virtual Card</Text>

      </View>


      <ImageBackground
          style={{
             borderRadius:14,
            //  justifyContent:'center',
            //  alignItems:'center',
             width:'100%',
             height:215,
             marginTop:10,
              // flexDirection:'row', alignItems:'center', justifyContent:'space-between',
            }}
          
             
              imageStyle={{borderRadius:14, resizeMode: "contain",    }}
          source={VirCard}
        >

            <View style={{position:'relative'}}>

            <View style={{ width:"100%", marginTop:86, paddingHorizontal:16 }}>
<Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>$96.95</Text>
<Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:26, fontWeight:'400',}}>***************5093</Text>


</View>

<View style={{ flexDirection:'row', alignItems:'flex-end', width:'100%', justifyContent:'space-between',  paddingHorizontal:16 , marginTop:38, }} >
<Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Cardin Africa Virtual Card</Text>
<Visa />
 </View>

            </View>
         
           
        </ImageBackground>

        <View style={{marginTop:20,
           borderRadius:20, backgroundColor:'#FFFFFF', paddingVertical:21, width:'100%', justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
          <Pressable style={{alignItems:'center'}}>
            <ManageIcon />
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400', marginTop:10}}>Manage</Text>

          </Pressable>

          <Pressable style={{alignItems:'center'}}>
            <WidthdrawIcon />
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400', marginTop:10}}>Withdraw</Text>

          </Pressable>

          <Pressable style={{alignItems:'center'}}>
            <FundIcon />
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400', marginTop:10}}>Fund</Text>

          </Pressable>

          <Pressable style={{alignItems:'center'}}>
            <DisableIcon />
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400', marginTop:10}}>Disable</Text>

          </Pressable>


      

        </View>


      <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:30}}>
       <View>
       <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400',}}>Recent Transactions</Text>
       

       </View>
       
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TuneIcon style={{marginRight:27}}/>
        <IconFeather name={'search'} size={21} color={"#000000"} />


        </View>


        </View>



<View  style={{marginTop:10,}}/>

        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:6, backgroundColor:'#FFFFFF', borderRadius:10, paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:14}}>
       <View style={{flexDirection:'row', alignItems:'center'}}>
        <TransactionWithdraw />
        <View style={{marginLeft:8}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20,  fontWeight:'400',}}>TNF-CHRISTOPHER, HARRY VICTOR/CASH</Text>
        <Text family="proximaNovaLight"  style={{color:"#000000", fontSize:14,lineHeight:20,   fontWeight:'400',}}>04/11/2022</Text>

        </View>

       </View>
       
        <View style={{}}>
        <Text family="proximaNovaRegular"  style={{color:"#F60A0B", fontSize:14, lineHeight:20,   fontWeight:'400',}}>-₦2,100.00</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20,   fontWeight:'400',}}>N1,460.27</Text>

        </View>


        </View>

        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:6, backgroundColor:'#FFFFFF', borderRadius:10, paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:14}}>
       <View style={{flexDirection:'row', alignItems:'center'}}>
        <TransactionDeposite />
        <View style={{marginLeft:8}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20,  fontWeight:'400',}}>TNF-CHRISTOPHER, HARRY VICTOR/CASH</Text>
        <Text family="proximaNovaLight"  style={{color:"#000000", fontSize:14,lineHeight:20,   fontWeight:'400',}}>04/11/2022</Text>

        </View>

       </View>
       
        <View style={{}}>
        <Text family="proximaNovaRegular"  style={{color:"#3F37C9", fontSize:14, lineHeight:20,   fontWeight:'400',}}>-₦2,100.00</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20,   fontWeight:'400',}}>N1,460.27</Text>

        </View>


        </View>

        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:6, backgroundColor:'#FFFFFF', borderRadius:10, paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:14}}>
       <View style={{flexDirection:'row', alignItems:'center'}}>
        <TransactionWithdraw />
        <View style={{marginLeft:8}}>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20,  fontWeight:'400',}}>TNF-CHRISTOPHER, HARRY VICTOR/CASH</Text>
        <Text family="proximaNovaLight"  style={{color:"#000000", fontSize:14,lineHeight:20,   fontWeight:'400',}}>04/11/2022</Text>

        </View>

       </View>
       
        <View style={{}}>
        <Text family="proximaNovaRegular"  style={{color:"#F60A0B", fontSize:14, lineHeight:20,   fontWeight:'400',}}>-₦2,100.00</Text>
        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:20,   fontWeight:'400',}}>N1,460.27</Text>

        </View>


        </View>


        <View  style={{marginTop:120}}/>
      <View  style={{marginTop:30}}/>

      
          


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
