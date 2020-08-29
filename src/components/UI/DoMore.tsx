import React from "react"
import { Link } from "gatsby"

export default function DoMore({ title }) {
  return (
    <div
      style={{ marginTop: 80 }}
      className="text-center"
      data-sal="zoom-in"
      data-sal-delay="500"
      data-sal-easing="ease-out"
      data-sal-duration="1000"
    >
      <p className="h2 mb-5 font-weight-bold text-center text-gagalin text-white">
        We do more than just <span className="text-warning">{title}.</span>{" "}
        <br /> Explore our different digital marketing services.
      </p>
      <Link to="/services" className="btn btn-warning btn-lg font-weight-bold">
        Our Services
      </Link>
    </div>
  )
}
