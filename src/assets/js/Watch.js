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
    <Rect width={31} height={31} x={0.5} y={0.251} fill="#CFF1FF" rx={15.5} />
    <G
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M16 21.584a5.833 5.833 0 1 0 0-11.666 5.833 5.833 0 0 0 0 11.666Z" />
      <Path d="M16 13.251v2.5l1.25 1.25M19.758 20.21l-.291 3.191a1.667 1.667 0 0 1-1.667 1.517h-3.608a1.667 1.667 0 0 1-1.667-1.517l-.292-3.192m.009-8.916.291-3.192a1.667 1.667 0 0 1 1.659-1.517h3.625a1.667 1.667 0 0 1 1.666 1.517l.292 3.192" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M6 5.751h20v20H6z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
