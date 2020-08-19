import React from "react"
import { Container, Button } from "react-bootstrap"

export default function GetStartedSection() {
  return (
    <div
      className="get-started-section d-flex justify-content-center align-items-center text-white text-center"
      style={{
        padding: "100px 0px 150px",
        background: "url('/get-started.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Container
        data-sal="zoom-in"
        data-sal-delay="0"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <p className="display-4 text-gagalin">
          Let’s <span className="text-warning">Get Started</span>{" "}
        </p>
        <p className="h5 font-weight-600 my-4">
          Looking forward to hearing from you
        </p>
        <Button
          size="lg"
          className="font-weight-600 trans-scale"
          variant="warning"
        >
          Let's Chat with us
        </Button>
      </Container>
    </div>
  )
}
