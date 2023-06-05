import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#F8F8FA" />
    <G clipPath="url(#a)">
      <Path
        fill="#3F37C9"
        d="M35 26.5a6.686 6.686 0 0 0-5.175-6.492 6.658 6.658 0 0 0-11.028-3.389l-2.583-2.583-1.178 1.178 18.75 18.75 1.178-1.178-1.75-1.75A6.636 6.636 0 0 0 35 26.5Zm-11.667-10a5.008 5.008 0 0 1 4.95 4.333l.083.632.632.083a4.988 4.988 0 0 1 3.034 8.305L19.977 17.798a4.989 4.989 0 0 1 3.356-1.299Zm5.584 14.95 1.405 1.407a6.67 6.67 0 0 1-1.989.31h-8.75a4.576 4.576 0 0 1-2.166-8.608 6.595 6.595 0 0 1-.44-5.047l1.408 1.405c-.03.193-.047.388-.052.583a4.954 4.954 0 0 0 .985 2.97l.737.992-1.198.31a2.909 2.909 0 0 0 .726 5.728h8.75c.196-.005.39-.022.584-.05Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M15 14h20v20H15z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
