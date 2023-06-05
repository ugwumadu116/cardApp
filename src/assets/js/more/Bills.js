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
      <G mask="url(#a)">
        <Path
          fill="#000"
          d="M18.39 3.08c.53.07 1.01.32 1.38.7.37.38.6.87.67 1.4l.53 4.34c.02.16.03.33.03.49v7.28c0 1.17-.63 2.25-1.66 2.82l-.75.42c-.6.33-1.27.51-1.95.51h-.68c-.42 0-.84.13-1.18.37l-.53.37-.06.04.03-.02c-.02.01-.04.02-.06.02H9.81l-.06-.04h-.01l-.53-.37c-.35-.24-.76-.37-1.18-.37h-.67c-.68 0-1.35-.17-1.95-.51l-.75-.42A3.218 3.218 0 0 1 3 17.29v-7.28c0-.16.01-.33.03-.49l.53-4.34c.07-.53.3-1.02.67-1.4.37-.38.85-.63 1.38-.7l4.1-.55c.18-.02.35-.04.53-.04h3.53c.18 0 .35.01.53.04l4.09.55Z"
        />
        <Path
          stroke="#F8F8FA"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M8 8.563h8M8 12.438h8"
        />
      </G>
    </G>
  </Svg>
)
export default SvgComponent
