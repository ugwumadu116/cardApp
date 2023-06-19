import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity, Image, Modal, Dimensions } from "react-native";
import PhoneInput from "../../components/input/PhoneInput";
import Input from "../../components/input";
import { InputSecureText } from "../../components/input/InputSecureText";
import { InputText } from "../../components/input/InputText";
import Text from "../../components/Text";
import { GlassBoardLayout } from "../../components/layouts/GlassBoardLayout";
import Button from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import GoBack from "../../assets/js/Goback";
import WatchIcon from "../../assets/js/Watch";
import UssdIcon from "../../assets/js/ussd";
import MtnIcon from "../../assets/js/networkProvider/Mtn";
import CheckedIcon from "../../assets/js/networkProvider/checked";
import NineMobile from "../../assets/js/networkProvider/NineMobile";
import AirtelMobile from "../../assets/js/networkProvider/Airtel";
import GloNigeria from "../../assets/gloNigeria.png";
import UserIcon from "../../assets/js/user";
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IdentityVerificationIcon from "../../assets/js/IdentityVerification";
import IconFeather from "react-native-vector-icons/Feather";
import * as Contacts from 'expo-contacts';


export default function App(props) {
    const {navigation} = props


    React.useLayoutEffect(() => {
        props.bottomBarRef.current?.setVisible(false)
    
      }, [props])
      const [contactList, setContactList] = React.useState([])
      const [cardError, setCardError] = React.useState(false)


      useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });
    
            if (data.length > 0) {
              setContactList(data)
              // const contact = data[0];
              // console.log(contact.name);
              // console.log(contact.lastName);
              // console.log(contact.phoneNumbers[0].number);
              // console.log(data);
            }
          }
        })();
      }, []);


  const [input, setInput] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    phone_code: "NG",
    address: "Nill",
  });
  const [activeNetwork, setActiveNetwork] = useState("airtel");
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    activePickerValidation: "",
    address: "",
  });

  // const filtercontacts = (e) => {
  //   const filtervalue = allcontactsfilter.filter((contact) => { 
       
  //     let lowercase = `${contact.firstName} ${contact.lastName}`.toLowerCase();
  //     let searchlowercase = e.toLowerCase();
  //     return lowercase.indexOf(searchlowercase) > -1;
  //   });
  //   setsearchcontact(setcontact(filtervalue)); 
  //   };

  return (
    <GlassBoardLayout
      bgColor="#FFFFFF"
      style={{ container: { paddingLeft: "5%", paddingRight: "5%" } }}
      navigation={navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{ marginTop: 23, flexDirection: "row", alignItems: "center" }}
        >
          <Pressable
            hitSlop={27}
            onPress={() => navigation.goBack()}
          >
            <GoBack />
          </Pressable>

          <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 16,
              lineHeight: 30,
              fontWeight: "400",
              marginLeft: 25,
            }}
          >
            Airtime
          </Text>
        </View>

        <View style={{marginTop:21}}>
        <Text
            family="proximaNovaSemiBold"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 16,
              fontWeight: "400",
            }}
          >
            Saved Beneficiary 
          </Text>

        
        <ScrollView style={{marginTop:12}}   horizontal={true} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' showsHorizontalScrollIndicator={false} >
            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#FC64B7', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
            //   lineHeight: 16,
              fontWeight: "400",
            }}
          >
            N 
          </Text>
            </View>

            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#AC5DF4', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "400",
            }}
          >
            S
          </Text>
            </View>

            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#4ECCE7', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
            //   lineHeight: 16,
              fontWeight: "400",
            }}
          >
            F
          </Text>
            </View>

            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#5ABA71', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
            //   lineHeight: 16,
              fontWeight: "400",
            }}
          >
            W
          </Text>
            </View>

            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#FC64B7', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
            //   lineHeight: 16,
              fontWeight: "400",
            }}
          >
            P
          </Text>
            </View>

            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#AC5DF4', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
            //   lineHeight: 16,
              fontWeight: "400",
            }}
          >
            K
          </Text>
            </View>

            <View style={{width:41, height:41, justifyContent:'center', alignItems:'center', backgroundColor:'#4ECCE7', borderRadius:51, marginRight:16}}>
            <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 20,
            //   lineHeight: 16,
              fontWeight: "400",
            }}
          >
            W
          </Text>
            </View>

        </ScrollView>
        </View>


        <View style={{marginTop:20, flexDirection:'row', justifyContent:"space-between", width:'100%'}}>

        <View style={{width:'75%'}}>
        <InputText
      leftIconInputSpacing={40}
      keyboardType={'numeric'}
    //   label={"Amount"}
      style={{leftStyle:{top:16}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#F8F8FA', height:60, padding:0, paddingBottom:30 }}}
              leftIcon={() => <Text 
                    family="proximaNovaSemiBold"

                  style={{
                color: "#BABABA",
                fontSize: 14,
                lineHeight: 24,
                fontWeight: "400",
              }}>+123 |</Text>}
            //   rightIcon={() => <TouchableOpacity onPress={() => {console.log("get OTP")}}><Text> <IconFontisto name={'close'} size={17} color={"#3F37C9"} /> </Text></TouchableOpacity>}
              placeholder={'7015948443'}
              returnInput={(value) => {
              // console.log(value);
              }}
            />  

</View>

            <TouchableOpacity 
            onPress={async()=>{
              setCardError(true)

            }}
            style={{backgroundColor:'#9A4AFF', justifyContent:'center', alignItems:'center', borderRadius:10, marginLeft:11, width:60,height:60}}>
              <UserIcon />
            </TouchableOpacity>

        </View>


        <View style={{marginTop:21}}>
        <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 16,
              fontWeight: "400",
            }}
          >
            Select a network provider
          </Text>

        
        <ScrollView style={{marginTop:12}}   horizontal={true} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' showsHorizontalScrollIndicator={false} >
           
            <Pressable 
            onPress={() => {
                setActiveNetwork("airtel")
            }}
             style={{width:91, height:91, justifyContent:'center', alignItems:'center', backgroundColor:activeNetwork==="airtel"? "#CFF1FF": "#F8F8FA", borderRadius:9, marginRight:16, position:'relative', borderWidth:1, borderColor: activeNetwork==="airtel"? "#3F37C9": "#F8F8FA"}}>
            <AirtelMobile />
            {
                activeNetwork==="airtel" && (
            <CheckedIcon style={{position:'absolute', bottom:-2, right:-2}}/>

                )
            }
        
            </Pressable>


            <Pressable 
            onPress={() => {
                setActiveNetwork("mtn")
            }}
             style={{width:91, height:91, justifyContent:'center', alignItems:'center', backgroundColor:activeNetwork==="mtn"? "#CFF1FF": "#F8F8FA", borderRadius:9, marginRight:16, position:'relative', borderWidth:1, borderColor: activeNetwork==="mtn"? "#3F37C9": "#F8F8FA"}}>
            <MtnIcon />
            {
                activeNetwork==="mtn" && (
            <CheckedIcon style={{position:'absolute', bottom:-2, right:-2}}/>

                )
            }
        
            </Pressable>

            <Pressable 
            onPress={() => {
                setActiveNetwork("glo")
            }}
             style={{width:91, height:91, justifyContent:'center', alignItems:'center', backgroundColor:activeNetwork==="glo"? "#CFF1FF": "#F8F8FA", borderRadius:9, marginRight:16, position:'relative', borderWidth:1, borderColor: activeNetwork==="glo"? "#3F37C9": "#F8F8FA"}}>
            <Image style={{resizeMode: 'contain', }} source={GloNigeria} />  

            {
                activeNetwork==="glo" && (
            <CheckedIcon style={{position:'absolute', bottom:-2, right:-2}}/>

                )
            }
        
            </Pressable>

            <Pressable 
            onPress={() => {
                setActiveNetwork("9mobile")
            }}
             style={{width:91, height:91, justifyContent:'center', alignItems:'center', backgroundColor:activeNetwork==="9mobile"? "#CFF1FF": "#F8F8FA", borderRadius:9, marginRight:16, position:'relative', borderWidth:1, borderColor: activeNetwork==="9mobile"? "#3F37C9": "#F8F8FA"}}>
            <NineMobile />
            {
                activeNetwork==="9mobile" && (
            <CheckedIcon style={{position:'absolute', bottom:-2, right:-2}}/>

                )
            }
        
            </Pressable>



           

          

         

        </ScrollView>
        </View>


        <View style={{marginTop:20}}>

