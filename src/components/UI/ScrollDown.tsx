import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function ScrollDown({ toScroll }) {
  return (
    <div className="scroll-down text-center mb-n4 mt-3">
      <div className="animate-scroll">
        <img
          onClick={() => {
            scrollTo(`${toScroll}`)
          }}
          src="/scroll-down.svg"
          alt="Scroll Down Icon"
          className="cursor-pointer"
        />
      </div>
      <p className="text-last-center text-white">Scroll down to know more.</p>
    </div>
  )
}
