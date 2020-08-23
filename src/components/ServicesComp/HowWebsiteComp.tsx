import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "touch.svg",
    title: "We make it interactive",
    text:
      "Because it takes less than 10 seconds for visitors to decide whether they trust your company just from your website design, our team is capable of designing interactive elements to keep the users engaged on your pages.",
  },
  {
    icon: "graphic-design.svg",
    title: "We use original illustrations",
    text:
      "Our creative graphic designers can create original illustrations that show a unique brand personality, and develop a unified visual experience for your website.",
  },
  {
    icon: "computer.svg",
    title: "Our sites are mobile friendly",
    text:
      "Mobile devices are now a regular part of the everyday life. They surpassed the usage of computers. That is why we provide sites that are adaptable to viewing from any mobile device.",
  },
  {
    icon: "ecommerce.svg",
    title: "Our websites are simple to navigate",
    text:
      "If your site isn’t easy to navigate, potential leads will lose interest and exit the site before they find what they are looking for. Our WordPress sites can hold the attention of visitors . They are simple, easy to navigate, and have well organized pages.",
  },
]

export default function HowWebsiteComp() {
  return (
    <Row className="justify-content-between mt-5">
      {data.map((web, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard icon={web.icon} title={web.title} text={web.text} />
          </Col>
        )
      })}
    </Row>
  )
}
