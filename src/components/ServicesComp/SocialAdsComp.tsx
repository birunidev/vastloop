import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "fb-ads.svg",
    title: "Facebook advertising services",
    text:
      "We use Facebook advertising to offer you the opportunity to reach your desired audience and sell directly to them: target B2C and B2B audiences.",
  },
  {
    icon: "instagram-ads.svg",
    title: "Instagram advertising services",
    text:
      "We create effective Instagram ads and target them at relevant audiences to increase website traffic and conversions.",
  },
  {
    icon: "pinterest-ads.svg",
    title: "Pinterest advertising services",
    text:
      "We use pinterest to give your business the opportunity to promote to people who are in the act of searching for your product. Considering this, traffic from Pinterest may be more qualified than other social media websites. ",
  },
  {
    icon: "in-service.svg",
    title: "LinkedIn advertising services",
    text:
      "We advertise your business to decision makers and high-level executives through LinkedIn.",
  },
]

export default function SocialAdsComp() {
  return (
    <Row className="justify-content-between mt-5">
      {data.map((step, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard title={step.title} text={step.text} icon={step.icon} />
          </Col>
        )
      })}
    </Row>
  )
}
