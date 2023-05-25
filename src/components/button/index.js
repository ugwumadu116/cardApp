import React from 'react'
import { Spinner } from '../Spinner'
import Text from '../Text'

import { Container } from './styles'

export default function Button(props) {
  const { title, buttonStyle, textStyle, Spin, activeOpacity, family = 'proximaNovaRegular' } = props
  return (
    <Container
      // activeOpacity={activeOpacity | 0.5}
      style={[buttonStyle]}
      {...props}>
      {Spin ? (
        <Spinner size="small" />
      ) : (
        <Text family={family} style={textStyle}>{title}</Text>
      )}
    </Container>
  )
}
