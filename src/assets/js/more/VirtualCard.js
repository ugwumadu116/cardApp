import * as React from "react"
import Svg, { G, Mask, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <G opacity={0.5}>
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
      <G fill="#000" mask="url(#a)">
        <Path d="M18 21.5H6c-2.21 0-4-1.79-4-4v-10c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4ZM6 5a2.5 2.5 0 0 0-2.5 2.5v10A2.5 2.5 0 0 0 6 20h12a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 18 5H6Z" />
        <Path d="M14.75 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 9.5H6c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4Zm-4.5 6.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z" />
      </G>
    </G>
  </Svg>
)
export default SvgComponent
