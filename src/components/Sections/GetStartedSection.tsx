import React from "react"
import { Container, Button } from "react-bootstrap"
import ContactForm from "./../Forms/ContactForm"

export default function GetStartedSection() {
  return (
    <div
      className="get-started-section d-flex justify-content-center align-items-center text-white "
      style={{
        padding: "100px 0px 150px",
        background: "url('/get-started-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        data-sal="zoom-in"
        data-sal-delay="0"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <p className="display-3 text-gagalin text-center">
          <span className="text-warning">Get Started.</span>{" "}
        </p>
        <p className="h5 font-weight-600 my-4 text-center">
          Looking forward to hear from you.
        </p>
        <ContactForm />
      </Container>
    </div>
  )
}
