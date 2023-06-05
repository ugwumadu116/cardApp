import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Rect width={40.635} height={40.635} y={0.038} fill="#CFF1FF" rx={10} />
    <G clipPath="url(#a)">
      <Path
        stroke="#3F37C9"
        strokeWidth={1.5}
        d="M15.317 12.824h10c2.35 0 4.25 1.9 4.25 4.25v6.56c0 2.35-1.9 4.25-4.25 4.25h-10c-2.35 0-4.25-1.9-4.25-4.25v-6.56c0-2.35 1.9-4.25 4.25-4.25Z"
      />
      <Path
        stroke="#3F37C9"
        strokeWidth={1.5}
        d="M20.32 21.877a2.37 2.37 0 1 0 0-4.74 2.37 2.37 0 0 0 0 4.74Z"
      />
      <Path
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.08 27.477c0-2.03 1.65-3.68 3.68-3.68h3.12c2.03 0 3.68 1.65 3.68 3.68"
      />
      <Path
        fill="#3F37C9"
        d="M26.007 17.445a1.06 1.06 0 1 0 0-2.12 1.06 1.06 0 0 0 0 2.12Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8.317 8.355h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
