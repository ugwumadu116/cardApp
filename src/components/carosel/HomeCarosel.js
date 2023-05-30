import * as React from 'react'
import { StyleSheet, Animated, View, Image, Dimensions, Alert, TouchableOpacity, Modal, ImageBackground, Pressable } from 'react-native'
import PagerView from 'react-native-pager-view'
import Text from '../Text'
import IconFeather from 'react-native-vector-icons/Feather'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useStoreContext } from '../../store'


import * as Clipboard from 'expo-clipboard'
import Button from '../button'
import HomeCardOne from '../../assets/homecardOne.png'
import homeCardTwo from '../../assets/homeCardTwo.png'
 



export const HomeCarosel = ({ style = {}, data = [], navigation, name = 'name', currentPage }) => {
  const {
    dispatch,
    store: { activeApp, wallet, }
  } = useStoreContext()


  const [modalVisibleNotInterested, setModalVisibleNotInterested] = React.useState(false)



  const AnimatedPagerView = Animated.createAnimatedComponent(PagerView)
  // const [currentPage, setCurrentPage] = React.useState(0);
  const pagerViewRef = React.createRef(null)
  const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='
 

  React.useEffect(() => {
    if (data && data.length > 0) {
      requestAnimationFrame(() => {

        pagerViewRef.current?.setPage(currentPage)
      })

    }
  }, [currentPage])

 

  const renderSlides = (data) => {
    if (!data || data.length < 1) {
      return (
        <View style={[styles.card, style.card]} key="1">
          <Image style={[styles.image, style.image]} source={{ uri: base64Image }} />
        </View>
      )
    }

    return data.map((item, key) => {

      if (key === 0) {
        return (
          <ImageBackground
          style={{
            //   flex: 1,
            //   resizeMode: "cover",
            paddingLeft:12,
            paddingRight:12,
            paddingTop:21,

          }}
          imageStyle={{borderRadius:20,}}
          source={HomeCardOne}
          key={key+1}
        >
          <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
            <View>
            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400',}}>Total balance</Text>
          <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
             <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:26, fontWeight:'400', marginRight:15}}>₦0.00</Text>
          
            <IconFeather name={'eye'} size={20} color={"#FFFFFF"} />



            </View>


              
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginRight:15}}>Transaction History</Text>
            <IconFeather name={'chevron-right'} size={12} color={"#FFFFFF"} />



            </View>

          </View>

          <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between', marginTop:25}}>
            <TouchableOpacity   onPress={() => navigation.navigate("AddMoney")} style={{backgroundColor:'rgba(255, 255, 255, 0.2)', height:56, width:"30%", borderRadius:10, alignItems:'center', justifyContent:'center' }}>
            <IconOcticons name={'download'} size={20} color={"#FFFFFF"} />

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginTop:9}}>Add money</Text>
          


              
            </TouchableOpacity>

           
            <TouchableOpacity 
            onPress={() => navigation.navigate("Transfer")}
             style={{backgroundColor:'rgba(255, 255, 255, 0.2)', height:56, width:"30%", borderRadius:10, alignItems:'center', justifyContent:'center' }}>
            <IconOcticons name={'download'} size={20} color={"#FFFFFF"} />

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
          


              
            </TouchableOpacity>

           
            <TouchableOpacity  onPress={() => navigation.navigate("Withdraw")} style={{backgroundColor:'rgba(255, 255, 255, 0.2)', height:56, width:"30%", borderRadius:10, alignItems:'center', justifyContent:'center' }}>
            <IconOcticons name={'download'} size={20} color={"#FFFFFF"} />

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginTop:9}}>Withdraw</Text>
          


              
            </TouchableOpacity>

           

          

          </View>

  
          </ImageBackground>
        )
      } else {
        return (
          <ImageBackground
          style={{
            //   flex: 1,
            //   resizeMode: "cover",
            // width: Math.round(Dimensions.get("window").width -30)
            paddingLeft:12,
            paddingRight:12,
            paddingTop:21,
          }}
          imageStyle={{borderRadius:20,}}
          source={homeCardTwo}
          key={key+1}
        >
        <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
            <View>
            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400',}}>Total balance</Text>
          <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
             <Text family="proximaNovaSemiBold"  style={{color:"#FFFFFF", fontSize:25, lineHeight:26, fontWeight:'400', marginRight:15}}>₦0.00</Text>
          
            <IconFeather name={'eye'} size={20} color={"#FFFFFF"} />



            </View>


              
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginRight:15}}>Transaction History</Text>
            <IconFeather name={'chevron-right'} size={12} color={"#FFFFFF"} />



            </View>

          </View>

          <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between', marginTop:25}}>
            <Pressable style={{backgroundColor:'rgba(255, 255, 255, 0.2)', height:56, width:"30%", borderRadius:10, alignItems:'center', justifyContent:'center' }}>
            <IconOcticons name={'download'} size={20} color={"#FFFFFF"} />

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginTop:9}}>Add money</Text>
          


              
            </Pressable>

           
            <Pressable style={{backgroundColor:'rgba(255, 255, 255, 0.2)', height:56, width:"30%", borderRadius:10, alignItems:'center', justifyContent:'center' }}>
            <IconOcticons name={'download'} size={20} color={"#FFFFFF"} />

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
          


              
            </Pressable>

           
            <Pressable style={{backgroundColor:'rgba(255, 255, 255, 0.2)', height:56, width:"30%", borderRadius:10, alignItems:'center', justifyContent:'center' }}>
            <IconOcticons name={'download'} size={20} color={"#FFFFFF"} />

            <Text family="proximaNovaRegular"  style={{color:"#FFFFFF", fontSize:14, lineHeight:14, fontWeight:'400', marginTop:9}}>Withdraw</Text>
          


              
            </Pressable>

           

          

          </View>

          </ImageBackground>
        )
      }

    })
  }

  return (
    <View style={{ marginTop: 22 }}>
      <AnimatedPagerView
        ref={pagerViewRef}

        style={[styles.pagerView, style.pagerView]}
        initialPage={0}
        showPageIndicator={true}
        pageMargin={3}>
        {renderSlides(data)}
      </AnimatedPagerView>



    </View>

  )
}

const styles = StyleSheet.create({
  pagerView: {
    height: 169,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  }
})
