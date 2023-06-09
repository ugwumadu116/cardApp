import * as React from "react"
import Svg, { Path, Rect, G, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={65}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.86 61.414c1.237 0 1.92-.78 2.365-1.668l-.792-.372c-.3.684-.84 1.188-1.572 1.188-1.308 0-2.136-1.392-2.136-3.287 0-1.908.828-3.288 2.136-3.288.708 0 1.236.431 1.56 1.091l.792-.384c-.444-.828-1.14-1.56-2.352-1.56-1.92 0-3.12 1.74-3.12 4.14 0 2.4 1.2 4.14 3.12 4.14Zm7.37-.144v-4.056c0-1.307-.78-1.883-1.92-1.883-.743 0-1.427.263-1.98.851l.385.6c.456-.503.924-.707 1.464-.707.756 0 1.188.444 1.188 1.235v1.02c-.372-.527-.936-.755-1.536-.755-.936 0-1.752.695-1.752 1.907 0 1.212.816 1.932 1.752 1.932.588 0 1.164-.24 1.536-.78v.636h.864Zm-2.111-.48c-.732 0-1.164-.575-1.164-1.295s.432-1.296 1.164-1.296c.492 0 .972.215 1.248.732v1.14c-.276.504-.756.72-1.248.72Zm4.538-1.08V57.06c.228-.505.768-.96 1.32-.96.948 0 1.392 1.02 1.392 2.28 0 1.248-.444 2.268-1.392 2.268-.552 0-1.092-.432-1.32-.936Zm0 1.56v-.828c.336.589.924.972 1.536.972 1.308 0 2.076-1.212 2.076-3.035 0-1.813-.768-3.048-2.076-3.048-.6 0-1.176.335-1.536.983v-3.047h-.852v8.003h.852Zm5.777 0v-8.004h-.852v8.005h.852Zm3.793.144c.78 0 1.44-.348 1.909-.924l-.456-.516c-.36.469-.877.72-1.38.72-1.044 0-1.645-.876-1.68-2.04h3.767v-.264c0-1.691-.756-3.06-2.291-3.06-1.477 0-2.364 1.357-2.364 3.037 0 1.776.948 3.047 2.495 3.047Zm1.308-3.407H21.62c.024-.84.433-1.956 1.453-1.956 1.068 0 1.451 1.08 1.463 1.956Zm7.052 3.264v-7.153h1.908v-.852H28.73v.852h1.908v7.152h.948Zm5.859 0 2.4-8.005h-1.032l-1.944 6.852-1.944-6.852h-1.032l2.412 8.005h1.14Z"
    />
    <Rect
      width={40.635}
      height={40.635}
      x={0.24}
      y={0.117}
      fill="#CFF1FF"
      rx={10}
    />
    <G clipPath="url(#a)">
      <Path
        fill="#9A4AFF"
        d="M14.558 13.87h12c1.79 0 3.25 1.46 3.25 3.25v8.12c0 1.79-1.46 3.25-3.25 3.25h-12c-1.79 0-3.25-1.46-3.25-3.25v-8.12c0-1.79 1.46-3.25 3.25-3.25Z"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.438 30.56 4.74-.92c.25-.05.51-.05.77 0l4.74.92"
      />
      <Path
        fill="#FFC300"
        d="M22.88 19.99a1 1 0 0 1 0 1.733l-2.246 1.297a1 1 0 0 1-1.5-.866V19.56a1 1 0 0 1 1.5-.866l2.247 1.297Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8.558 9.838h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
