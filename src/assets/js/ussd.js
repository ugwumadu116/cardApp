import * as React from "react"
import Svg, { Rect, G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={31} height={31} x={0.5} y={0.751} fill="#CFF1FF" rx={15.5} />
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Mask
          id="c"
          width={21}
          height={21}
          x={6}
          y={6}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <Path fill="#fff" d="M26.388 6.389h-20v20h20v-20Z" />
        </Mask>
        <G mask="url(#c)">
          <Path
            fill="#3F37C9"
            d="M22.274 11.389v10a3.332 3.332 0 0 1-3.333 3.333h-5.1a3.332 3.332 0 0 1-3.333-3.333v-10a3.332 3.332 0 0 1 3.333-3.333h5.1a3.332 3.332 0 0 1 3.333 3.333Z"
          />
          <Path
            stroke="#3F37C9"
            strokeWidth={1.5}
            d="M21.65 11.389v10a2.714 2.714 0 0 1-2.71 2.708h-5.1a2.714 2.714 0 0 1-2.707-2.708v-10A2.714 2.714 0 0 1 13.84 8.68h5.1a2.714 2.714 0 0 1 2.708 2.708Z"
          />
          <Path
            stroke="#FFC300"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M15.138 10.347h2.5M16.388 22.322v.025"
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M6 6.751h20v20H6z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M6.388 6.389h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
