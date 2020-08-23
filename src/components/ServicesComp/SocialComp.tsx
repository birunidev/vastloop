import React from "react"
import { BlurbCommerce } from "../UI/BlurbCommerce"
import { Row, Col } from "react-bootstrap"
import { GLOBAL_MEDIA_QUERIES } from "./../layout"
import Media from "react-media"

let data = [
  {
    icon: "electronics.svg",
    title: "Facebook marketing.",
    text:
      "Facebook is the #1 social media platform used by businesses to interact and engage with their customers. \n We offer : ",
    lists: [
      "- Facebook strategy development.",
      "- Facebook original feed creation.",
      "- Facebook page growth.",
      "- Facebook management reporting.",
    ],
  },
  {
    icon: "ig-service.svg",
    title: "Instagram marketing.",
    text:
      "We use Instagram to enable brands to humanize their contents, showcase products, and inspire their audiences.\n We offer : ",
    lists: [
      "- Instagram marketing strategy.",
      "- Instagram page growth.",
      "- Instagram original feed creation.",
      "- Instagram management reporting.",
    ],
  },
  {
    icon: "in-service.svg",
    title: "LinkedIn marketing.",
    text:
      "Linkedin marketing enables us to generate leads to our clients, and establish strategic partnerships. \n Our services include :",
    lists: [
      "- LinkedIn marketing strategy.",
      "- LinkedIn original content creation.",
      "- LinkedIn management reporting.",
      "- LinkedIn monitoring.",
    ],
  },
  {
    icon: "twitter-service.svg",
    title: "Twitter marketing.",
    text:
      "We can help businesses to build trust and relationships with their target audiences through Twitter marketing.\n Our services are :",
    lists: [
      "- Twitter marketing strategy.",
      "- Twitter marketing reporting.",
      "-Twitter original content creation.",
      "- Twitter monitoring.",
    ],
  },
  {
    icon: "youtube-service.svg",
    title: "Youtube marketing.",
    text:
      "We offer YouTube marketing services to present a unique content that attracts viewers and lets them consume and share it. \n Our services include :",
    lists: [
      "- Video optimization.",
      "- Original video contents.",
      "- video reporting.",
      "- Videos channel customization.",
    ],
  },
  {
    icon: "pin-service.svg",
    title: "Pinterest marketing.",
    text:
      "We implement the best Pinterest marketing service to increase your business sales and brand awareness. \nWe offer :",
    lists: [
      "- Pinterest marketing strategy.",
      "- Pinterest management reporting.",
      "- Pinterest pin creation.",
      "- Pinterest optimization.",
    ],
  },
  {
    icon: "tiktok-service.svg",
    title: "TikTok marketing",
    text:
      "Tiktok allows your audience to explore different aspects of your business, such as what makes you fun and interesting. \n We offer  :",
    lists: [
      "- TikTok marketing strategy.",
      "- TikTok management reporting.",
      "- Tiktok original videos creation.",
      "- TikTok optimization.",
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
              <Col md={12} key={index}>
                <BlurbCommerce
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                  lists={service.lists}
                  isECommerce={true}
                />
              </Col>
            )
          })}
        </Row>
      )}
    </Media>
  )
}
