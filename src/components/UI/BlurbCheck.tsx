import React from "react"
import Media from "react-media"

export default function BlurbCheck({ img, text }) {
  return (
    <Media
      queries={{
        medium: "(min-width: 768px)",
      }}
    >
      {matches => {
        return (
          <div className="blurb-check d-md-flex flex-md-row-reverse justify-content-between align-items-center mt-5 mx-auto">
            <div className="blurb-check__img mx-auto">
              <img src={`/${img}`} alt={img + " icon"} />
            </div>
            <p
              className={`text-check text-white ${
                matches.medium ? "text-justify" : "centered-justify"
              } font-weight-600 h4 w-75 mt-5 mx-auto`}
            >
              {text}{" "}
              <img
                style={{ transform: "translateY(-5px)" }}
                src="/check.svg"
                width="50"
                alt="Check icon"
              />
            </p>
          </div>
        )
      }}
    </Media>
  )
}
