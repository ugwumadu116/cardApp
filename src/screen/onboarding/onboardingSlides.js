import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Image, ScrollView, Animated } from 'react-native';
import Button from '../../components/button'
import GestureRecognizer from 'react-native-swipe-gestures'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Text from '../../components/Text'
import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
import SlideFour from './SlideFour'
import OnboardOne from './onb1'
import OnboardTwo from './onb2'
import OnboardThree from './onb3'
import OnboardFour from './onb4'
import WelcomeOnb from './WelcomeOnb'
import LogoWithTitle from './LogoWithTitle'


export default function App({navigation}) {

  const [stage, setStage] = useState('stageOne')
  const [bgColor, setBgColor] = useState('#FFFFFF')
  const fadeAnim = React.useRef(new Animated.Value(1)).current  

  const startAnim =() => {
    Animated.sequence([
      Animated.timing(
        fadeAnim,
        {
          toValue: 0.2,
          duration: 10,
          useNativeDriver:true,
        }
      ),
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver:true,
        }
      )
      
    ]).start()
    
  }

  useEffect(() => {
    if(stage ==="stageFive"){
      setBgColor("#3F37C9")

    }else{
      setBgColor("#FFFFFF")

    }

  },[stage])

  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeRight={ () => {
        // if(stage === 'stageOne'){
        //   navigation.navigate('Onboarding')
        // }
        if(stage === 'stageTwo'){
          setStage('stageOne')
          startAnim()
        }
        if(stage === 'stageThree'){
          setStage('stageTwo')
          startAnim()
        }
        if(stage === 'stageFour'){
          setStage('stageThree')
          startAnim()
        }
        if(stage === 'stageFive'){
          setStage('stageFour')
          startAnim()
        }
  
      } }
      onSwipeLeft={ () => {
        
        if(stage === 'stageOne'){
          setStage('stageTwo')
          startAnim()
        }
        if(stage === 'stageTwo'){
          setStage('stageThree')
          startAnim()
        }
        if(stage === 'stageThree'){
          setStage('stageFour')
          startAnim()
        }
        if(stage === 'stageFour'){
          setStage('stageFive')
          startAnim()
        }
        if(stage === 'stageFive'){
          navigation.navigate('Login')
        }
  
      } }
    >
        <GlassBoardLayout bgColor={bgColor} navigation={navigation}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >
          <View style={{flex:1, paddingLeft:20, paddingRight:20}}>
            {{
              stageOne:(
                <Animated.View  
                  style={{
               
                    opacity: fadeAnim,
                  }}
                >
                  <View style={{marginTop:'5%', alignItems:'flex-end'}}>
                      <Button 
                        title="Skip"
                        family="proximaNovaRegular"
                        style={{backgroundColor: 'transparent',  borderColor:"#FFC300", borderWidth:1, width:91, height:51, justifyContent:'center', alignItems:'center',}}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#000000", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                         setStage('stageFive')

                        }}
                      />
                  </View>
                  <View  style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
                    <OnboardOne />
                  </View>

                  <View style={{marginTop:10,}}>
                    <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',}}>Welcome</Text>
                    <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',marginBottom:32}}>to the easy life.</Text>
                  
                    <SlideOne />

                    </View>

                    <View style={{marginTop:'20%', alignItems:'flex-end'}}>
                      <Button 
                        title="Continue"
                        family="proximaNovaRegular"
                        style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:187, height:56, justifyContent:'center', alignItems:'center',}}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          setStage('stageTwo')
                        }}
                      />
                  </View>
                   
                </Animated.View>
              ),
              stageTwo:(
                <Animated.View  
                style={{
             
                  opacity: fadeAnim,
                }}
              >
                <View style={{marginTop:'5%', alignItems:'flex-end'}}>
                    <Button 
                      title="Skip"
                      family="proximaNovaRegular"
                      style={{backgroundColor: 'transparent',  borderColor:"#FFC300", borderWidth:1, width:91, height:51, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#000000", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageFive')

                      }}
                    />
                </View>
                <View  style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
                  <OnboardTwo />
                </View>

                <View style={{marginTop:10,}}>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',}}>We are here for you,</Text>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',marginBottom:32}}>anytime and every time.</Text>
                
                  <SlideTwo />

                  </View>

                  <View style={{marginTop:'20%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                    <Button 
                      title="Back"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageOne')

                      }}
                    />
                    <Button 
                      title="Continue"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageThree')

                      }}
                    />
                </View>
                 
              </Animated.View>
              ),
              stageThree:(
                <Animated.View  
                style={{
             
                  opacity: fadeAnim,
                }}
              >
                <View style={{marginTop:'5%', alignItems:'flex-end'}}>
                    <Button 
                      title="Skip"
                      family="proximaNovaRegular"
                      style={{backgroundColor: 'transparent',  borderColor:"#FFC300", borderWidth:1, width:91, height:51, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#000000", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageFive')

                      }}
                    />
                </View>
                <View  style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
                  <OnboardThree />
                </View>

                <View style={{marginTop:10,}}>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',}}>Your assets are secure</Text>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',marginBottom:32}}>with us, always.</Text>
                
                  <SlideThree />

                  </View>

                  <View style={{marginTop:'20%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                    <Button 
                      title="Back"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageTwo')

                      }}
                    />
                    <Button 
                      title="Continue"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageFour')

                      }}
                    />
                </View>

               
                 
              </Animated.View>
              ),
              stageFour:(
                <Animated.View  
                style={{
             
                  opacity: fadeAnim,
                  // backgroundColor:'red',
                }}
              >
                <View style={{marginTop:'5%', alignItems:'flex-end', }}>
                    <Button 
                      title="Skip"
                      family="proximaNovaRegular"
                      style={{backgroundColor: 'transparent',  borderColor:"#FFC300", borderWidth:1, width:91, height:51, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#000000", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageFive')

                      }}
                    />
                </View>
                <View  style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
                  <OnboardFour />
                </View>

                <View style={{marginTop:10,}}>
                  <Text family="proximaNovaSemiBold"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',}}>Cardin Africa in your pocket;</Text>
                  <Text family="proximaNovaRegular"  style={{color:'#000000', fontSize:25, lineHeight:35, fontWeight:'700',marginBottom:32}}>Enjoy full experience on the go</Text>
                
                  <SlideFour />

                  </View>

                  <View style={{marginTop:'20%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                    <Button 
                      title="Back"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFFFFF',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#3F37C9", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageThree')

                      }}
                    />
                    <Button 
                      title="Continue"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"45%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       setStage('stageFive')

                      }}
                    />
                </View>

                 
              </Animated.View>
              ),
              stageFive:(
                <Animated.View  
                style={{
             
                  opacity: fadeAnim,
                  // backgroundColor:'red',
                }}
              >
                <View style={{ alignItems:'center', justifyContent:'center' }}>
                   <View style={{marginTop:'25%',}}>
                    <LogoWithTitle />
                   </View>
                   <View style={{marginTop:'5%',}}>
                    <WelcomeOnb />
                   </View>
                   <View style={{marginTop:'10%', width:'100%'}}>
                   <Button 
                      title="Sign in"
                      family="proximaNovaRegular"
                      style={{backgroundColor: 'transparent',  borderColor:"#FFFFFF", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center',}}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                        navigation.navigate('Login')


                      }}
                    />
                    <Button 
                      title="Create account xx"
                      family="proximaNovaRegular"
                      style={{backgroundColor: '#FFC300',  borderColor:"#FFC300", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center',marginTop:8, }}
                      textStyle={{fontSize: 16, fontWeight: '400',  color:"#000000", lineHeight:20, textAlign:'center'}}
                      onPress={() => {
                       navigation.navigate('Signup')


                      }}
                    />

                  <Text family="proximaNovaRegular"  style={{color:'#FFFFFF', fontSize:14, fontWeight:'700', textAlign:'center', marginTop:16}}>By tapping “Create account”, you agree to the</Text>
                  <Text family="proximaNovaSemiBold"  style={{color:'#FFFFFF', fontSize:14,  fontWeight:'700',marginBottom:2, textAlign:'center'}}>Terms of Services and Privacy Policy</Text>
                
                   </View>
                </View>
               



                 
              </Animated.View>
              ),
            }[stage]}

          </View>


        </ScrollView>

        </GlassBoardLayout>
  

    </GestureRecognizer>
  );
}


