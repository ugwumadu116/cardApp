import React from 'react'
import { TextContainer } from './styles'


const Text = (props) => {
  return (<TextContainer family={props.family} style={props.style}>{props.children}</TextContainer>)
}

export default Text
