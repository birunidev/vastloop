import React from "react"
import { Row, Col } from "react-bootstrap"

function ExpertiseCard({ title, img }) {
  return (
    <div className="expertise-card">
      <div className="expertise-card__img">
        <img src={img} alt={title + " icon"} />
      </div>
      <div
        className="expertise-detail font-weight-bold text-gagalin text-white h5"
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
    </div>
  )
}

export default function ExpertiseCards() {
  return (
    <Row>
      <Col></Col>
    </Row>
  )
}
