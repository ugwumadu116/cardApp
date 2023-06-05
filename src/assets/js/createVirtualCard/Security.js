import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={15.745} cy={16.185} r={15.496} fill="#CFF1FF" />
    <G clipPath="url(#a)">
      <Path
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.745 24.518s6.667-3.333 6.667-8.333v-5.833l-6.667-2.5-6.667 2.5v5.833c0 5 6.667 8.333 6.667 8.333Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M5.745 6.185h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
