import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let contentServices = [
  {
    icon: "framework.svg",
    title: "Content marketing reporting",
    text:
      "Our agency will send content marketing reports each month to breakdown the performance of our services. The main metrics we look at will be the increased website traffic and time-on-site for each new user.",
  },
  {
    icon: "subs.svg",
    title: "Content development",
    text:
      "The content that we develop will be unique to your business and published to your website. All contents will be published to a WordPress blog or a similar CMS. If your content is hosted on another website, we can create a WordPress blog and add it to your website.",
  },
  {
    icon: "content.svg",
    title: "Content distribution",
    text:
      "Our content marketing services include automatic distribution of your content to social media platforms, such as Facebook, Twitter and Google Plus. For more robust content distribution, we recommend using a combination of our social media management services, social media advertising services, and/or our email marketing services. These additions will help you build an audience to promote your content too.",
  },
  {
    icon: "subscription.svg",
    title: "Content marketing strategy",
    text:
      "The first step our content marketing agency will take with your business is to craft a unique strategy. We will research your buyer’s persona, and learn more about your customers. This will help us write a content that appeals to them. In addition, we will develop a blog calendar, allowing you to see what topics we will be writing about and when they will be published. Finally, before publishing any deliverables, we will send all the contents to you in advance  to approve.",
  },
]

export default function ContentComp() {
  return (
    <Row className="justify-content-between mt-5">
      {contentServices.map((service, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          </Col>
        )
      })}
    </Row>
  )
}
