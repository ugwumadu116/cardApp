import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView, Pressable , Dimensions, TouchableOpacity} from 'react-native';
import PhoneInput from '../../components/input/PhoneInput'
import Input from '../../components/input'
import { InputSecureText } from '../../components/input/InputSecureText'
import { InputText } from '../../components/input/InputText'
import Text from '../../components/Text'
import {GlassBoardLayout} from  '../../components/layouts/GlassBoardLayout'
import Button from '../../components/button'
import Icon from 'react-native-vector-icons/AntDesign'
import GoBack from '../../assets/js/Goback'
import TuneIcon from '../../assets/js/Tune'
import TransactionDeposite from '../../assets/js/transactionDeposite'
import TransactionWithdraw from '../../assets/js/transactionWithdraw'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import IconFeather from 'react-native-vector-icons/Feather'
import IconEntypo from 'react-native-vector-icons/Entypo'



export default function App(props) {
  const {navigation} = props


  const [input, setInput] = useState({email:'', password:'', password_confirmation:'', f_name: '', l_name: '',phone_number:'',phone_code:'NG', address:'Nill' })
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState({email:'', password:'', password_confirmation:'',f_name:'', l_name:'', phone_number:'', activePickerValidation:'', address:''})

  return (
    <GlassBoardLayout  bgColor="#F8F8FA" style={{container:{paddingLeft:'5%', paddingRight:'5%'}}} navigation={navigation}>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' >

    <View style={{marginTop:23,flexDirection:'row', alignItems:'center'}}>
        <Pressable
          hitSlop={27}
          // onPress={() => navigation.goBack()}
          onPress={() => navigation.navigate(props?.route?.params?.goBack? props?.route?.params?.goBack:"home")}

        >
          <GoBack />
        </Pressable>

        <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400', marginLeft:25}}>Transactions</Text>

      </View>



      <View style={{marginTop:22, width:'100%', backgroundColor:'#FFFFFF', borderRadius:10, padding:0}}>
      <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', padding:10, marginBottom:10}}>
       <View>
       <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400',}}>Total balance</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:25, lineHeight:30, fontWeight:'400',marginTop:5, marginRight:20}}>₦8,364.35</Text>
        <IconFeather name={'eye'} size={21} color={"#000000"} />

        </View>

       </View>
       
        <View style={{flexDirection:'row', alignItems:'center'}}>
        {/* <Text family="proximaNovaRegular"  style={{color:"#000000", fontSize:14, lineHeight:30, fontWeight:'400',}}>Transaction History</Text> */}
        <IconEntypo name={'dots-three-vertical'} size={20} color={"#000000"} />

        </View>


        </View>
  <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 3,
            },
          ],
        }}
        width={Dimensions.get('window').width /1.18}
        height={267}
        withDots={true}
        withShadow={false}
        withOuterLines={false}
        withHorizontalLabels={true}
        withVerticalLabels={true}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          
          // backgroundGradientFrom: '#eff3ff',
          // backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `#3F37C9`,
      labelColor: (opacity = 1) => `#B2B2B2`,

          style: {
            // borderRadius: 16,
          padding:0,

          },
        }}
        style={{
          marginVertical: 0,
          // backgroundColor: 'red',

          // borderRadius: 16,
        }}
      />
</View>

<View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:17}}>
       <View>
       <Text family="proximaNovaSemiBold"  style={{color:"#000000", fontSize:16, lineHeight:30, fontWeight:'400',}}>Recent Transactions</Text>
       

       </View>
       
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TuneIcon style={{marginRight:27}}/>
        <IconFeather name={'search'} size={21} color={"#000000"} />


        </View>


        </View>

<View  style={{marginTop:10,}}/>

        <TouchableOpacity 
         onPress={() => {
  
            navigation.navigate('BillsReciept')
          }}
        style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:6, backgroundColor:'#FFFFFF', borderRadius:10, paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:14}}>
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


        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
  
          navigation.navigate('BillsReciept')
        }}
         style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:6, backgroundColor:'#FFFFFF', borderRadius:10, paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:14}}>
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


        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => {
  
          navigation.navigate('BillsReciept')
        }}
        style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', marginTop:6, backgroundColor:'#FFFFFF', borderRadius:10, paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:14}}>
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


        </TouchableOpacity>


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
