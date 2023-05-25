import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import UncheckedRadio from '../../assets/js/SquareUncheckedRadioBTN'
import CheckedRadio from '../../assets/js/SquareCheckedRadioBTN'
import FingerPrintIcon from '../../assets/js/FingerPrint'

export default function App({navigation}) {

  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          // onPress={() => navigation.goBack()}
        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Settings</Text>

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








// export default function App(props) {
//   // console.log(props.ref, 'props__');
//   const {navigation} = props

//   const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
//   const [rememberMe, setRememberMe] = useState(false)
//   const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

//   return (
//     <GlassBoardLayout style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
  
// <View style={{height:Dimensions.get("window").height, borderWidth:2, borderColor:'red' }}>

//     <TouchableOpacity style={{
//         overflow: Platform.OS === "ios" ? "visible" : "hidden",
//         zIndex: 2,
//         alignItems: "center",
//         justifyContent: "center",
//         elevation: 5,
//         position: "absolute",
//         bottom:150,
//         right:10
//     }}>
//     <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Home page</Text>

//     </TouchableOpacity>

//     <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >
//     <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
//         <Pressable
//           hitSlop={27}
//           // onPress={() => navigation.goBack()}
//         >
//           <GoBack />
//         </Pressable>

//         <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:33}}>Home page</Text>

//       </View>



//     </ScrollView>



// </View>




//        </GlassBoardLayout> 
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

