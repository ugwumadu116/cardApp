import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M24 .5H0v24h24V.5Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#F8F8FA"
        d="M12 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      />
      <Path
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.213 11.91-.44-5.35"
      />
      <Path
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m13.983 11.68-7.6-7.6"
      />
      <Path
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.708 13.205.44 5.34"
      />
      <Path
        stroke="#3F37C9"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9.938 13.435 7.58 7.58"
      />
    </G>
  </Svg>
)
export default SvgComponent