<View style={{width:'100%'}}>
<InputText
leftIconInputSpacing={10}
keyboardType={'numeric'}
  label={"Enter amount"}
style={{leftStyle:{}, rightStyle:{marginRight:"5%"}, inputFenceFocus:{backgroundColor:'#F8F8FA', height:60,padding:0, paddingBottom:30}}}
     
      placeholder={'₦500'}
      returnInput={(value) => {
      // console.log(value);
      }}
    />  

</View>

<View style={{marginTop:41}}>
<Button 
                        title="Pay"
                        family="proximaNovaRegular"
                        style={{backgroundColor: '#3F37C9',  borderColor:"#3F37C9", borderWidth:1, width:"100%", height:56, justifyContent:'center', alignItems:'center', }}
                        textStyle={{fontSize: 16, fontWeight: '400',  color:"#FFFFFF", lineHeight:20, textAlign:'center'}}
                        onPress={() => {
                          navigation.navigate('PaymentCheckout')
    //   registeredBoundActionCreator(dispatch)



                      }}
                    />
</View>

 

</View>



<View style={{ marginTop: 19 }} />
<Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 14,
              lineHeight: 16,
              fontWeight: "400",
            }}
          >
            Airtime service 
          </Text>

<View
  style={{
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#F8F8FA",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 9,
  }}
