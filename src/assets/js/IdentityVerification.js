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
    <Rect width={40.635} height={40.635} y={0.014} fill="#CFF1FF" rx={10} />
    <G strokeWidth={1.5} clipPath="url(#a)">
      <Path
        stroke="#3F37C9"
        d="M20.315 29.658a9.33 9.33 0 1 0 0-18.66 9.33 9.33 0 0 0 0 18.66Z"
      />
      <Path
        stroke="#3F37C9"
        d="M20.322 21.16a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12ZM14.168 27.781a6.47 6.47 0 0 1 6.02-4.1c2.66 0 5.04 1.63 6.01 4.1"
      />
      <Path
        fill="#3F37C9"
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M30.218 27.641c-.08.35-.21.69-.4.99a3.482 3.482 0 0 1-5.33.8c-.26-.23-.49-.5-.66-.8-.34-.54-.51-1.16-.51-1.8 0-1.93 1.56-3.5 3.49-3.5h.01c.99 0 1.94.42 2.6 1.16.58.64.9 1.48.9 2.34 0 .27-.03.55-.1.81Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m25.508 26.831.88.88 1.75-1.75"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8.318 8.331h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
