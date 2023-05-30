import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={15}
        height={15}
        x={0}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M14.287 1.072h-14v14h14v-14Z" />
      </Mask>
      <G stroke="#3F37C9" strokeLinecap="round" mask="url(#b)">
        <Path d="M3.935 4.55h5.512c.683 0 1.237.553 1.237 1.236v6.084c0 .683-.554 1.237-1.237 1.237H3.935a1.237 1.237 0 0 1-1.237-1.237V5.786c0-.683.554-1.237 1.237-1.237Z" />
        <Path d="M3.445 2.917h7.198c.927 0 1.68.753 1.68 1.68v7.77" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.287.78h14v14.293h-14z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
