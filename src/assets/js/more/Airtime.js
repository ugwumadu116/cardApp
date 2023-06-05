import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={25}
      height={25}
      x={0}
      y={-1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M24.466-.434h-24v24h24v-24Z" />
    </Mask>
    <G stroke="#fff" strokeWidth={1.5} mask="url(#a)">
      <Path d="M18.779 5.566v12c0 1.79-1.46 3.25-3.25 3.25h-6.12c-1.79 0-3.25-1.46-3.25-3.25v-12c0-1.79 1.46-3.25 3.25-3.25h6.12c1.79 0 3.25 1.46 3.25 3.25Z" />
      <Path strokeLinecap="round" d="M10.966 4.316h3M12.466 18.686v.03" />
    </G>
  </Svg>
)
export default SvgComponent
