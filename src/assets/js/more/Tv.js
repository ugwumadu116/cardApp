import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G stroke="#000" strokeOpacity={0.5} strokeWidth={1.5} clipPath="url(#a)">
      <Path d="M6 4.031h12c1.79 0 3.25 1.46 3.25 3.25v8.12c0 1.79-1.46 3.25-3.25 3.25H6c-1.79 0-3.25-1.46-3.25-3.25v-8.12c0-1.79 1.46-3.25 3.25-3.25Z" />
      <Path
        strokeLinecap="round"
        d="m6.88 20.721 4.74-.92c.25-.05.51-.05.77 0l4.74.92"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
