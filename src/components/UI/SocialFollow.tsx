import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function SocialFollow() {
  return (
    <div
      className="get-started-section d-flex justify-content-center align-items-center text-white text-center"
      style={{
        padding: "100px 0px 150px",
        background: "url('/social-media-follow-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <p
          className="h1 text-gagalin "
          data-sal="slide-down"
          data-sal-delay="0"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Follow Our <span className="text-warning">Social Media:</span>
        </p>
        <Row className="mt-6">
          <Col
            md={4}
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <a href="#" className="text-decoration-none">
              <div className="social-follow">
                <div className="social-follow-img">
                  <img src="/fb-follow.svg" alt="Facebook Icon" />
                </div>
                <p className="h2 font-weight-bold text-warning">Like Us.</p>
                <p className="font-weight-600 text-white h5">
                  To stay in touch!
                </p>
              </div>
            </a>
          </Col>
          <Col
            md={4}
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <a href="#" className="text-decoration-none">
              <div className="social-follow">
                <div className="social-follow-img">
                  <img src="/ig-follow.svg" alt="Facebook Icon" />
                </div>
                <p className="h2 font-weight-bold text-warning">Follow Us.</p>
                <p className="font-weight-600 text-white h5">
                  To get the latest!
                </p>
              </div>
            </a>
          </Col>
          <Col
            md={4}
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <a href="#" className="text-decoration-none">
              <div className="social-follow">
                <div className="social-follow-img">
                  <img src="/linkedin-follow.svg" alt="Facebook Icon" />
                </div>
                <p className="h2 font-weight-bold text-warning">Connect Us.</p>
                <p className="font-weight-600 text-white h5">
                  Company {"&"} industry news!
                </p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
