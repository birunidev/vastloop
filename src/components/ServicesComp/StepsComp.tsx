import React from "react"
import { Row, Col } from "react-bootstrap"

let steps = [
  {
    icon: "sketch.svg",
    title: "Brand architecture",
    text:
      "Vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "paint.svg",
    title: "Visual Identity",
    text:
      "We provide imagery and graphical information that distinguish the brand in consumers' minds:  we analyze the brand, its market,goals, customers, and message, then we create a positive brand image that brings in consistent sales and business growth.",
  },
  {
    icon: "coin.svg",
    title: "New Logo",
    text:
      "Our graphic designers, and art directors can create an appealing, and memorable logo that expresses your brand’s personality.",
  },
  {
    icon: "industry.svg",
    title: "Positioning",
    text:
      "Our team is made of experts who create a strategic process that involves marketing the brand in a certain way that establishes an identity within the minds of the target consumers",
  },
  {
    icon: "blog.svg",
    title: "Go to market strategy",
    text:
      "Vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "We make your messaging sound conversational and reflecting to your brand’s personality. our tactics make your target audience feel an emotional connection to your product or service.",
  },
]

export function StepCard({ icon, title, text, maxWidth }) {
  return (
    <div className="step-blurb mx-auto my-4" style={{ maxWidth: maxWidth }}>
      <div className="step-blurb__img trans-scale cursor-pointer">
        <img src={`/${icon}`} alt={text + " icon"} />
      </div>
      <div className="step-blurb__detail mt-5">
        <p className="h4 text-warning font-weight-bold text-center">{title}</p>
        <p className="text-white line-height-2 center-justified">{text}</p>
      </div>
    </div>
  )
}

export default function StepsComp() {
  return (
    <Row className="justify-content-between mt-5">
      {steps.map((step, index) => {
        return (
          <Col md={5} lg={4} key={index}>
            <StepCard
              title={step.title}
              text={step.text}
              icon={step.icon}
              maxWidth={220}
            />
          </Col>
        )
      })}
    </Row>
  )
}
