import React from "react"
import { Link } from "gatsby"

export default function SuccessUI() {
  return (
    <div
      className="text-white px-4 pt-4 pb-2 mx-auto"
      style={{ background: "black", maxWidth: 700 }}
    >
      <p className="h1 font-weight-bold text-warning">Done!</p>
      <p>
        Thank you for considering Vast l<span className="text-warning">oo</span>
        p for your brand growth. We will contact you within two business days.
      </p>
      <p className="font-weight-600">What you can do now:</p>
      <ul>
        <li className="mb-3">
          <a href="tel:+6282144457053" className="text-white font-weight-bold ">
            <img
              src="/phone-yellow.svg"
              width={40}
              className="mr-2"
              alt="Phone Icon"
            />
            Call +62 821-4445-7053
          </a>
        </li>
        <li className="mb-3">
          <Link to="/services" className="text-white font-weight-bold">
            <img
              src="/services.svg"
              width={40}
              className="mr-2"
              alt="Services Icon"
            />
            Browse our services
          </Link>
        </li>
      </ul>
    </div>
  )
}
