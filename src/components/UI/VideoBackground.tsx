import React from "react"

export default function VideoBackground({ children, video }) {
  return (
    <div className="video-container">
      <video loop autoPlay muted>
        <source src={`/${video}`} type="video/mp4" />
      </video>
      <div className="container h-100">
        <div className="d-flex h-100 align-items-center mt-10">
          <div className="w-100 text-white">{children}</div>
        </div>
      </div>
    </div>
  )
}
