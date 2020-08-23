import React from "react"
import { Row, Col } from "react-bootstrap"

let steps = [
  {
    icon: "sketch.svg",
    title: "Brand architecture",
    text:
      "Vast loop agency creates an organized structure of the companies’ brands, sub-brands, products and services to show how they are connected like a family tree: each member is related, but unique.",
  },
  {
    icon: "paint.svg",
    title: "Visual Identity",
    text:
      "We provide imagery and graphical informations that distinguish the brand in consumers' minds:  we analyze the brand, its market, goals, customers, and message, then we create a positive brand image that brings in consistent sales and business growth.",
  },
  {
    icon: "coin.svg",
    title: "New Logo",
    text:
      "Our graphic designers and art directors can create an appealing and memorable logo that expresses your brand’s personality.",
  },
  {
    icon: "industry.svg",
    title: "Positioning",
    text:
      "Our team is made of experts who create a strategic process that involves marketing the brand in a certain way that establishes an identity within the minds of the target consumers.",
  },
  {
    icon: "blog.svg",
    title: "Go to market strategy",
    text:
      "We have experts able to create a unique action plan that specifies how to reach your target customers: This includes marketing, a sales method, your ideal customer base, an attractive price, and the unique problem your product solves or improves",
  },
  {
    icon: "support.svg",
    title: "Messaging",
    text:
      "We make your messaging sound conversational and reflecting to your brand’s personality. Our tactics make your target audience feel an emotional connection to your product or service.",
  },
]

export function StepCard({ icon, title, text, maxWidth = "100%" }) {
  return (
    <div
      className="step-blurb mx-auto my-5 row "
      style={{ maxWidth: maxWidth }}
    >
      <div
        className="col-md-4"
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease-out"
        data-sal-duration="1000"
      >
        <div className="step-blurb__img trans-scale cursor-pointer">
          <img src={`/${icon}`} alt={text + " icon"} />
        </div>
      </div>
      <div
        className="col-md-6"
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease-out"
        data-sal-duration="1000"
      >
        <div className="step-blurb__detail ">
          <p className="h3 text-warning font-weight-bold text-center text-md-left">
            {title}:
          </p>
          <p className="text-white line-height-2 text-justify h5">{text}</p>
        </div>
      </div>
      <div
        className="col-md-2"
        data-sal="slide-up"
        data-sal-delay="1000"
        data-sal-easing="ease-out"
        data-sal-duration="1000"
      >
        <img
          width={200}
          className="d-none d-md-block"
          style={{ transform: "translateY(-15px)" }}
          src="/check.svg"
          alt="Check Icon"
        />
      </div>
    </div>
  )
}

export default function StepsComp() {
  return (
    <Row className="justify-content-between mt-5">
      {steps.map((step, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard title={step.title} text={step.text} icon={step.icon} />
          </Col>
        )
      })}
    </Row>
  )
}
