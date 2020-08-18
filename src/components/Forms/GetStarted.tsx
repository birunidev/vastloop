import React from "react"

export default function GetStarted() {
  return (
    <form
      className="get-started-form"
      data-sal="zoom-in"
      data-sal-delay="2000"
      data-sal-easing="ease"
      data-sal-duration="2000"
    >
      <div className="get-started-input">
        <div className="form-group-custom">
          <input className="form-control-custom" placeholder="YOUR NAME" />
        </div>
        <div className="form-group-custom">
          <input className="form-control-custom" placeholder="EMAIL ADDRESS" />
        </div>
        <div className="form-group-custom">
          <input className="form-control-custom" placeholder="PHONE NUMBER" />
        </div>
      </div>
      <div className=" get-started-btn-wrapper">
        <button className="get-started-btn">GET STARTED</button>
      </div>
    </form>
  )
}
