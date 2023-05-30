import * as React from "react"
import Svg, { Path, Rect, Mask, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={65}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m4.27 61.772 2.4-8.005H5.638L3.694 60.62 1.75 53.767H.718l2.412 8.005h1.14Zm3.704-6.636a.581.581 0 0 0 .588-.589.581.581 0 0 0-.588-.587.597.597 0 0 0-.588.587c0 .325.276.589.588.589Zm.432 6.636v-5.797h-.852v5.797h.852Zm2.438 0v-4.116c.24-.492.828-.948 1.356-.948.096 0 .192.011.288.023v-.876c-.708 0-1.272.433-1.644 1.045v-.925h-.852v5.797h.852Zm3.96.144c.444 0 .732-.144.948-.348l-.264-.648a.648.648 0 0 1-.504.227c-.336 0-.468-.264-.468-.695v-3.72h.972v-.757h-.972v-1.584h-.864v1.584h-.768v.756h.768v3.877c0 .852.372 1.308 1.152 1.308Zm5.84-.144v-5.797h-.863v4.273c-.264.468-.793.9-1.357.9-.575 0-.936-.265-.936-1.045v-4.128h-.851v4.38c0 1.056.468 1.56 1.463 1.56.708 0 1.332-.444 1.68-.947v.803h.864Zm5.423 0v-4.056c0-1.309-.78-1.885-1.92-1.885-.744 0-1.428.264-1.98.852l.384.6c.456-.504.924-.708 1.464-.708.756 0 1.188.444 1.188 1.236v1.02c-.372-.528-.936-.756-1.536-.756-.936 0-1.752.697-1.752 1.908 0 1.213.816 1.933 1.752 1.933.588 0 1.164-.24 1.536-.78v.636h.864Zm-2.112-.48c-.732 0-1.164-.577-1.164-1.297s.432-1.295 1.164-1.295c.492 0 .972.215 1.248.731v1.14c-.276.505-.756.72-1.248.72Zm4.537.48v-8.005h-.852v8.005h.852Zm6.288.144c.804 0 1.296-.313 1.656-.768l-.468-.589c-.312.409-.672.589-1.116.589-1.032 0-1.584-1.045-1.584-2.28 0-1.236.552-2.269 1.584-2.269.444 0 .804.169 1.116.589l.468-.589c-.36-.443-.852-.767-1.656-.767-1.5 0-2.412 1.32-2.412 3.035 0 1.717.912 3.049 2.412 3.049Zm6.615-.144v-4.056c0-1.309-.78-1.885-1.92-1.885-.744 0-1.428.264-1.98.852l.384.6c.456-.504.924-.708 1.464-.708.756 0 1.188.444 1.188 1.236v1.02c-.372-.528-.936-.756-1.536-.756-.936 0-1.752.697-1.752 1.908 0 1.213.816 1.933 1.752 1.933.588 0 1.164-.24 1.536-.78v.636h.864Zm-2.112-.48c-.732 0-1.164-.577-1.164-1.297s.432-1.295 1.164-1.295c.492 0 .972.215 1.248.731v1.14c-.276.505-.756.72-1.248.72Zm4.538.48v-4.116c.24-.492.828-.948 1.355-.948.096 0 .192.011.288.023v-.876c-.707 0-1.271.433-1.643 1.045v-.925h-.852v5.797h.852Zm6.828 0v-8.005h-.864v3.048c-.348-.648-.924-.983-1.524-.983-1.308 0-2.088 1.236-2.088 3.047 0 1.825.78 3.037 2.088 3.037.612 0 1.188-.384 1.524-.972v.828h.864Zm-2.172-.624c-.948 0-1.404-1.02-1.404-2.269 0-1.26.456-2.28 1.404-2.28.552 0 1.092.445 1.308.949v2.663c-.216.505-.756.937-1.308.937Z"
    />
    <Rect
      width={40.635}
      height={40.635}
      x={5.216}
      y={0.617}
      fill="#CFF1FF"
      rx={10}
    />
    <Mask
      id="a"
      width={25}
      height={25}
      x={13}
      y={9}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M37.534 9.185h-24v24h24v-24Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FFC300"
        d="M31.534 30.185h-12c-2.21 0-4-1.79-4-4v-10c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4Zm-12-16.5a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h12a2.5 2.5 0 0 0 2.5-2.5v-10a2.5 2.5 0 0 0-2.5-2.5h-12Z"
      />
      <Path
        fill="#FFC300"
        d="M28.284 16.935h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      />
      <Path
        fill="#9A4AFF"
        d="M31.534 18.185h-12c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4Zm-4.5 6.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      />
    </G>
  </Svg>
)
export default SvgComponent
