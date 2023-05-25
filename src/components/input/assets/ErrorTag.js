import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333zM8 5.333V8M8 10.666h.007"
        stroke="#EE0F1C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
