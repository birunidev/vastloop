import React from "react"
import { Row, Col } from "react-bootstrap"

let steps = [
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
  {
    icon: "sketch.svg",
    title: "Brand archicture",
    text:
      "vast loop agency creates an organized structure of the companies’ brands ,sub-brands, products and services to show how they are connected like a family tree : each member is related, but unique.",
  },
]

function StepCard({ img, title, text }) {
  return (
    <div className="step-blurb">
      <div className="step-blurb__img">
        <img src={img} alt="" />
      </div>
      <div className="step-blurb__detail mt-4">
        <p className="h4 text-warning font-weight-bold">{title}</p>
        <p className="font-weight-600 ">{title}</p>
      </div>
    </div>
  )
}

export default function StepsComp() {
  return <Row>{}</Row>
}
