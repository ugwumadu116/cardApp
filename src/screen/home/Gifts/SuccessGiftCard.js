import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable,ImageBackground,TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, Image} from 'react-native';
import PhoneInput from '../../../components/input/PhoneInput'

import Text from '../../../components/Text'
import Button from '../../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GiftSuccessBG from '../../../assets/GiftCardsFolder/GiftSuccessBG.png'
import GiftSuccess from '../../../assets/GiftCardsFolder/GiftSuccess.png'
// import HomeNAV from '../../assets/HomeNAVSuccess.png'
import Share from '../../../assets/GiftCardsFolder/share'
import IconAntDesign from 'react-native-vector-icons/AntDesign'


import IconFeather from 'react-native-vector-icons/Feather'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { getStatusBarHeight } from 'react-native-status-bar-height'

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



export default function App(props) {
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

    const {navigation} = props
    let selectedCard = props?.route?.params?.cardIndex


    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    props.bottomBarRef.current?.setVisible(false)

      }, [navigation])

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <ImageBackground
    style={{
      //   flex: 1,
      //   resizeMode: "cover",
      flex: 1,
      flexDirection: 'column',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
       paddingLeft: '5%',
    paddingRight: '5%',
    

    }}
    imageStyle={{
    width: Math.round(Dimensions.get("window").width),
    height: Math.round(Dimensions.get("window").height),

    }}
    source={GiftSuccessBG}
  >
     <KeyboardAvoidingView style={{ flex: 1, marginTop: getStatusBarHeight() }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>

        <ImageBackground
          style={{
            //   flex: 1,
            // width: Math.round(Dimensions.get("window").width-10),
            // paddingLeft:12,
            // paddingRight:12,
            // paddingTop:21,
            width:'100%',
            height:534,
            // height:614,
            marginTop:70,
          }}
          imageStyle={{
            borderRadius:20,
            // resizeMode: "contain",
            resizeMode: "stretch",
            // 'cover', 'contain', 'stretch', 'repeat', 'center'

        }}
          source={GiftSuccess}
        >

<View style={{
            // backgroundColor:'red',
            // marginTop:1,
            position:'relative',
        
            }}>
                <View style={{
            // backgroundColor:'red',
            // marginTop:1,
            position:'absolute',
            width:"100%",
            top:0,


        
            }}>
                <TouchableOpacity 
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Homes' }]
                   })
                }}
                style={{width:"100%", 

                alignItems:'flex-end', 
                paddingRight:25,
                paddingTop:10,
                }}>
               <IconAntDesign name={'close'} size={31} color={"#ffffff"} /> 

                </TouchableOpacity>

               <View style={{marginTop:"70%", alignItems:'center'}}>
               <View style={{ borderRadius:20, height:133, borderColor:'#D9D9D9',borderWidth:1, width:"80%", padding:17, alignItems:'center', justifyContent:"center"}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{resizeMode: 'contain', }} source={gifts[selectedCard].logo} />  


                    <View style={{marginLeft:30}}> 
                    <Text
                family="proximaNovaSemiBold"
                style={{
                color: "#ffffff",
                fontSize: 20,
                lineHeight: 20,
                fontWeight: "400",
                }}
            >
               Gift Card Receipt
            </Text>
                    <Text
                family="proximaNovaRegular"
                style={{
                color: "#FFFFFF",
                fontSize: 14,
                lineHeight: 16,
                fontWeight: "400",
                marginTop:17
                }}
            >
                Total price
            </Text>
            <Text
                family="proximaNovaSemiBold"
                style={{
                color: "#FFFFFF",
                fontSize: 25,
                lineHeight: 25,
                fontWeight: "400",
                }}
            >
                $105.50
            </Text>
                    </View>

                </View>

                </View>
               </View>

               <TouchableOpacity
                 onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Homes' }]
                   })
                }}
                style={{marginTop:'10%', alignItems:'center', justifyContent:'center'}}>
                <Share />

               </TouchableOpacity>
               


                </View>
          
        </View>
            </ImageBackground>

        </ScrollView>

       
      </KeyboardAvoidingView>

   

    </ImageBackground>
 
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
