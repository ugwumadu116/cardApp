import * as React from 'react'
import { StyleSheet, TextInput, View, Pressable, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Text from '../Text'

const {height, width} = Dimensions.get('window') 
const aspectRatio = height/width

export const InputText = ({ style = {}, label, leftIconInputSpacing=45, leftIcon=()=>null, rightIcon=()=>null, secureTextEntry, preInput = '', returnInput, focused, placeholder = '', reference, testID, ...rest  }) => {
  

  const [input, setInput] = React.useState(preInput)
  const [focus, setFocus] = React.useState(false)
  const ref = React.useRef(null)
  const [textVisibility, setTextVisibility] = React.useState(false)

  style = style ?? {}
  return (
    <View style={{height:72, position:'relative' }}>
          {label && (
             <View style={[{...styles.labelBackground}, style.labelBackground]} >
             {label && <Text style={[{...styles.label,}, style.label, style.labelFocus]}>{label ?? null}</Text>}
           </View>
          )}

 

      <View style={[{...styles.inputFence,   backgroundColor: '#F8F8FA',}, style.inputFence, style.inputFenceFocus] }>
        <View style={[{...styles.labelBackgroundIcon}, style.leftStyle]} >
          {leftIcon && leftIcon()}
        </View>
        

        <View style={{flexDirection:'row',  justifyContent: 'space-around',minHeight:'100%', alignItems:'center',}}>
          <TextInput
            testID={testID}
            ref={reference ?? ref}
            secureTextEntry={false}
            style={[{...styles.input, color: "#000000",}, style.input,{paddingLeft:leftIcon?leftIconInputSpacing:10} ]}
            // onFocus={() => {setFocus(true); focused && focused(true)}}
            // onBlur={() => { setFocus(false); focused &&focused(false) }} 
            defaultValue={input}
            onChangeText={(value) => { setInput(value); returnInput(value) }}
            autoCapitalize='none'
            placeholder={placeholder}
            placeholderTextColor={"#000000"} 
            {...rest}

          />
          {rightIcon && <View style={[{minHeight:'100%',justifyContent:'center', marginTop:10, marginHorizontal: '2%'}, style.rightStyle]}>
            {rightIcon()}
             </View>  }
          {/* <View
            style={{ minHeight:'100%',justifyContent:'center', marginTop:6}}
          >
            {rightIcon && <View style={{ marginHorizontal: '2%'}}>{rightIcon()} </View>  }
          </View> */}
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
    // maxHeight: 72,
    // minHeight: 72,
    // paddingTop: 20,
    height: '100%',

    paddingTop: '1%',
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
  labelBackgroundIcon: {
    // paddingLeft: '1%',
    // marginBottom:5,
    // paddingRight: '3%',
    
    position: 'absolute',
    marginLeft: '2%',
    top:24,
       
  },
    
  inputFenceFocus: {
    // borderWidth: 1.5,
  },
 
})