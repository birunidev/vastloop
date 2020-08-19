import React from "react"
import { BlurbCommerce } from "../UI/BlurbCommerce"
import { Row, Col } from "react-bootstrap"

let data = [
  {
    icon: "shopify.png",
    title: "Shopify\nDevelopment",
    text: "Vast loop team can develop a modern looking Shopify store that is :",
    lists: [
      "Quick and easy to use",
      "Professional and functional",
      "Expressing your brand personality online",
      "Safe and secure",
    ],
  },
  {
    icon: "woocommerce.png",
    title: "WordPress with Woocommerce",
    text:
      "Our WordPress and WooCommerce experts have developed amazing online stores described by clients as: ",
    lists: [
      "Satisfying to customers through unique Ecommerce strategies",
      "Exceptional Profitable",
      "Ensuring safe payment processes",
      "Stunning designs",
    ],
  },
  {
    icon: "bigcommerce.png",
    title: "Big commerce development",
    text:
      "We hire experienced BigCommerce developers to give your customers an online unforgettable experience. Our Bigcommerce store are",
    lists: [
      "Honest: you will receive updates at every stage of your project development",
      "For long term survival: you can continue to make profits where your competitors may fail",
      "Well designed",
    ],
  },
  {
    icon: "magento.png",
    title: "Magento Development",
    text:
      "We have certified Magento development experts who can maximize the efficiency of your ecommerce development strategy.",
    lists: [
      "We ensure that your brand is presented in its best form",
      "You will have full ownership of your Magento store",
      "We will make sure that your website will be favored by major search engines",
    ],
  },
]

export default function ECommerceComp() {
  return (
    <Row className="mt-5">
      {data.map((service, index) => {
        return (
          <Col md={6} key={index}>
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
  )
}
