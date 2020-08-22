import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "competitor.svg",
    title: "We get to know your competition",
    text:
      "We will help you catch the best chance of standing out in your potential clients’ inbox. We make researches about your competition, and create a custom email marketing strategy that drives even more results.",
  },
  {
    icon: "research.svg",
    title: "We research your industry",
    text:
      "We get all the necessary knowledge  about your industry to create a successful email marketing campaign: we will know details like how much people spend in your industry yearly, how your industry stacks up in the scheme of ecommerce, and more.",
  },
  {
    icon: "cinema.svg",
    title: "We learn about your audience",
    text:
      "We study details like age group, gender, geographic location, and more. This helps us understand how your emails should look, the tone they should promote, and the best way to sell your products in an email-based format.",
  },
]

export default function EmailSuccessComp() {
  return (
    <Row className="mt-5">
      {data.map((success, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard
              title={success.title}
              text={success.text}
              icon={success.icon}
            />
          </Col>
        )
      })}
    </Row>
  )
}
