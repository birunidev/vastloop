import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "friends.svg",
    title: "Welcome emails:",
    text:
      "They are a great way to show your audience that you’ve received their requests and that you’re excited to have them as a part of your subscriber list.",
  },
  {
    icon: "mail-service-1.svg",
    title: "“We haven’t seen you in a while!” emails",
    text:
      "These emails let previous customers know that they’re still on your list and entice them with new products and special offers.",
  },
  {
    icon: "promotion.svg",
    title: "Promotional emails",
    text:
      "These are meant to get recipients excited about your new products or services — excited enough that they want to purchase your new items.",
  },
  {
    icon: "mail-service-2.svg",
    title: "Weekly or monthly newsletter",
    text:
      "These kinds of emails make it easy for you to keep users up-to-date with the latest happenings at your company. Whether it be new employees, new products, or events that you’re hosting in the future.",
  },
]

export default function EmailComp() {
  return (
    <Row className="mt-5">
      {data.map((service, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard
              title={service.title}
              text={service.text}
              icon={service.icon}
            />
          </Col>
        )
      })}
    </Row>
  )
}
