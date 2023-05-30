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
    <Rect width={40.635} height={40.635} y={0.121} fill="#CFF1FF" rx={10} />
    <G clipPath="url(#a)">
      <Path
        fill="#3F37C9"
        d="M14.317 12.689h12c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4h-12c-2.21 0-4-1.79-4-4v-8c0-2.21 1.79-4 4-4Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.408}
        d="M26.008 19.769c.07.09.13.19.18.3l.02.05c.06.14.07.29.03.43l-.19.69c-.09.33-.32.6-.63.73l-.3.12c-.13.06-.28.08-.42.07a.943.943 0 0 1-.41-.13l-.16-.09c-.23-.13-.4-.33-.51-.57l-.06-.15c-.14-.32-.15-.7-.01-1.03l.01-.02c.14-.34.42-.62.77-.75l.09-.03c.32-.12.68-.11.99.03l.33.15c.1.04.2.11.27.2Z"
      />
      <Path
        stroke="#fff"
        strokeWidth={1.408}
        d="M30.317 17.07h-6c-2 0-3.62 1.62-3.62 3.62s1.62 3.62 3.62 3.62h6"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8.317 8.189h24v24.5h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
