import * as React from "react"
import Svg, { Rect, Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={42}
    fill="none"
    {...props}
  >
    <Rect width={40.635} height={40.635} y={0.622} fill="#CFF1FF" rx={10} />
    <Mask
      id="a"
      width={24}
      height={25}
      x={8}
      y={9}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M32 9.244H8v24h24v-24Z" />
    </Mask>
    <G stroke="#3F37C9" strokeWidth={1.5} mask="url(#a)">
      <Path d="M14 12.994h12c1.79 0 3.25 1.46 3.25 3.25v10c0 1.79-1.46 3.25-3.25 3.25H14c-1.79 0-3.25-1.46-3.25-3.25v-10c0-1.79 1.46-3.25 3.25-3.25Z" />
      <Path d="M14 18.994h12c1.79 0 3.25 1.46 3.25 3.25v4c0 1.79-1.46 3.25-3.25 3.25H14c-1.79 0-3.25-1.46-3.25-3.25v-4c0-1.79 1.46-3.25 3.25-3.25Z" />
      <Path strokeDasharray="3 3" strokeLinecap="round" d="M22.75 16.244H17" />
      <Path strokeLinecap="round" d="M18.5 24.244h3" />
    </G>
  </Svg>
)
export default SvgComponent
