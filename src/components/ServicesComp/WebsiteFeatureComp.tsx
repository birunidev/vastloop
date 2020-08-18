import React from "react"
import { Row, Col } from "react-bootstrap"
import BlurbCheck from "./../UI/BlurbCheck"

let data = [
  {
    img: "animation.svg",
    text: "Use a unique animation to create a memorable website experience",
  },
  {
    img: "ux.svg",
    text:
      "Design your website in a style that catches the visitors attention and lets them keep clicking and scrolling to know more",
  },
  {
    img: "server.svg",
    text:
      "Provide fast Web Hosting by making the pages load speeds engaging and drive the kind of actions we want visitors to take",
  },
]

export default function WebsiteFeatureComp() {
  return (
    <Row>
      <Col md={12}>
        {data.map((feature, index) => {
          return <BlurbCheck img={feature.img} text={feature.text} />
        })}
      </Col>
    </Row>
  )
}
