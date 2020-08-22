import React from "react"
import { Row, Col } from "react-bootstrap"
import BlurbCheck from "./../UI/BlurbCheck"

let data = [
  {
    img: "ranking.svg",
    text:
      "Increase the rankings for your website and your Google My Business (GMB) listing.",
  },
  {
    img: "problem.svg",
    text:
      "Increase your company's recognition online, which leads to building your brand awarness.",
  },
  {
    img: "review.svg",
    text:
      "Reach customers at the right time when they are looking for your product and ready to buy it.",
  },
  {
    img: "return-on-investment.svg",
    text: "Improve your digital marketing ROI.",
  },
  {
    img: "target-audience.svg",
    text:
      "Maintain a top position and guarantee high conversation rates with your target audience.",
  },
]

export default function SeoHelp() {
  return (
    <Row>
      <Col md={12}>
        {data.map((seo, index) => {
          return <BlurbCheck img={seo.img} key={index} text={seo.text} />
        })}
      </Col>
    </Row>
  )
}
