import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable, Dimensions, TouchableOpacity,Image, ImageBackground , Modal} from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import {BottomBoardLayout} from  '../../components/layouts/BottomBoardLayout'
import Button from '../../components/button'
import IconFeather from 'react-native-vector-icons/Feather'
import TrophyIcon from '../../assets/js/Trophy'
import SmallTrophy from '../../assets/js/SmallTrophy'
import CircleCards from '../../assets/js/CircleCards'
import FaceID from '../../assets/js/FaceID'
import Airtime from '../../assets/js/Airtime'
import Data from '../../assets/js/Data'
import CableTv from '../../assets/js/CableTv'
import VirtualCards from '../../assets/js/VirtualCards'
import Bills from '../../assets/js/Bills'
import MoreIcon from '../../assets/js/More'
import GiftCards from '../../assets/js/GiftCards'
import GiftCircleBox from '../../assets/js/GiftCircleBox'
import Betting from '../../assets/js/Betting'
import CopyIcon from '../../assets/js/CopyIcon'
import Chat from '../../assets/js/Chat'
import CloseGiftCard from '../../assets/js/CloseGiftCard'
import CircleUpload from '../../assets/js/CircleUpload'
import CardAdvert from '../../assets/cardAdvert.png'
import GiftCardImg from '../../assets/GiftCardImg.png'
import { HomeCarosel } from '../../components/carosel/HomeVerticalscrol'


import ImgAirtime from '../../assets/svgToImg/airtime.png'
import ImgBetting from '../../assets/svgToImg/Betting.png'
import ImgBills from '../../assets/svgToImg/Bills.png'
import ImgcableTv from '../../assets/svgToImg/cableTv.png'
import ImgData from '../../assets/svgToImg/Data.png'
import ImgGcard from '../../assets/svgToImg/Gcard.png'
import Imgmore from '../../assets/svgToImg/more.png'
import ImgVcard from '../../assets/svgToImg/Vcard.png'




