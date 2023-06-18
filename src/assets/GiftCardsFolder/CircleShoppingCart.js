import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={43}
    fill="none"
    {...props}
  >
    <Circle cx={21.739} cy={21.789} r={20.932} fill="#FFC300" />
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.354}
      clipPath="url(#a)"
    >
      <Path d="M18.093 28.559a.677.677 0 1 0 0-1.354.677.677 0 0 0 0 1.354ZM25.539 28.559a.677.677 0 1 0 0-1.354.677.677 0 0 0 0 1.354ZM12.677 14.343h2.707l1.815 9.064a1.354 1.354 0 0 0 1.354 1.09h6.58a1.354 1.354 0 0 0 1.354-1.09l1.083-5.68H16.06" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12 13.666h16.247v16.247H12z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
