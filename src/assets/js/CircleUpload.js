import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={31} height={31} x={0.716} y={0.6} fill="#FFDFAB" rx={15.5} />
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M19.55 19.433 16.216 16.1l-3.333 3.333M16.216 16.1v7.5" />
      <Path d="M23.208 21.424a4.167 4.167 0 0 0-1.992-7.824h-1.05a6.668 6.668 0 1 0-11.45 6.083" />
      <Path d="M19.55 19.433 16.216 16.1l-3.333 3.333" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M6.216 6.1h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
