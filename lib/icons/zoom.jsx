import * as React from "react"
const Zoom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    viewBox="0 0 80 80"
    {...props}
  >
    <path
      fill="#8bb7f0"
      stroke="#4e7ab5"
      strokeMiterlimit={10}
      d="M53.5 75.5h-27c-12.15 0-22-9.85-22-22v-27c0-12.15 9.85-22 22-22h27c12.15 0 22 9.85 22 22v27c0 12.15-9.85 22-22 22z"
    />
    <path
      fill="#fff"
      stroke="#4e7ab5"
      strokeMiterlimit={10}
      d="M58.31 51.5a2.19 2.19 0 0 1-1.425-.527l-4.639-3.976A5.002 5.002 0 0 1 50.5 43.2v-6.4a5 5 0 0 1 1.746-3.796l4.639-3.976a2.19 2.19 0 0 1 3.615 1.663v18.62a2.19 2.19 0 0 1-2.19 2.189zM43.5 51.5h-16a8 8 0 0 1-8-8v-11a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v11a4 4 0 0 1-4 4z"
    />
  </svg>
)
export default Zoom
