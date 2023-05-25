import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G strokeLinecap="round" clipPath="url(#a)">
      <Path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={2.29}
        d="M13.057 13.999 9.134 18.48 5.195 14"
      />
      <Path stroke="#fff" strokeWidth={2.29} d="M9.134 18.122V6.368" />
      <Path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={2.29}
        d="m13.057 10.85 3.939-4.482 3.923 4.482"
      />
      <Path stroke="#fff" strokeWidth={2.29} d="M16.996 6.712v11.754" />
      <Path
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.057 13.999 9.134 18.48 5.195 14"
      />
      <Path stroke={props.color} strokeWidth={2} d="M9.134 18.122V6.368" />
      <Path
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.057 10.85 3.939-4.482 3.923 4.482"
      />
      <Path stroke={props.color} strokeWidth={2} d="M16.996 6.712v11.754" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.961.41h23.51v24H.961z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
