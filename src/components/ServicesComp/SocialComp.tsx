import React from "react"
import { BlurbCommerce } from "../UI/BlurbCommerce"
import { Row, Col } from "react-bootstrap"
import { GLOBAL_MEDIA_QUERIES } from "./../layout"
import Media from "react-media"

let data = [
  {
    icon: "electronics.svg",
    title: "Facebook Marketing",
    text:
      "Facebook is the #1 social media platform used by businesses to interact and engage with their customers. We offer: ",
    lists: [
      "Facebook Strategy Development.",
      "Facebook original Feed Creation.",
      "Facebook Page Growth.",
      "Facebook management Reporting.",
    ],
  },
  {
    icon: "ig-service.svg",
    title: "Instagram Marketing",
    text:
      "We use Instagram to enable brands to humanize their content, showcase products, and inspire their audience. We offer: ",
    lists: [
      "Instagram Marketing Strategy",
      "Instagram Page Growth",
      "Instagram original feed creation",
      "Instagram Management Reporting",
    ],
  },
  {
    icon: "in-service.svg",
    title: "LinkedIn Marketing",
    text:
      "Linkedin marketing enables us to generate leads to our clients, and establish strategic partnerships. Our services include",
    lists: [
      "LinkedIn Marketing Strategy",
      "LinkedIn original Content Creation",
      "LinkedIn Management Reporting",
      "LinkedIn Monitoring",
    ],
  },
  {
    icon: "twitter-service.svg",
    title: "Twitter Marketing",
    text:
      "We can help businesses to build trust and relationship with their target audiences through Twitter Marketing. Our services are:",
    lists: [
      "Twitter Marketing Strategy",
      "Twitter Marketing Reporting",
      "Twitter original Content Creation",
      "Twitter Monitoring",
    ],
  },
  {
    icon: "youtube-service.svg",
    title: "Youtube marketing",
    text:
      "We offer YouTube marketing services to present a unique content that attracts viewers and let them consume and share it. Our services innclude:",
    lists: [
      "Video Optimization",
      "Original Video content",
      "Video reporting",
      "Videos channel Customization",
    ],
  },
  {
    icon: "pin-service.svg",
    title: "Pinterest Marketing",
    text:
      "We Implement the best Pinterest marketing service to increase your business sales and brand awareness. We offer:",
    lists: [
      "Pinterest Marketing Strategy",
      "Pinterest Management Reporting",
      "Pinterest Pin Creation",
      "Pinterest Optimization",
    ],
  },
  {
    icon: "tiktok-service.svg",
    title: "TikTok marketing",
    text:
      "Tiktok allows your audience to explore different aspects of your business, such as what makes you fun and interesting. We offer:",
    lists: [
      "TikTok Marketing Strategy",
      "TikTok management Reporting",
      "Tiktok original videos creation",
      "TikTok optimization",
    ],
  },
]

export default function SocialComp() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Row className="mt-5">
          {data.map((service, index) => {
            return (
              <Col
                md={6}
                className={index === 6 && matches.medium ? "offset-3" : null}
                key={index}
              >
                <BlurbCommerce
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                  lists={service.lists}
                  isECommerce={true}
                  maxWidth={260}
                />
              </Col>
            )
          })}
        </Row>
      )}
    </Media>
  )
}
