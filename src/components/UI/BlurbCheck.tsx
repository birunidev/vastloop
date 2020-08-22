import React from "react"
import Media from "react-media"
import { GLOBAL_MEDIA_QUERIES } from "./../layout"

export default function BlurbCheck({ img, text }) {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => {
        return (
          <div className="blurb-check row justify-content-between align-items-center mt-5 mx-auto">
            <div className="col-md-4">
              <div
                className="blurb-check__img mx-auto"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                <img src={`/${img}`} alt={img + " icon"} />
              </div>
            </div>
            <div className="col-md-6">
              <p
                className={`text-white ${
                  matches.large
                    ? "h4 line-height-2"
                    : matches.medium
                    ? "text-justify h4"
                    : "center-justified h5"
                } font-weight-600 mt-5 mx-auto`}
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                {text}
              </p>
            </div>
            <div
              className="col-md-2"
              data-sal="slide-up"
              data-sal-delay="1000"
              data-sal-easing="ease-out"
              data-sal-duration="1000"
            >
              <img
                width={180}
                className="d-none d-md-block"
                style={{ transform: "translateY(-15px)" }}
                src="/check.svg"
                alt="Check Icon"
              />
            </div>
          </div>
        )
      }}
    </Media>
  )
}
