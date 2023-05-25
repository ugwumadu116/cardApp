import * as React from 'react'
import { StyleSheet, TextInput, View, Pressable, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Text from '../Text'

const {height, width} = Dimensions.get('window') 
const aspectRatio = height/width

export const InputSecureText = ({ style = {}, label, secureTextEntry, preInput = '', returnInput, focused, placeholder = '', reference, testID, ...rest  }) => {
  

  const [input, setInput] = React.useState(preInput)
  const [focus, setFocus] = React.useState(false)
  const ref = React.useRef(null)
  const [textVisibility, setTextVisibility] = React.useState(false)

  style = style ?? {}
  return (
    <View style={{height:72}}>
          {label && (
             <View style={[{...styles.labelBackground}, style.labelBackground]} >
             {label && <Text style={[{...styles.label,}, style.label, style.labelFocus]}>{label ?? null}</Text>}
           </View>
          )}

 

      <View style={[{...styles.inputFence,   backgroundColor: '#F8F8FA',}, style.inputFence, style.inputFenceFocus] }>
        {/* <View style={[{...styles.labelBackground}, style.labelBackground]} >
          {label && <Text style={[{...styles.label,}, style.label, style.labelFocus]}>{label ?? null}</Text>}
        </View> */}

        <View style={{flexDirection:'row',  justifyContent: 'space-around',minHeight:'100%', alignItems:'center',}}>
          <TextInput
            testID={testID}
            ref={reference ?? ref}
            secureTextEntry={!textVisibility}
            style={[{...styles.input, color: "#000000",}, style.input,{paddingLeft:10} ]}
            // onFocus={() => {setFocus(true); focused && focused(true)}}
            // onBlur={() => { setFocus(false); focused &&focused(false) }}
            defaultValue={input}
            onChangeText={(value) => { setInput(value); returnInput(value) }}
            autoCapitalize='none'
            placeholder={placeholder}
            placeholderTextColor={"#000000"} 
            {...rest}

          />
          <Pressable
            onPress={() => setTextVisibility(!textVisibility)}
            style={{ minHeight:'100%',justifyContent:'center', marginTop:6}}
          >
            {textVisibility ?
              <Icon name={'eye-off'} style={{ marginHorizontal: '2%'}} size={21} color={"#000000"} />
              :
              <Icon name={'eye'} style={{ marginHorizontal: '2%'}} size={21} color={"#000000"} />
            }
          </Pressable>
        </View>
        <View style={{height:'50%'}} />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  inputFence: {
    flexDirection: 'column',
    // marginLeft: '8%',
    // marginRight: '8%',
    justifyContent: 'space-around',
    // alignItems:'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#3F37C9',
    // maxHeight: 102,
    // minHeight: 72,
    // height: 72,
    height: '100%',
    // paddingTop: 20,
    paddingTop: '1%'
  },
  input: {
    width: '90%',
    fontSize: 14,
    fontFamily: 'proximaNovaRegular',
    // lineHeight: 16.98,
    height: '100%',
    fontWeight: '400',
    paddingTop: 10,
    paddingLeft: '3%',
    paddingRight: '3%',
    // borderWidth:1,
    // borderColor:'red',

  },
  label: {

    fontSize: 14,
    lineHeight: 20,
    // alignSelf: 'center',
    fontWeight: '400',
    fontFamily: 'proximaNovaSemiBold',
    color:'#000000',
  },
  labelBackground: {
    paddingLeft: '1%',
    marginBottom:5,
    // paddingRight: '3%',
    // position: 'absolute',
    // marginLeft: '4%',
       
  },
    
  inputFenceFocus: {
    // borderWidth: 1.5,
  },
  marginRight: {
    // alignSelf:'center',

    // paddingTop:'5%',
    marginRight: '5%'
  },
})