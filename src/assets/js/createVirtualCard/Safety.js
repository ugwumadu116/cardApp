import * as React from "react"
import Svg, { Circle, Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={15.745} cy={16.2} r={15.496} fill="#CFF1FF" />
    <Mask
      id="a"
      width={21}
      height={21}
      x={5}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M25.745 6.2h-20v20h20v-20Z" />
    </Mask>
    <G stroke="#3F37C9" strokeWidth={1.5} mask="url(#a)">
      <Path d="M10.745 9.325h10a2.714 2.714 0 0 1 2.709 2.709v8.333a2.714 2.714 0 0 1-2.709 2.708h-10a2.714 2.714 0 0 1-2.708-2.708v-8.334a2.714 2.714 0 0 1 2.708-2.708Z" />
      <Path d="M10.745 14.325h10a2.714 2.714 0 0 1 2.709 2.709v3.333a2.714 2.714 0 0 1-2.709 2.708h-10a2.714 2.714 0 0 1-2.708-2.708v-3.334a2.714 2.714 0 0 1 2.708-2.708Z" />
      <Path
        strokeDasharray="3 3"
        strokeLinecap="round"
        d="M18.037 12.033h-4.792"
      />
      <Path strokeLinecap="round" d="M14.495 18.7h2.5" />
    </G>
  </Svg>
)
export default SvgComponent
