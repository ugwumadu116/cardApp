import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, ImageBackground  } from 'react-native';
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
import ReceiptImg from '../../../assets/receiptImg.png'
import CardAdvert from '../../../assets/cardAdvert.png'
import CircleCards from '../../../assets/js/CircleCards'




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

    <View style={{marginTop:60,flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
    <ImageBackground
          style={{
            //   flex: 1,
              resizeMode: "cover",
            // paddingLeft:12,
            // paddingRight:12,
            // paddingTop:21,
            width:'100%',
            height:174,

          }}
          // imageStyle={{borderRadius:20,}}
          source={ReceiptImg}
        >
       
            <View style={{justifyContent:'center', alignItems:'center', marginTop:90}}>
              <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Payment is successful!</Text>
              <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:25, fontWeight:'400',marginTop:7}}>₦500.00</Text>


            </View>
  
          </ImageBackground>
     
      </View>

      <Pressable style={{marginTop:33, alignItems:'center'}}>
      <Text family="proximaNovaRegular"  style={{color:"#3F37C9", fontSize:15, lineHeight:20, fontWeight:'400',}}>View transaction details</Text>

      </Pressable>


      <View style={{marginTop:28,}}>
      <ImageBackground
          style={{
             height:91,
             borderRadius:16,
             justifyContent:'center',
             alignItems:'center',
             width:'100%',
             height:91,
              resizeMode: "center",
              flexDirection:'row', alignItems:'center', justifyContent:'space-between',
              // resizeMode: "cover",
            }}
          
             imageStyle={{borderRadius:16,    }}
          source={CardAdvert}
        >

<View style={{ flexDirection:'row', alignItems:'center', paddingLeft:15 }} >
            <CircleCards />
           <View style={{marginLeft:11}}>
           <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Get a Cardin Africa Debit</Text>
           <View style={{ flexDirection:'row', alignItems:'center', }} >

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:20, fontWeight:'400',}}>Card for</Text>
            <Text family="proximaNovaSemiBold"  style={{color:"#FFC300", fontSize:14, lineHeight:20, fontWeight:'400',}}>{" "}FREE!!!</Text>
          
           </View>
              
           </View>
            </View>

            <View style={{paddingRight:15}}>
            <Pressable
                
                >
              <IconFeather name={'x'} size={25} color={"#ffffff"} />
            </Pressable>

            </View>
           
        </ImageBackground>

        
      </View>



      <View style={{marginTop:51, alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                    <Button 
                      title="Share receipt"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                      //  setStage('stageThree')

                      }}
                    />
                    <Button 
                      title="Done"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                      //  setStage('stageFive')
                      navigation.navigate('home')


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