export default function App(props) {
  const {navigation} = props


  React.useLayoutEffect(() => {
    props.bottomBarRef.current?.setVisible(true)
  }, [props])

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})
  const [cardError, setCardError] = useState(false)


  return (
    <BottomBoardLayout bgColor="#F8F8FA" style={{container:{paddingLeft:'5%', paddingRight:'5%', }}} navigation={navigation}>
  
<View style={{height:Dimensions.get("window").height, }}>

    <TouchableOpacity
      onPress={() => {
        navigation.setParams({ goBack: "home" })
        navigation.navigate('CustomerService')
        
     
    }}
    
    
     style={{
        overflow: Platform.OS === "ios" ? "visible" : "hidden",
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        position: "absolute",
        bottom:150,
        right:-5
    }}>
      <Chat/>
    </TouchableOpacity>

    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >
    <View style={{marginTop:10,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

      <View style={{flexDirection:'row', alignItems:'center'}}>
            <Pressable
                  style={{
                    // borderRadius: 17,
                    // borderWidth: 2,
                    // borderColor: "#8DBBFF",
                    // flexDirection: 'row',
                    // position: 'relative',

                    // width: 55, height: 55, borderRadius: 55
                  }}
                >
                   {/* <Image source={{ uri: true? 'https://i.stack.imgur.com/l60Hf.png' : 'https://i.pinimg.com/236x/66/25/0e/66250e5096b2e756b1c8184676ab46e9--online-games-red-peppers.jpg' }} style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 55

                      }} resizeMode={'cover'}></Image> */}
                      <FaceID />

                  </Pressable>
                  
                  <View style={{marginLeft:16}}>
                    <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:13, fontWeight:'400',}}>Hi, Cajethan</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <Text family="proximaNovaLight"  style={{color:"#000000", fontSize:14, lineHeight:13, fontWeight:'400',marginRight:8}}>$3P3ERT</Text>
                    <CopyIcon />

                    </View>
                  


                  </View>

      </View>
      
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <TrophyIcon />
        <View style={{ backgroundColor:"#EBF2FF",  padding:3, borderRadius:3, marginRight:25, marginLeft:5}}>
        <Text family="proximaNovaRegular" 
         style={{color:"#3F37C9", fontSize:12,
        
         lineHeight:13, fontWeight:'400',}}>Tier 2</Text>

        </View>
      

            <Pressable
                
                >
              <IconFeather name={'bell'} size={25} color={"#000000"} />
            </Pressable>

      </View>
      

             
      
      </View>

      <View>
      <HomeCarosel navigation={navigation} name={`Joel`} currentPage={currentPage} data={[1, 2]} />

      </View>

       <View style={{marginTop:17,}}>
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

      <View style={{marginTop:22,}}>
      <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Quick links</Text>
          

      </View>

      <View style={{marginTop:9, backgroundColor:'#FFFFFF', borderRadius:15, paddingHorizontal:18, paddingVertical:22}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <TouchableOpacity 
          onPress={() => {
            navigation.navigate('Airtime')
          }}
           style={{width:58, alignItems:'center', justifyContent:'center'}}>
          <Image style={{resizeMode: 'contain', }} source={ImgAirtime} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Airtime</Text>
            
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Data')
            }}
           style={{width:58, alignItems:'center', justifyContent:'center'}}>
           <Image style={{resizeMode: 'contain', }} source={ImgData} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Data</Text>
            
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => {
            navigation.navigate('Betting')
          }}
           style={{width:58, alignItems:'center', justifyContent:'center'}}>
          <Image style={{resizeMode: 'contain', }} source={ImgBetting} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Betting</Text>
            
            
          </TouchableOpacity>

          <TouchableOpacity 
           onPress={() => {
            navigation.navigate('CableTv')
          }}
          style={{width:58, alignItems:'center', justifyContent:'center'}}>
          <Image style={{resizeMode: 'contain', }} source={ImgcableTv} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Cable TV</Text>
            
            
          </TouchableOpacity>
          

          
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:26}}>
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('VirtualCard')
        }}
         style={{width:58, alignItems:'center', justifyContent:'center'}}>
        <Image style={{resizeMode: 'contain', }} source={ImgVcard} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Virtual card </Text>
    
          </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
          setCardError(true)
        }}
         style={{width:58, alignItems:'center', justifyContent:'center'}}>
        {/* <GiftCards /> */}
        <Image style={{resizeMode: 'contain', }} source={ImgGcard} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Gift cards </Text>
    
    
          </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
          navigation.navigate('Bills')
        }}
         style={{width:58, alignItems:'center', justifyContent:'center'}}>
         <Image style={{resizeMode: 'contain', }} source={ImgBills} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>Bills </Text>
    
    
          </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => {
          navigation.navigate('More')
        }}
         style={{width:58, alignItems:'center', justifyContent:'center'}}>
        {/* <MoreIcon /> */}
        <Image style={{resizeMode: 'contain', }} source={ImgBills} />  
          <Text family="proximaNovaRegular" 
         style={{color:"#000000", fontSize:12, marginTop:10,
         lineHeight:13, fontWeight:'400',}}>More </Text>
    
    
          </TouchableOpacity>
        </View>
          

      </View>


      <Pressable
       onPress={() => {

        navigation.setParams({ goBack: "home" })
        navigation.navigate('Refer')
     
    }}
       style={{marginTop:14, backgroundColor:'#FFFFFF', borderRadius:15, justifyContent:'center', padding:12}}>
     <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <GiftCircleBox />
    
            <View style={{marginLeft:12}}>
            <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400',}}>Refer to earn ₦800</Text>
              <Text family="proximaNovaSemiBold"  style={{color:"rgba(0, 0, 0, 0.5)", fontSize:14, lineHeight:20, fontWeight:'400',}}>Get N500 bonus for each new user you invite</Text>

            </View>
        </View>

        <View>
      
        <IconFeather name={'chevron-right'} size={22} color={"#BABABA"} />

        </View>
        </View>
          

      </Pressable>

      <View style={{marginTop:11, backgroundColor:'#FFC300', borderRadius:15, justifyContent:'center', padding:12}}>
     <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <CircleUpload />
    
            <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:14, lineHeight:20, fontWeight:'400', marginLeft:12, marginRight:3}}>Upgrade to Tier 3</Text>
          <SmallTrophy />
        </View>

        <View>
      
        <IconFeather name={'chevron-right'} size={22} color={"#000000"} />

        </View>
        </View>
          

      </View>

      <View  style={{marginTop:120}}/>
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



</View>




       </BottomBoardLayout> 
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



