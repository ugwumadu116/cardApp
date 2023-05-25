import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={430}
    height={342}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M471.5-22h-513v386h513V-22Z" />
      <Path
        fill="#EBF2FF"
        d="M198.003 72.527c.153 1.973 1.761 3.963 3.591 4.512 2.838.84 3.437-2.522 2.821-4.46-.479-1.544-1.676-3.449-3.403-3.723-2.103-.36-3.146 1.853-3.009 3.671ZM217.309 77.314c1.881 1.235 4.292-3.037 3.813-3.792-.479-.755-1.471-1.063-2.257-.6a6.458 6.458 0 0 0-2.138 2.11c-.462.738-.154 1.801.582 2.282ZM206.86 85.325c1.129.995 3.831 1.407 3.779-.84-.051-1.802-3.437-3.174-4.394-1.373-.428.806-.052 1.63.615 2.213ZM138.734 131.405c10.551-3.26 19.614-10.894 24.778-20.672 1.453-2.745 6.481-10.86 3.403-10.38-8.704 1.321-18.383 7.343-20.486 10.071-2.086 2.693-9.593 15.886-9.798 19.403-.052 1.046 1.111 1.887 2.103 1.578ZM233.759 131.199c2.787 1.184 5.762 1.801 8.789 1.733.923-.017 1.607-.755 1.659-1.664.342-6.193-6.55-19.026-26.112-28.101-.735-.343-1.761.755-1.659 1.664 1.42 10.928 6.704 21.873 17.323 26.368ZM191.06 105.552c5.233 2.676 10.995 3.739 16.843 3.139.89-.086 1.437-1.167 1.266-1.973-.205-.961-1.077-1.355-1.967-1.269-4.89.514-9.969-.446-14.364-2.694-.786-.412-1.761-.309-2.274.498-.445.703-.308 1.887.496 2.299ZM145.677 179.269c.837.497 1.727.12 2.257-.601 3.197-4.34 5.557-9.246 7.028-14.427.581-2.059-2.599-2.934-3.181-.875-1.265 4.512-3.283 8.732-5.933 12.558a13.538 13.538 0 0 0 1.504-4.324c.137-.875-.222-1.784-1.145-2.041-.787-.223-1.881.274-2.035 1.149-.308 1.956-1.06 3.774-2.326 5.301-.581.687-.667 1.664 0 2.351.582.583 1.761.686 2.343 0 .256-.292.479-.601.701-.91-.154.669.222 1.476.787 1.819ZM216.932 166.162a73.475 73.475 0 0 1-24.419 3.105c-2.12-.086-2.12 3.225 0 3.311.753.034 1.505.052 2.258.052-.975.428-1.916.892-2.839 1.406-1.864 1.03-.205 3.895 1.676 2.865a28.736 28.736 0 0 1 6.087-2.539c.958-.274 1.266-1.132 1.129-1.887a76.582 76.582 0 0 0 17.014-3.105c2.001-.635 1.129-3.826-.906-3.208ZM287.709 123.222c1.231.36 2.343-.309 2.907-1.407 1.744-3.448 2.155-10.928-2.565-12.335-4.89-1.458-3.078 9.624-2.479 11.34.376 1.029 1.043 2.076 2.137 2.402ZM289.351 133.12a33.915 33.915 0 0 0-3.249 7.806c-.565 2.059 2.616 2.934 3.18.875a30.414 30.414 0 0 1 2.907-7.017c1.078-1.852-1.778-3.516-2.838-1.664ZM296.721 111.436c2.274-3.929 4.241-8.012 5.951-12.232.342-.823-.359-1.819-1.146-2.041-.941-.258-1.693.326-2.035 1.149a91.98 91.98 0 0 1-5.626 11.443c-1.06 1.852 1.779 3.534 2.856 1.681ZM300.637 105.964a1326.351 1326.351 0 0 1-5.199 8.268c-.974 1.562 1.026 3.02 2.309 2.214-.223.326-.445.669-.684.995-1.197 1.767 1.658 3.431 2.855 1.681.052-.086.103-.172.171-.24.496 1.012 2.155 1.475 2.993.223 1.077-1.596 2.155-3.191 3.215-4.787.838-1.235-.325-2.436-1.505-2.419.051-.068.085-.137.137-.206 1.197-1.767-1.659-3.431-2.856-1.681-.547.824-1.111 1.63-1.659 2.453 1.009-1.612 2.035-3.242 3.044-4.855 1.163-1.784-1.693-3.448-2.821-1.646ZM135.28 202.583c.94 1.03 2.804 2.745 4.172 1.716 1.197-.909.428-9.521-2.223-13.776-2.308-3.706-8.293-10.156-10.499-9.556-1.437.395-3.42 8.527 8.55 21.616ZM174.832 214.318c4.942 1.75 10.175.686 15.202-.017 1.334-.189 2.719-.343 4.104-.378l3.83.241c1.591.274 3.13.823 4.532 1.767 1.761 1.2 3.42-1.682 1.676-2.865-3.933-2.66-8.858-2.728-13.407-2.179-4.976.6-10.157 1.973-15.048.24-2.018-.703-2.873 2.488-.889 3.191ZM88.374 232.931c-10.072 4.547-12.004 21.977-4.087 31.12 2.309 2.677 11.748 11.426 12.706 9.865 2.36-3.877 4.89-10.465 4.89-18.562 0-6.365-5.283-26.145-13.509-22.423ZM121.395 260.535c-4.156 3.602-8.756 6.605-13.68 9.024-1.916.943-.24 3.791 1.675 2.865 5.182-2.539 9.987-5.765 14.347-9.556 1.591-1.39-.752-3.723-2.342-2.333ZM126.217 264.429c-3.078 1.493-6.173 2.985-9.251 4.478-.804.394-1.026 1.544-.599 2.264.479.824 1.454.978 2.257.601 3.078-1.493 6.173-2.985 9.251-4.478.804-.395 1.026-1.544.599-2.265-.479-.823-1.454-.977-2.257-.6ZM316.83 245.884a2.813 2.813 0 0 0-1.043-1.063c-.957-.549-2.154-.412-3.214-.395-2.309.017-4.617.034-6.943.069-18.554.171-37.107.428-55.661.669-10.465.137-20.913.206-31.378.308-9.935.103-20.212 1.116-30.096.567.821-1.236 1.351-2.66 1.282-4.186-.034-.79-.495-1.339-1.214-1.596-4.104-1.544-8.447-.24-12.619-1.149-5.148-1.115-9.85-6.622-13.39-10.208-6.036-6.107-11.132-13.707-17.989-18.922-1.778-1.356-4.258-3.088-6.635-2.642-2 .377-5.489 4.391-3.659 6.193 7.524 7.462 15.031 14.959 22.572 22.388 3.847 3.774 8.02 7.651 12.791 10.31-1.71-.343-3.42-.669-5.147-.978-7.661-1.406-15.322-2.83-23.034-3.894-3.796-.532-7.644-.686-11.44-1.252-.274-2.934-8.567-4.392-10.995-5.421-1.95-.824-5.267-3.208-7.507-2.608-3.523.961.359 3.294 1.829 3.963 2.89 1.321 6.875 3.551 10.038 3.86-1.898 0-9.319-.892-9.747 1.681-.564 3.328 5.677 1.716 7.251 1.63 3.898-.223 7.575.189 11.405.635 8.379.96 16.604 1.921 24.881 3.431 11.029 2.007 21.905 4.443 32.798 7.068-.684 8.012-.103 16.092 1.641 23.949.462 2.076 3.642 1.201 3.181-.875a76.388 76.388 0 0 1-1.591-22.302c4.361.978 8.739 1.784 13.219 2.264 5.318.567 10.67.721 16.005.481 6.191 5.438 11.15 12.266 14.279 19.9a50.276 50.276 0 0 1 2.103 6.228c.616 2.23 1.095 4.512 1.932 6.673 1.505 3.929 4.104 7.103 7.661 9.35 3.814 2.436 8.362 3.62 12.842 3.774 1.539.052 2.035-1.801 1.163-2.83a172.294 172.294 0 0 1-14.894-20.742c-3.557-5.815-6.703-11.837-9.593-17.996.547.789 3.181 5.765 6.344 5.336 10.636-1.476 70.657-10.379 70.264-15.766-.051-1.613 3.745-2.848 2.308-5.902Zm-130.968 2.471c.171.617.684 1.115 1.521 1.08.308-.017.599-.017.907-.034.034.017.051.017.085.034a65.74 65.74 0 0 0 3.095 1.098c-.068.018-.154.035-.222.069l-4.634-.532c-1.077-.274-2.155-.549-3.232-.806a8.01 8.01 0 0 0 2.48-.909Z"
      />
      <Path
        fill="#EBF2FF"
        d="m313.872 241.561 41.211-62.532h-117.75l-41.211 62.532h117.75Zm-30.968-37.674c3.523 0 6.378 2.865 6.378 6.399s-2.855 6.399-6.378 6.399-6.378-2.865-6.378-6.399 2.855-6.399 6.378-6.399ZM168.625 281.036c-5.182 9.007-12.124 20.861-16.228 26.608 12.825 1.407 24.402-15.217 35.534-20.981 3.745-1.939 7.78-3.225 11.782-4.512.786-.257 1.299-.995 1.179-1.818-.102-.738-30.249.651-32.267.703ZM166.008 145.147c-1.077-1.836-3.95-.172-2.855 1.681.051.103.102.188.171.291a1.604 1.604 0 0 0-.103.515c-.547 8.955-3.198 17.602-6.053 26.059-.718 2.128-1.437 4.238-2.155 6.365-.718 2.11-1.47 4.22-1.778 6.433-.308 2.196-.086 4.324.786 6.365.787 1.853 1.984 3.483 3.232 5.044 1.163 1.458 2.411 2.848 3.557 4.323.958 1.235 2.343 3.671 4.258 3.14 1.231-.344 1.727-1.682 1.966-2.797.308-1.338.428-2.71.531-4.066.119-1.475.256-2.968.256-4.443 0-2.367-.256-4.718-.513-7.085-.496-4.632-.735-9.127-.137-13.759 1.197-9.281 3.967-19.403-1.163-28.066Z"
      />
      <Path
        fill="#EEE1FF"
        d="M226.286 62.165c-1.419-.446-2.873.583-3.3 1.939-.325 1.08-.24 2.35-.359 3.465a44.199 44.199 0 0 1-.599 3.963 46.542 46.542 0 0 1-2.172 7.566c-.906 2.367-2 4.683-2.411 7.205-.342 2.076-.205 4.46 1.351 6.056 1.659 1.698 4.241 1.51 6.105.291 3.933-2.59 5.079-7.943 5.147-12.334.068-3.123-2.719-17.825-3.762-18.15ZM223.157 57.465c1.778-2.076 2.103-4.941 1.111-7.463-1.026-2.59-3.163-4.426-5.609-5.644-5.266-2.608-11.816-4.1-17.424-1.784-5.216 2.161-9.337 6.57-12.432 11.185a40.322 40.322 0 0 0-6.156 15.234c-.547 3.054-.787 6.176-.616 9.264.188 3.225.701 6.605 2.599 9.298.513.738 1.437 1.081 2.258.6.342-.205.598-.548.735-.943.291.446.598.892.923 1.321 1.454 1.904 3.318 4.083 5.866 4.272 3.249.257 3.984-3.105 4.172-5.627.222-2.934-.274-5.884-.718-8.784-.872-5.695-.941-11.305.496-16.915.29-1.132.632-2.23 1.009-3.328 2.411 1.355 5.284 1.887 8.054 2.093.889 4.58 15.253-2.23 15.732-2.78ZM298.825 81.736c5.355-5.373 5.355-14.084 0-19.458-5.356-5.373-14.039-5.373-19.395 0-5.356 5.374-5.356 14.085 0 19.458 5.356 5.373 14.039 5.373 19.395 0ZM294.652 89.631c-.308-.806-1.129-1.458-2.035-1.149-.787.257-1.488 1.167-1.146 2.041.257.67.513 1.322.77 1.99.308.807 1.128 1.459 2.035 1.15.786-.257 1.487-1.167 1.145-2.041-.256-.653-.513-1.322-.769-1.99ZM307.477 124.165c-.564-1.784-1.112-3.551-1.676-5.335-.633-2.025-3.83-1.167-3.181.875.565 1.784 1.112 3.551 1.676 5.335.633 2.024 3.831 1.167 3.181-.875ZM279.347 57.276c.684-.566.599-1.75 0-2.35-.684-.687-1.641-.584-2.342 0a26.486 26.486 0 0 0-6.96 9.058c-.376.806-.222 1.784.598 2.264.719.412 1.881.223 2.258-.6a24.238 24.238 0 0 1 6.446-8.372Z"
      />
      <Path
        fill="#003188"
        d="M198.858 84.347c2.992 5.456 10.55 7.12 15.304 2.934 2.377-2.093 3.967-5.096 5.233-7.96 1.453-3.277 2.531-6.708 3.334-10.19a74.546 74.546 0 0 0 1.762-12.73c.034-.67-.992-.652-1.026 0-.342 6.759-1.557 13.57-3.951 19.934-1.949 5.199-5.283 12.524-11.85 12.352-3.3-.085-6.361-1.972-7.951-4.855-.274-.6-1.163-.068-.855.515ZM204.501 64.859a8.754 8.754 0 0 1 5.814.772c.581.291 1.111-.584.513-.892a10 10 0 0 0-6.601-.875c-.65.137-.376 1.132.274.995ZM206.98 67.86c-.171.738-.342 1.476-.53 2.213-.154.652.838.927.992.275.171-.738.342-1.475.53-2.213.137-.635-.838-.91-.992-.275Z"
      />
      <Path
        fill="#003188"
        d="M220.045 64.515c-1.351.103-3.078-.034-4.207.84-.855.67-1.094 1.768-1.129 2.814-.034 1.527.188 3.054.24 4.58.017.618.051 1.39-.325 1.922-.411.566-1.283.6-1.881.892-.599.275-.086 1.167.513.892 1.043-.497 2.035-.514 2.496-1.75.411-1.098.189-2.384.12-3.516-.085-1.287-.393-2.814-.017-4.066.53-1.716 2.753-1.459 4.172-1.562.684-.051.684-1.08.018-1.046Z"
      />
      <Path
        fill="#003188"
        d="M218.078 69.92a10.225 10.225 0 0 1-.513 2.006c-.222.618.769.892.992.275.239-.652.41-1.321.513-2.007.102-.635-.889-.927-.992-.275ZM207.271 77.914c.975 1.784 2.924 2.264 4.805 2.504.65.086.65-.943 0-1.029-1.505-.189-3.129-.549-3.916-2.007-.325-.566-1.214-.052-.889.532ZM213.871 86.251c-1.162 4.787-2 9.573-2.667 14.445-.086.652.906.927.992.275.667-4.873 1.504-9.659 2.667-14.445.154-.652-.838-.927-.992-.275ZM187.144 97.162c6.122 6.279 15.92 8.424 24.094 5.233.616-.241.342-1.236-.274-.995-7.848 3.053-17.202 1.063-23.102-4.976-.444-.463-1.18.258-.718.738Z"
      />
      <Path
        fill="#003188"
        d="M191.248 103.287c4.566 4.272 11.081 4.032 16.861 3.294.65-.086.65-1.115 0-1.029-5.472.686-11.782 1.063-16.126-3.003-.478-.446-1.214.275-.735.738ZM183.587 94.006c-5.42 1.681-10.807 3.5-16.193 5.267-5.387 1.767-10.893 3.173-15.801 6.124-2.257 1.355-4.053 2.728-5.643 4.821-1.522 2.007-2.821 4.186-4.07 6.382-3.471 6.159-6.412 12.626-9.199 19.128a391.315 391.315 0 0 0-8.602 21.753c-2.103 5.816-4.155 11.701-5.728 17.688-.137.532-.274 1.081-.411 1.612-.154.652.838.927.992.275 1.334-5.61 3.215-11.083 5.13-16.504a395.798 395.798 0 0 1 8.208-21.273c2.805-6.69 5.763-13.329 9.166-19.729 1.282-2.418 2.65-4.837 4.189-7.102 1.009-1.492 2.121-3.071 3.557-4.203 1.967-1.527 4.241-2.779 6.498-3.826 2.668-1.235 5.489-2.024 8.294-2.916 5.232-1.681 10.431-3.466 15.663-5.147 1.402-.446 2.805-.892 4.207-1.32.65-.241.376-1.236-.257-1.03ZM120.745 179.063c2.36-1.201 5.301-1.201 7.797-.395 2.446.789 4.139 2.951 6.43 4.066 2.787 1.355 5.797.72 8.738.429 2.48-.24 5.609-.12 7.199 2.144.376.532 1.266.017.889-.514-2.804-3.998-8.122-2.419-12.158-2.248-1.419.052-2.855-.086-4.155-.703-1.077-.515-2.035-1.27-2.975-2.007-1.642-1.253-3.215-2.196-5.284-2.539-2.36-.395-4.84-.223-7.011.875-.565.308-.052 1.2.53.892ZM163.17 145.524a140.285 140.285 0 0 1-6.857 32.012c-.992 2.933-2.104 5.816-3.283 8.681-.257.617.735.875.991.274a140.55 140.55 0 0 0 9.029-31.789c.479-3.054.872-6.108 1.163-9.178.034-.652-.992-.652-1.043 0ZM211.751 99.135a297.41 297.41 0 0 1 14.381 9.093c4.309 2.899 8.653 5.918 11.936 10.001 3.386 4.203 5.54 9.281 7.695 14.205 2.326 5.335 4.514 10.739 6.618 16.178 2.342 6.039 4.582 12.129 6.805 18.219.223.618 1.215.343.992-.275-4.035-10.962-8.071-21.924-12.671-32.647-2.154-5.026-4.275-10.224-7.455-14.719-3.01-4.272-7.097-7.497-11.355-10.431a283.229 283.229 0 0 0-16.433-10.482c-.564-.377-1.077.515-.513.858Z"
      />
      <Path
        stroke="#003188"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M308.896 53.536c2.274-2.54 4.549-3.963 4.549-3.963M313.77 63.572c3.556-1.322 7.096-1.322 7.096-1.322M252.791 72.012s3.779-.051 7.575 1.442M257.767 85.771s3.318-3.688 6.618-5.644"
      />
      <Path
        fill="#003188"
        d="M226.782 137.203c-.701 5.061-.393 10.156-.41 15.252-.018 2.624-.103 5.266-.531 7.874-.393 2.505-1.111 4.941-1.966 7.325-1.06 2.986-2.274 5.885-3.266 8.887a161.883 161.883 0 0 0-3.249 10.997c-1.317 5.095-2.377 10.259-3.01 15.491-.085.652.941.652 1.026 0 1.043-8.612 3.232-17.121 5.917-25.356.906-2.779 1.966-5.489 3.009-8.234.89-2.368 1.693-4.77 2.223-7.24.513-2.453.736-4.941.821-7.446.188-5.764-.376-11.545.411-17.275.102-.652-.872-.927-.975-.275ZM230.116 151.459a55.726 55.726 0 0 1 3.044-4.632c.394-.531-.496-1.046-.889-.514a59.998 59.998 0 0 0-3.044 4.632c-.325.566.565 1.081.889.514ZM230.835 153.964a13.61 13.61 0 0 1 3.864-2.573c.599-.274.086-1.149-.513-.892a14.176 14.176 0 0 0-4.07 2.745c-.496.446.24 1.166.719.72ZM218.625 167.38c-7.883 2.23-16.057 3.174-24.248 2.848-.667-.034-.667.995 0 1.029a78.37 78.37 0 0 0 24.522-2.882c.632-.171.359-1.166-.274-.995ZM198.926 173.007a29.991 29.991 0 0 0-6.481 2.265c-.598.291-.068 1.183.513.892a28.59 28.59 0 0 1 6.242-2.162c.632-.137.376-1.132-.274-.995ZM263.735 168.581a1884.723 1884.723 0 0 1 15.185-32.613c1.47-3.053 2.941-6.124 4.412-9.178.29-.6-.599-1.115-.89-.515a1766.07 1766.07 0 0 0-15.372 32.527c-1.42 3.088-2.839 6.176-4.241 9.264-.257.584.632 1.116.906.515ZM283.571 123.908c-.428-3.483-.855-6.966-1.265-10.465-.189-1.664-.377-3.397.102-5.044.445-1.544 1.437-2.865 2.463-4.049 2.171-2.487 4.548-4.803 6.959-7.05a345.787 345.787 0 0 1 3.694-3.38c.633-.566 1.505-1.561 2.223-.532.581.823.051 1.99-.308 2.796-1.385 3.123-3.471 5.867-6.019 8.115-.496.429.222 1.166.718.72 2.616-2.298 4.754-5.13 6.173-8.32.582-1.321 1.18-3.02 0-4.203-1.197-1.218-2.394-.326-3.42.6-2.907 2.642-5.814 5.284-8.55 8.115-2.394 2.487-5.01 5.112-5.284 8.749-.171 2.265.308 4.598.582 6.845.29 2.368.564 4.735.855 7.103.136.652 1.162.652 1.077 0ZM299.987 97.334c1.334-.67 2.189 1.046 2.137 2.127-.068 1.287-.684 2.608-1.214 3.774-1.026 2.213-2.359 4.323-3.984 6.142-.769.858-1.642 1.681-2.685 2.196-.786.394-1.18.429-1.128-.601.017-.686.273-1.372.564-2.007 1.112-2.522 2.445-4.975 3.677-7.463.29-.583-.599-1.115-.89-.514-1.299 2.642-2.804 5.267-3.898 7.994-.394.961-.77 2.368-.24 3.363.496.926 1.59.514 2.326.154 2.189-1.046 3.813-3.191 5.13-5.164 1.402-2.093 2.873-4.666 3.3-7.188.205-1.15.051-2.402-.838-3.242-.769-.72-1.812-.944-2.77-.48-.599.308-.086 1.2.513.909Z"
      />
      <Path
        fill="#003188"
        d="M302.039 102.909c1.094-.017.428 3.586.274 4.186-.342 1.476-.958 2.865-1.762 4.135-1.316 2.11-2.855 3.774-4.89 5.181-.548.377-.035 1.269.513.892 2.616-1.819 4.719-4.169 6.104-7.085.77-1.613 1.249-3.346 1.334-5.13.051-1.132.017-3.225-1.59-3.208-.65.017-.65 1.046.017 1.029Z"
      />
      <Path
        fill="#003188"
        d="M303.168 107.867c2.787.395.256 5.507-.548 6.725-1.333 2.025-3.232 3.637-5.266 4.924-.565.36-.052 1.235.513.892 2.547-1.612 4.89-3.705 6.292-6.416.941-1.784 2.582-6.656-.718-7.12-.65-.085-.923.91-.273.995Z"
      />
      <Path
        fill="#003188"
        d="M305.151 111.436c2.172.652-.188 4.168-.872 5.198-1.094 1.63-2.497 3.054-4.087 4.22-.53.395-.017 1.287.513.892 2.103-1.544 3.899-3.5 5.181-5.781.924-1.63 2.138-4.735-.478-5.524-.616-.189-.89.806-.257.995ZM292.993 115.279a20.283 20.283 0 0 1-.684 10.499c-.205.635.787.892.992.274a21.461 21.461 0 0 0 .684-11.048c-.12-.652-1.112-.377-.992.275ZM302.244 122.707c-.496 3.397-1.881 6.587-4.087 9.229-.427.498.308 1.236.719.721 2.308-2.779 3.813-6.09 4.343-9.676.103-.652-.889-.926-.975-.274ZM297.114 134.39a341.327 341.327 0 0 0-8.875 34.379c-.136.652.855.927.992.275a343.633 343.633 0 0 1 8.875-34.38c.188-.635-.787-.909-.992-.274ZM290.103 134.476a49.083 49.083 0 0 0-2.907 7.325c-.188.635.804.909.992.275a47.722 47.722 0 0 1 2.804-7.086c.291-.583-.598-1.097-.889-.514ZM167.838 236.208c2.121 2.711 5.199 4.649 8.584 5.301 4.036.772 8.243-.171 12.193 1.115.632.206.906-.789.273-.995-3.745-1.201-7.678-.446-11.491-.995-3.505-.497-6.652-2.367-8.823-5.164-.411-.514-1.129.223-.736.738ZM181.621 237.529c2.975-.274 5.934.24 8.618 1.527.599.292 1.112-.6.513-.892a17.484 17.484 0 0 0-9.131-1.681c-.65.085-.667 1.115 0 1.046ZM185.571 233.995c2.548-.172 5.079.24 7.421 1.252.599.258 1.129-.617.513-.892a17.04 17.04 0 0 0-7.934-1.407c-.65.069-.667 1.098 0 1.047ZM179.432 227.922l8.465 1.132c1.385.189 2.77.36 4.155.566 1.06.155 2.291.378 2.873 1.39.342.566 1.214.051.889-.515-1.248-2.11-4.446-1.99-6.567-2.264-3.283-.446-6.549-.875-9.832-1.321-.633-.12-.633.909.017 1.012ZM125.362 178.48c-2.069 8.56 2.702 16.623 8.242 22.731 3.095 3.414 6.481 6.57 9.73 9.83a819.962 819.962 0 0 1 10.157 10.345 937.17 937.17 0 0 1 11.355 11.974c.444.481 1.18-.24.718-.72a883.879 883.879 0 0 0-19.631-20.433c-3.163-3.19-6.412-6.313-9.542-9.538-2.958-3.037-5.797-6.279-7.797-10.036-2.24-4.22-3.403-9.161-2.258-13.896.171-.618-.803-.892-.974-.257ZM148.891 185.462c7.524 10.396 15.065 20.792 22.589 31.188 2.138 2.951 4.258 5.885 6.396 8.836.376.531 1.282.017.889-.515-7.524-10.396-15.065-20.793-22.589-31.189-2.138-2.951-4.258-5.884-6.395-8.835-.394-.532-1.283-.017-.89.515ZM174.268 214.747c9.183 3.191 18.861-1.081 28.181.96.649.138.923-.857.273-.995-9.302-2.041-19.032 2.213-28.181-.96-.632-.223-.889.772-.273.995ZM186.717 213.151H190c.667 0 .667-1.029 0-1.029h-3.283c-.667 0-.667 1.029 0 1.029Z"
      />
      <Path
        fill="#003188"
        d="m138.153 207.592-22.521 10.5c-3.796 1.767-7.61 3.551-11.406 5.318-2.958 1.389-5.933 2.762-8.806 4.323-5.199 2.831-10.329 6.416-13.458 11.58-3.095 5.129-3.557 11.254-1.778 16.933 1.812 5.747 5.591 10.808 10.362 14.427 5.54 4.203 12.346 6.485 19.101 7.823 7.319 1.458 14.808 1.973 22.247 2.419 8.225.498 16.45.721 24.692.738 16.485.034 32.969-.721 49.436-1.561l6.088-.309c.65-.034.667-1.064 0-1.029-16.074.84-32.148 1.664-48.239 1.852-8.003.086-16.023.018-24.026-.308-7.712-.309-15.458-.755-23.136-1.699-6.874-.858-13.8-2.281-20.041-5.387-5.66-2.813-10.465-7.051-13.526-12.643-2.839-5.216-3.967-11.46-1.967-17.156 2.018-5.747 6.755-9.916 11.782-13.021 5.78-3.585 12.141-6.21 18.28-9.075 7.353-3.431 14.706-6.845 22.059-10.276 1.796-.841 3.591-1.682 5.404-2.522.564-.326.051-1.218-.547-.927Z"
      />
      <Path
        fill="#003188"
        d="M114.691 242.144a252.08 252.08 0 0 1 46.718 2.968 255.927 255.927 0 0 1 22.691 4.683c7.49 1.922 14.912 4.306 22.589 5.421 4.224.618 8.516.858 12.774.361 4.241-.498 8.55-1.956 12.842-1.03.65.138.924-.857.274-.995-3.694-.789-7.353.069-11.013.687-3.864.652-7.78.703-11.662.326-7.832-.755-15.407-3.106-22.982-5.13a252.649 252.649 0 0 0-45.948-7.771 253.463 253.463 0 0 0-26.283-.601c-.649.069-.649 1.098 0 1.081ZM214.641 279.286a118.65 118.65 0 0 1 18.656 10.893c2.992 2.145 5.848 4.478 8.721 6.794 2.77 2.23 5.609 4.409 8.772 6.056 3.506 1.818 7.387 2.951 11.372 2.711.65-.035.667-1.064 0-1.03-7.473.463-13.868-3.997-19.426-8.475-5.438-4.391-10.927-8.612-16.929-12.197a118.812 118.812 0 0 0-10.636-5.644c-.616-.275-1.129.617-.53.892Z"
      />
      <Path
        fill="#003188"
        d="M231.843 254.256a1485.938 1485.938 0 0 1 23.718 38.651 1168.31 1168.31 0 0 1 6.464 11.014c.325.566 1.214.052.889-.515a1458.809 1458.809 0 0 0-23.376-38.84c-2.257-3.602-4.514-7.205-6.788-10.808-.376-.566-1.266-.051-.907.498ZM219.856 255.559a98.034 98.034 0 0 1 18.708 28.479 103.396 103.396 0 0 1 3.403 9.161c.205.634 1.197.36.992-.275a99.025 99.025 0 0 0-15.955-30.571 96.15 96.15 0 0 0-6.429-7.531c-.445-.481-1.163.257-.719.737ZM112.828 235.196a149.713 149.713 0 0 0 15.065 4.615c.632.154.906-.841.273-.995a149.793 149.793 0 0 1-15.065-4.615c-.633-.223-.889.772-.273.995ZM191.163 255.645c.171 7.72.803 15.423 1.829 23.092.086.651 1.078.377.992-.275a203.743 203.743 0 0 1-1.795-22.817c0-.652-1.026-.652-1.026 0ZM168.522 281.327a534.106 534.106 0 0 1-18.673 27.054c-.291.395.188.824.581.755 3.745-.686 7.524-1.407 11.133-2.71 3.471-1.27 6.549-3.14 9.234-5.679 2.872-2.71 5.557-5.575 8.703-7.994 2.925-2.265 6.088-4.238 9.371-5.919a59.54 59.54 0 0 1 12.107-4.563c.633-.172.376-1.15-.274-.995a60.053 60.053 0 0 0-20.126 9.401c-3.095 2.213-5.9 4.752-8.567 7.445-1.42 1.424-2.839 2.865-4.463 4.049-1.522 1.115-3.198 2.024-4.942 2.762-3.968 1.664-8.243 2.453-12.449 3.225.188.258.393.498.581.755a523.065 523.065 0 0 0 18.673-27.054c.36-.566-.53-1.081-.889-.532Z"
      />
      <Path
        fill="#003188"
        d="M179.5 281.156a30.522 30.522 0 0 0-4.206 7.188c-.257.617.735.875.992.274a28.794 28.794 0 0 1 3.95-6.725c.393-.514-.325-1.252-.736-.737ZM170.591 282.614c-4.36 6.451-8.721 12.901-13.064 19.352-.376.548.513 1.063.889.514 4.361-6.45 8.721-12.901 13.065-19.351.376-.532-.513-1.047-.89-.515ZM237.555 268.443a704.96 704.96 0 0 1 18.023 30.177c.325.583 1.214.051.889-.515a715.17 715.17 0 0 0-18.023-30.176c-.359-.566-1.248-.052-.889.514ZM246.105 267.14c9.884-1.63 19.785-3.277 29.668-4.907 4.942-.823 9.884-1.63 14.826-2.453 4.412-.721 8.858-1.338 13.218-2.333 4.361-.995 8.619-2.556 12.124-5.421.513-.412-.222-1.15-.718-.721-3.163 2.59-7.045 4.032-10.978 4.992-4.241 1.03-8.584 1.613-12.894 2.333l-28.984 4.787-16.519 2.728c-.667.102-.393 1.098.257.995ZM108.877 271.84a145.963 145.963 0 0 0 15.561-8.578c.565-.36.052-1.235-.513-.892a152.233 152.233 0 0 1-15.561 8.578c-.598.275-.085 1.167.513.892ZM118.71 270.605a19.378 19.378 0 0 1 7.746-2.934c.65-.103.376-1.098-.273-.995a20.104 20.104 0 0 0-7.986 3.054c-.564.343-.051 1.235.513.875ZM275.602 254.993a10.33 10.33 0 0 1 4.566.498c.633.223.889-.772.274-.995a11.02 11.02 0 0 0-4.84-.532c-.649.069-.666 1.098 0 1.029ZM272.456 257.069h3.659c.667 0 .667-1.029 0-1.029h-3.659c-.65 0-.65 1.029 0 1.029ZM155.424 108.605c-5.421 4.598-9.491 10.637-11.765 17.379-.205.635.786.892.992.274a38.103 38.103 0 0 1 11.491-16.932c.513-.429-.222-1.15-.718-.721ZM153.32 163.417a96.082 96.082 0 0 1-6.036 12.815c-.325.583.564 1.098.889.515a97.516 97.516 0 0 0 6.139-13.056c.222-.617-.769-.892-.992-.274ZM146.395 171.738l-3.232 4.889c-.359.549.53 1.064.889.515l3.232-4.89c.359-.549-.53-1.063-.889-.514ZM244.703 156.52c1.026 2.351 2.377 4.495 4.001 6.468.428.515 1.146-.223.718-.72a26.836 26.836 0 0 1-3.847-6.262c-.257-.618-1.146-.086-.872.514ZM244.72 162.937l1.351 1.355c.461.463 1.197-.257.718-.72l-1.351-1.356c-.462-.48-1.18.258-.718.721ZM79.79 290.505a17.404 17.404 0 0 1 7.439-2.076c2.702-.137 5.113.549 7.712 1.201 2.325.601 4.566.395 6.908.069 2.326-.309 4.788-.635 6.857.738.548.36 1.061-.532.513-.893-2.052-1.355-4.48-1.235-6.822-.943-1.197.154-2.377.343-3.574.412-1.454.068-2.822-.155-4.224-.532-2.6-.721-5.096-1.253-7.798-1.047a18.634 18.634 0 0 0-7.507 2.196c-.598.292-.085 1.184.496.875ZM115.546 290.437h2.343c.667 0 .667-1.03 0-1.03h-2.343c-.666 0-.666 1.03 0 1.03ZM132.886 290.437h1.881c.667 0 .667-1.03 0-1.03h-1.881c-.667 0-.667 1.03 0 1.03ZM268.403 282.803c4.19-1.15 8.653-.361 12.894.051 4.446.429 8.875.892 13.303 1.458.65.086.65-.943 0-1.029-4.531-.566-9.097-1.046-13.645-1.492-4.241-.412-8.653-1.133-12.825.017-.633.188-.359 1.183.273.995ZM277.295 270.519a7.03 7.03 0 0 1 3.523-.291c.65.12.923-.875.274-.995a8.185 8.185 0 0 0-4.07.291c-.633.223-.359 1.218.273.995ZM300.295 277.673c.94-.154 1.881-.326 2.804-.48.65-.121.376-1.098-.273-.995-.941.154-1.881.325-2.805.48-.65.103-.376 1.098.274.995ZM324.679 262.233c.479-.12.992-.017 1.386.309.495.429 1.231-.292.718-.721-.667-.566-1.522-.789-2.377-.566-.633.155-.359 1.15.273.978ZM207.271 300.901c2.924-1.578 6.378 0 9.405.395 1.487.189 2.873.086 4.326-.223 1.385-.292 3.215-.841 4.258.429.427.515 1.146-.223.718-.721-.957-1.166-2.428-1.2-3.813-.977-1.796.274-3.403.737-5.233.514-3.386-.412-6.925-2.041-10.191-.291-.565.308-.052 1.2.53.874ZM84.612 226.858c-.359.017-.632.24-.666.601-.017.223.102.428.239.6a.872.872 0 0 0 .513.292c.325.051.616-.172.684-.498-.086.103-.154.206-.24.309.377-.275.48-.721.257-1.132a.822.822 0 0 0-1.026-.412c-.393.172-.547.583-.462.978.086.394.394.669.787.686.274.017.53-.24.513-.515a.527.527 0 0 0-.513-.514c.086.017.12.017.069.017-.035-.017-.018 0 .068.034-.069-.051.085.086.034.017.034.035.051.103.017.018.017.034.034.12.017.034-.017-.103 0 .086 0 .034v-.068c.034.068-.034.12 0 .034-.034.086-.051.103-.034.068.017-.034 0-.017-.051.052.068-.069-.103.069-.034.017-.018.017-.052.017-.069.034-.085 0-.103.018-.051 0-.034 0-.052 0-.086-.017.034.017.035.017-.017 0-.051-.017-.051-.017-.017 0-.068-.051-.085-.068-.051-.034.068.051-.017 0-.017-.034.017.017.017.034.034.051-.017-.017-.017-.051-.034-.069 0 .018 0 .035.017.035.017.034 0 .017 0-.069 0 .052-.017.103.017-.034-.017.086.068-.103.017-.034.017-.035.188-.172.051-.069a.53.53 0 0 0-.188.274c-.017.086.017-.051.034-.051a.445.445 0 0 1 .24-.189.292.292 0 0 1 .17 0c.052.017.07.017.035 0-.068-.017.137.069.069.017-.069-.034.102.103.05.035-.016-.017-.102-.12-.034-.035.018.018.052.069 0 0-.05-.085.018.035.018.052 0-.017-.017-.034-.017-.052.017.086.034.103 0 .206-.018.035-.035.069-.035.103-.17.137-.222.189-.136.155a.29.29 0 0 1-.086.034c-.103.017-.137.017-.068.017.273-.017.53-.223.513-.515-.035-.223-.24-.48-.53-.463ZM101.49 212.311h-.29c-.667 0-.667 1.029 0 1.029h.29c.65 0 .65-1.029 0-1.029h-.29c-.667 0-.667 1.029 0 1.029h.29c.65 0 .65-1.029 0-1.029ZM155.8 90.008c-.223-.531-.718-.789-1.283-.686-.496.086-.923.498-.923 1.03 0 .531.444.943.923 1.029.565.103 1.06-.138 1.283-.686.102-.258-.12-.567-.359-.635-.291-.086-.53.103-.633.36 0-.034.017-.051.051-.069l-.017.018c.034-.018.017-.018-.017 0 .051-.018.051-.018 0 0-.103.034.086 0-.034 0-.034 0-.154-.018-.051 0-.052-.018-.086-.018-.137-.035.137.052-.103-.051-.017-.017.034.017.017.017-.017-.017.034.051.034.051 0 0 0 .017.017.034.017.052-.017-.052-.017-.052 0 0-.017.12.034-.07-.017.05.051-.085-.052.035.017-.033-.103.103.085-.052.017-.017a.501.501 0 0 1 .102-.035c-.085.017 0 0 .052 0 .136 0-.086-.034.034 0 .051.017.051.017 0 0 .017 0 .017.017.034.017-.051-.034-.051-.034 0 0a.13.13 0 0 1-.034-.068c.102.257.342.446.633.36.256-.052.478-.36.376-.618ZM227.5 99.993v.034c0 .67 1.026.67 1.026 0v-.068c0-.67-1.026-.67-1.026 0v.034c0 .669 1.026.669 1.026 0v-.034c0-.67-1.026-.67-1.026 0v.068c0 .67 1.026.67 1.026 0v-.034c0-.652-1.026-.652-1.026 0ZM257.408 123.153a1.07 1.07 0 0 0-.547-1.149c-.411-.223-.906-.189-1.266.137a.49.49 0 0 0-.136.497c.171.532.718.79 1.248.652.239-.068.462-.223.598-.446.206-.343.086-.703-.256-.909-.445-.257-1.043-.12-1.368.257a.95.95 0 0 0 .222 1.424c.479.309 1.214.189 1.488-.343.12-.24.068-.566-.188-.703-.222-.137-.582-.069-.701.188-.069.121.068-.085-.017.018.102-.138-.052.103.068-.035-.017.018-.171.035-.017.017h-.051c.068 0-.052-.017-.069-.017-.068-.017.086.018 0 0 .051.035.052.052.034.017-.034-.034-.017-.017.018.035-.018-.034-.035-.052-.018 0 .018.034.018.034 0-.017v.068c0 .017-.017.035-.017.052.017-.035.035-.052 0-.017l.035-.035c-.103.069.017 0 .034-.017-.103.052 0 0 .034 0-.12.034-.017-.017.034 0-.103-.051.017.069-.068-.017.085.069-.069-.069.017.017-.051-.171-.086-.326-.137-.497-.017.085.034-.035.051-.052-.051.069.052-.017 0 0-.051.017.086-.017 0 0-.119.017.103.017-.017 0-.017 0-.119.017-.051 0 .034 0 .034 0 0 0 .017 0 .034.017.051.017-.034 0-.12-.085-.017 0 .017.017.017.035.034.052-.034-.052-.017-.052 0 .017-.051.171-.085.326-.136.497-.035.035-.052.035-.018.018.035-.018.017-.018-.034 0 .017 0 .034 0 .034-.018-.068 0-.068.018-.034 0 .034 0 .034 0-.034-.017.017 0 .034 0 .034.017.051.018.052.018.017 0-.034-.017-.034-.017.017.018.018 0 .12.068.052.034-.052-.034.034.051-.017-.017.034.051.034.103.017.034.017.086 0-.034 0-.069-.052.275.068.549.359.635.342.086.667-.068.718-.343ZM321.088 164.052c-.085-.034-.119-.052-.068-.034-.068-.069-.103-.086-.068-.052-.052-.086-.069-.103-.052-.051-.034-.103-.051-.12-.034-.069.017.069-.017-.154-.017-.034 0 .085.034-.155 0-.035-.017.086.068-.137.017-.034-.034.069.086-.103.034-.051l.052-.052c-.052.017-.017.017.068-.034-.051.017-.017 0 .086-.017.102.017.136.017.068.017.085.034.12.051.068.034.069.069.103.086.069.052.051.085.068.103.051.051.034.103.051.12.034.069-.017-.086.017.137.017.051v-.034c-.017.103-.017.12 0 .068.017-.12-.051.103-.017.035.052-.103-.068.086-.017.034l-.051.052c.051-.018.017-.018-.069.034.052-.017.018 0-.085.017-.103-.017-.137-.034-.086-.017.257.069.565-.086.633-.36.069-.258-.085-.567-.359-.635-.427-.103-.821.171-.94.583-.12.395.085.858.495.978a.77.77 0 0 0 .924-.566c.12-.429-.069-.841-.496-.995-.257-.086-.564.103-.633.36-.034.292.103.549.376.635Z"
      />
      <Path
        stroke="#003188"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M315.839 245.232H189.282l46.067-69.892h126.557l-46.067 69.892ZM245.028 178.342h87.415"
      />
      <Path
        fill="#003188"
        d="M201.269 91.656c3.368 1.664 7.404 1.097 10.448-1.133.992-.72 1.915-1.733 2.137-3.07-2.838 1.578-6.053 2.916-9.114 1.852-.838-.291-1.624-.755-2.411-1.218-.838-.497-1.693-1.355-2.531-1.853.291 1.75.804 3.826 1.471 5.422Z"
      />
      <Path
        fill="#003188"
        d="M201.132 91.878a10.212 10.212 0 0 0 7.626.446c2.258-.754 4.823-2.299 5.336-4.82a.26.26 0 0 0-.377-.292c-2.205 1.218-4.668 2.385-7.25 2.179-1.368-.103-2.582-.686-3.745-1.39-.992-.583-1.812-1.39-2.787-2.007-.205-.137-.411.086-.376.292.307 1.835.752 3.67 1.47 5.404.12.308.616.171.496-.138-.701-1.732-1.146-3.568-1.47-5.404-.12.103-.257.19-.377.292 1.146.72 2.121 1.647 3.318 2.299 1.094.6 2.223 1.063 3.488 1.15 2.668.205 5.233-.996 7.507-2.248-.12-.103-.256-.189-.376-.292-.479 2.42-3.061 3.877-5.233 4.53a9.713 9.713 0 0 1-6.977-.481c-.307-.103-.564.343-.273.48Z"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M287.692 86.08c8.519 0 15.424-6.928 15.424-15.474 0-8.547-6.905-15.475-15.424-15.475-8.518 0-15.424 6.928-15.424 15.475 0 8.546 6.906 15.474 15.424 15.474Z"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M287.692 89.03c10.143 0 18.366-8.249 18.366-18.425s-8.223-18.425-18.366-18.425c-10.143 0-18.365 8.25-18.365 18.425 0 10.176 8.222 18.425 18.365 18.425ZM292.583 94.503l-2.035-5.284M305.887 117.269l2.907 7.582c.342.91-.274 1.973-1.368 2.402-1.095.412-2.275.034-2.617-.875l-1.932-5.044M294.532 87.692l1.454 3.809M186.785 52.18c-3.813 4.838-7.079 10.26-8.499 16.264-1.419 6.004-.803 12.678 2.617 17.807.342.515.889 1.08 1.487.892.411-.137.633-.6.736-1.03a5.616 5.616 0 0 0-.257-3.585 33.705 33.705 0 0 0 2.958 7.91c.24.445.531.925 1.009 1.08.65.223 1.368-.309 1.625-.944.256-.652.154-1.372.068-2.058.479 1.664.975 3.345 1.933 4.786.957 1.441 2.479 2.608 4.206 2.694M198.977 57.481c-2.154 11.838-1.265 24.224 2.548 35.65-.325.669-1.368.24-1.881-.31a12.379 12.379 0 0 1-2.548-3.98M192.873 83.146a28.194 28.194 0 0 0 4.48 12.472"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M189.282 55.663c-3.078 8.784-3.386 18.51-.872 27.466"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M188.769 70.846a35.037 35.037 0 0 0 .65 8.56M182.339 66.677a41.536 41.536 0 0 0-.342 9.658M196.344 58.322a42.273 42.273 0 0 0-1.419 16.487M196.378 54.273a11.316 11.316 0 0 0 6.703 5.199c2.788.772 5.883.394 8.414-1.013.307-.171.632-.377.752-.703.291-.755-.633-1.458-1.436-1.492-1.899-.07-3.369 1.818-3.694 3.705-.051.309-.086.635.051.91.137.308.445.514.753.668 1.419.704 3.095.567 4.651.275 4.754-.91 9.234-3.277 12.654-6.725"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M199.114 52.833a7.084 7.084 0 0 0 3.984 3.002M225.209 52.18c-.411-5.54-5.695-10.516-10.825-12.626-5.13-2.127-11.149-1.561-16.108.926-4.959 2.488-8.892 6.76-11.559 11.649M226.218 61.153c2.308 8.68 3.112 14.084 4.189 22.988.257 2.145.223 4.838-1.693 5.833-1.898.995-4.326-.686-4.805-2.779-.102-.429-.102-.995.291-1.218.496-.292 1.077.206 1.385.703 1.146 1.887 1.248 4.598-.325 6.16-1.573 1.56-4.856.994-5.318-1.185"
      />
      <Path
        stroke="#9A4AFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M224.149 74.14a18.63 18.63 0 0 0 .735 8.114M293.369 64.464l-3.3 10.756M295.627 65.888l-2.822 8.629M282.904 217.543c3.995 0 7.233-3.249 7.233-7.257 0-4.008-3.238-7.257-7.233-7.257-3.995 0-7.233 3.249-7.233 7.257 0 4.008 3.238 7.257 7.233 7.257Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h430v342H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent