import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        fillOpacity={0.5}
        d="M0 22h24v2H0v-2ZM24 7.909V10h-3v8h2v2H1v-2h2v-8H0V7.909a3 3 0 0 1 1.563-2.634l9-4.909a2.993 2.993 0 0 1 2.874 0l9 4.909A3 3 0 0 1 24 7.909ZM5 18h3v-8H5v8Zm5-8v8h4v-8h-4Zm9 0h-3v8h3v-8Zm3-2.091a1 1 0 0 0-.521-.878l-9-4.909a1 1 0 0 0-.958 0l-9 4.909A1 1 0 0 0 2 7.909V8h20v-.091Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
