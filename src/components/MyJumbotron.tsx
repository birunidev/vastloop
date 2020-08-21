import React from "react"

export default function MyJumbotron({ background, children, classes = "" }) {
  return (
    <div
      className={`custom-jumbotron ${classes}`}
      style={{
        background: `url('${background}') no-repeat`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  )
}