>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <WatchIcon />
    <View style={{ marginLeft: 18 }}>
      <Text
        family="proximaNovaSemiBold"
        style={{
          color: "#000000",
          fontSize: 14,
          lineHeight: 20,
          fontWeight: "400",
        }}
      >
       Schedule Airtime Top-up
      </Text>
      <Text
        family="proximaNovaLight"
        style={{
          color: "#B2B2B2",
          fontSize: 12,
          lineHeight: 14,
          fontWeight: "400",
        }}
      >
        Avoid running out of airtime
      </Text>
    </View>
  </View>

  <View style={{}}>
    <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
  </View>
</View>

    

<View
  style={{
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#F8F8FA",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 9,
  }}
>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <UssdIcon />
    <View style={{ marginLeft: 18 }}>
      <Text
        family="proximaNovaSemiBold"
        style={{
          color: "#000000",
          fontSize: 14,
          lineHeight: 20,
          fontWeight: "400",
        }}
      >
       USSD enquiry
      </Text>
      <Text
        family="proximaNovaLight"
        style={{
          color: "#B2B2B2",
          fontSize: 12,
          lineHeight: 14,
          fontWeight: "400",
        }}
      >
        Check phone balance and more
      </Text>
    </View>
  </View>

  <View style={{}}>
    <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
  </View>
</View>


<View style={{ marginTop: 30 }} />

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
          <View style={{
            margin: 20,
            // minHeight:320,
            backgroundColor: "#FFFFFF",
            borderRadius: 15,
              
            // width: Math.round(Dimensions.get('window').width - 30),
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.25,
            shadowRadius: 14,
            elevation: 5,
            padding: 10,
            height:'100%',
            width:'100%',
          }}>

            <View style={{
              // justifyContent: 'center', 
              // flexDirection: 'column',
              // alignItems: 'center', 
              // paddingLeft: 31,
              // paddingRight: 32,
              marginTop: 23}}>
                   <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

<View
          style={{ marginTop: 23, flexDirection: "row", alignItems: "center" }}
        >
          <Pressable
            hitSlop={27}
            onPress={() => setCardError(false)}
          >
            <GoBack />
          </Pressable>

          <Text
            family="proximaNovaRegular"
            style={{
              color: "#000000",
              fontSize: 16,
              lineHeight: 30,
              fontWeight: "400",
              marginLeft: 25,
            }}
          >
            Contacts
          </Text>
        </View>

        {
          contactList.map((itm, i) => (
            <TouchableOpacity
            onPress={() => {
              setCardError(false)
            }}
            key={i}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#F8F8FA",
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 9,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{width:31, height:31, backgroundColor:'#CFF1FF',  borderRadius:31, alignItems:'center', justifyContent:'center'}}>
              <Text
                  family="proximaNovaSemiBold"
                  style={{
                    color: "#3F37C9",
                    fontSize: 14,
                    lineHeight: 20,
                    fontWeight: "400",
                  }}
                >
                {itm.name.slice(0,1)}
                </Text>
              </View>
              <View style={{ marginLeft: 18 }}>
                <Text
                  family="proximaNovaSemiBold"
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    lineHeight: 20,
                    fontWeight: "400",
                  }}
                >
                {itm.name}
                </Text>
                {
                  itm.phoneNumbers?(
                    <Text
                    family="proximaNovaLight"
                    style={{
                      color: "#B2B2B2",
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: "400",
                    }}
                  >
                    {itm.phoneNumbers[0]?.number || "Phone number"}
                    {/* number */}
                  </Text>
                  ):null
                }
              </View>
            </View>
          
            <View style={{}}>
              <IconFeather name={"chevron-right"} size={22} color={"#BABABA"} />
            </View>
          </TouchableOpacity>
          ))
        }


      




      </ScrollView>



            </View>
            

          </View>
        </View>
      </Modal>
    </GlassBoardLayout>
  );
}


