import React from "react"
import Media from "react-media"
import { GLOBAL_MEDIA_QUERIES } from "./../layout"

export default function BlurbCheck({ img, text }) {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => {
        return (
          <div className="blurb-check d-md-flex flex-md-row-reverse justify-content-between align-items-center mt-5 mx-auto">
            <div className="blurb-check__img mx-auto">
              <img src={`/${img}`} alt={img + " icon"} />
            </div>
            <p
              className={`text-check text-white ${
                matches.large
                  ? "h4 w-50 line-height-2"
                  : matches.medium
                  ? "text-justify h4"
                  : "w-75 center-justified h5"
              } font-weight-600  mt-5 mx-auto`}
            >
              {text}
            </p>
          </div>
        )
      }}
    </Media>
  )
}
