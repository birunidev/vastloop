import React from "react"

export default function MyJumbotron({ background, children }) {
  return (
    <div
      className="custom-jumbotron"
      style={{ background: `url('${background}')` }}
    >
      {children}
    </div>
  )
}
