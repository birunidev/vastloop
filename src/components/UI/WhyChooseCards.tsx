import React from "react"
import { Row, Col } from "react-bootstrap"

let whychooses = [
  {
    icon: "why-1.svg",
    text:
      "Cost effective: you can have access to a full team of professionals. No matter how is the size of your brand, we will produce a budget that suits the specific requirements of your business.",
  },
  {
    icon: "why-2.svg",
    text:
      "We are set up with all the necessary tools to get our tasks done. Our team is experienced enough to easily use them. ",
  },
  {
    icon: "why-3.svg",
    text:
      "You save money and time with us: we work with you to determine your marketing goals , then set your budget to your immediate needs. You can focus on other business operating while making sure we are growing your brand.",
  },
  {
    icon: "why-4.svg",
    text:
      "Vast loop agency cooperates with distributers and agents  who can represent your brand in other countries, and  globally grow your business.",
  },
]

function WhyChooseCard({ text, icon }) {
  return (
    <div className="why-choose-card text-white d-flex ">
      <div className="why-choose-card__img">
        <img width={100} src={`/${icon}`} alt={icon} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="ml-5 text-justify"
      ></div>
    </div>
  )
}

export default function WhyChooseCards() {
  return (
    <Row className="mt-5 justify-content-between">
      {whychooses.map((choose, index) => {
        return (
          <Col
            className="mt-4"
            md={5}
            key={index}
            data-sal={`${
              index === 0 || index === 2 ? "slide-right" : "slide-left"
            }`}
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <WhyChooseCard icon={choose.icon} text={choose.text} />
          </Col>
        )
      })}
    </Row>
  )
}
