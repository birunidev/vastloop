import React from "react"
import { Row, Col } from "react-bootstrap"
import Media from "react-media"
import { GLOBAL_MEDIA_QUERIES } from "./../layout"

let whychooses = [
  {
    icon: "why-1.svg",
    text:
      "We are cost effective: you can have access to a full team of professionals. No matter how is the size of your brand, we will produce a budget that suits the specific requirements of your business.",
  },
  {
    icon: "why-2.svg",
    text:
      "We are set up with all the necessary tools to get our tasks done. Our team is experienced enough to easily use them. ",
  },
  {
    icon: "why-3.svg",
    text:
      "You save money and time with us: we work with you to determine your marketing goals , then set your budget to your immediate needs. You can focus on other business tasks while making sure we are growing your brand.",
  },
  {
    icon: "why-4.svg",
    text:
      "Vast loop agency cooperates with distributers and agents who can represent your brand in other countries, and  globally grow your business.",
  },
]

function WhyChooseCard({ text, icon }) {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => {
        return (
          <div className="why-choose-card text-white row align-items-center">
            <div className="col-md-4">
              <div className="why-choose-card__img mx-auto my-4">
                <img src={`/${icon}`} alt={icon} className="mx-auto" />
              </div>
            </div>
            <div className="col-md-6">
              <div
                dangerouslySetInnerHTML={{ __html: text }}
                className={`text-justify ${matches.large ? "h4" : "p"}`}
              ></div>
            </div>
            <div className="col-md-2">
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
      }}
    </Media>
  )
}

export default function WhyChooseCards() {
  return (
    <Row className="mt-5 justify-content-between">
      {whychooses.map((choose, index) => {
        return (
          <Col
            className="mt-6"
            md={12}
            key={index}
            data-sal={`slide-right`}
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
