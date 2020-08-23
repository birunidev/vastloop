import React from "react"
import { BlurbCommerce } from "../UI/BlurbCommerce"
import { Row, Col } from "react-bootstrap"

let data = [
  {
    icon: "shopify.png",
    title: "Shopify Development.",
    text: "Vast loop team can develop a modern looking Shopify store that is:",
    lists: [
      "- Quick and easy to use.",
      "- Professional and functional.",
      "- Expressing your brand personality online.",
      "- Safe and secure.",
    ],
  },
  {
    icon: "woocommerce.png",
    title: "WordPress with Woocommerce.",
    text:
      "Our WordPress and WooCommerce experts have developed amazing online stores described by clients as: ",
    lists: [
      "- Satisfying to customers through unique Ecommerce strategies.",
      "- Exceptionally profitable.",
      "- Ensuring safe payment processes.",
      "- Amazingly designed.",
    ],
  },
  {
    icon: "bigcommerce.png",
    title: "Big commerce development.",
    text:
      "We hire experienced BigCommerce developers to give your customers an online unforgettable experience. Our Bigcommerce stores are:",
    lists: [
      "- Honest: you will receive updates at every stage of your project's development.",
      "- For long term survival: you can continue to make profits where your competitors may fail.",
      "- Well designed.",
    ],
  },
  {
    icon: "magento.png",
    title: "Magento development.",
    text:
      "We have certified Magento development experts who can maximize the efficiency of your Ecommerce development strategy.",
    lists: [
      "- We ensure that your brand is presented in its best form.",
      "- You will have full ownership of your Magento store.",
      "- We will make sure that your website will be favored by the major search engines.",
    ],
  },
]

export default function ECommerceComp() {
  return (
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
  )
}
