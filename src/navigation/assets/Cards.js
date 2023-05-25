import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M24 .91H0v24h24v-24Z" />
    </Mask>
    <G stroke={props.color} strokeWidth={2} mask="url(#a)">
      <Path d="M6 4.66h12c1.79 0 3.25 1.46 3.25 3.25v10c0 1.79-1.46 3.25-3.25 3.25H6c-1.79 0-3.25-1.46-3.25-3.25v-10c0-1.79 1.46-3.25 3.25-3.25Z" />
      <Path d="M6 10.66h12c1.79 0 3.25 1.46 3.25 3.25v4c0 1.79-1.46 3.25-3.25 3.25H6c-1.79 0-3.25-1.46-3.25-3.25v-4c0-1.79 1.46-3.25 3.25-3.25Z" />
      <Path strokeDasharray="3 3" strokeLinecap="round" d="M14.75 7.91H9" />
      <Path strokeLinecap="round" d="M10.5 15.91h3" />
    </G>
  </Svg>
)
export default SvgComponent
