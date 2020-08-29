import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyJumbotron from "../components/MyJumbotron"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "../components/Forms/ContactForm"
import SocialFollow from "./../components/UI/SocialFollow"

export default function contact() {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Feel free to contact us for our services"
      />
      <MyJumbotron background="/contact-us-bg.jpg" classes="bg-center">
        <Container>
          <h1
            className="display-2 mt-n3 mb-5 text-warning text-gagalin text-center"
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            CONTACT US.
          </h1>
          <p
            className="h1 my-4 text-gagalin text-white text-center"
            data-sal="slide-down"
            data-sal-delay="1000"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Feel free to contact us{" "}
            <span className="d-lg-block">
              for <span className="text-warning">our services.</span>{" "}
            </span>
          </p>
          <Row className="justify-content-center">
            <Col sm={12} md={10} className="mt-5">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </MyJumbotron>
      <SocialFollow />
    </Layout>
  )
}
