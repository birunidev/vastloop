import React from "react"
import { Row, Col } from "react-bootstrap"

let partners = [
  {
    img: "f4s.png",
    name: "F4S Company",
  },
  {
    img: "s2s.png",
    name: "S2s Company",
  },
  {
    img: "sensatia.png",
    name: "Sensatia Company",
  },
  {
    img: "zaful.png",
    name: "Zaful Company",
  },
]

function Partner({ img, name }) {
  return (
    <div
      className="partner-pic-wrapper"
      data-sal="slide-up"
      data-sal-delay="500"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <img src={`/team/${img}`} alt={name} />
    </div>
  )
}

export default function Partners() {
  return (
    <Row className="mt-5">
      <Col>
        <p className="font-weight-600"> Trusted by:</p>
      </Col>

      <div className="w-100"></div>
      <Col>
        <div className="partner-wrapper d-flex align-items-center">
          {partners.map((partner, index) => {
            return <Partner img={partner.img} key={index} name={partner.name} />
          })}
        </div>
      </Col>
    </Row>
  )
}
