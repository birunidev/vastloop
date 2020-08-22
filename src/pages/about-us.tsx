import React from "react"
import Layout from "./../components/layout"
import MyJumbotron from "./../components/MyJumbotron"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Media from "react-media"
import ExpertiseCards from "../components/UI/ExpertiseCards"
import SEO from "../components/seo"

export default function aboutUs() {
  return (
    <Media
      queries={{
        large: "(min-width: 992px)",
      }}
    >
      {matches => {
        return (
          <Layout>
            <SEO
              title="About Us"
              description="We make you different, unique, and identifiable by others. Why Choose us ? Cost effective : you can have access to a full team of professionals. ..."
            />
            <MyJumbotron background="/about-us-swipe.jpg">
              <Container>
                <h1
                  className="h1 font-weight-bold text-gagalin text-white text-center"
                  data-sal="slide-up"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  No matter how and where you are marketing your business now ,
                  we{" "}
                  <span className="text-warning">
                    will take your brand success and awarness to the next level!
                  </span>
                </h1>
                <p
                  className="h3 font-weight-600 text-white mb-5 text-center text-lg-left"
                  style={{ marginTop: 60 }}
                >
                  We Can Help You :
                </p>
                <Row className="justify-content-between">
                  <Col
                    md={5}
                    data-sal="slide-right"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="800"
                  >
                    <div className="help-blurb d-flex align-items-center my-4">
                      <img
                        src="/comparison.svg"
                        width="85"
                        alt="Comparison Icon"
                      />
                      <p
                        className={`ml-4 text-justify text-white font-weight-600 ${
                          matches.large ? "h4" : "h5"
                        } `}
                      >
                        Differentiate your brand than competitors.
                      </p>
                    </div>
                  </Col>
                  <Col
                    md={5}
                    data-sal="slide-left"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="800"
                  >
                    <div className="help-blurb d-flex align-items-center my-4">
                      <img src="/revenue.svg" width="85" alt="Revenue Icon" />
                      <p
                        className={`ml-4 text-justify text-white font-weight-600 ${
                          matches.large ? "h4" : "h5"
                        }`}
                      >
                        Increase visibility and generate more sales and
                        revenues.
                      </p>
                    </div>
                  </Col>
                  <Col
                    md={5}
                    data-sal="slide-right"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="800"
                  >
                    <div className="help-blurb d-flex align-items-center my-4">
                      <img src="/growth.svg" width="85" alt="Growth Icon" />
                      <p
                        className={`ml-4 text-justify text-white font-weight-600 ${
                          matches.large ? "h4" : "h5"
                        }`}
                      >
                        Grow you performance reputation online.
                      </p>
                    </div>
                  </Col>
                  <Col
                    md={5}
                    data-sal="slide-left"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="800"
                  >
                    <div className="help-blurb d-flex align-items-center my-4">
                      <img src="/reach.svg" width="85" alt="Revenue Icon" />
                      <p
                        className={`ml-4 text-justify text-white font-weight-600 ${
                          matches.large ? "h4" : "h5"
                        }`}
                      >
                        Globally expand your brand and operations.
                      </p>
                    </div>
                  </Col>
                </Row>
                <div
                  className="text-center mt-5"
                  data-sal="zoom-in"
                  data-sal-delay="1000"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  <Link
                    to="/services"
                    className="btn btn-warning btn-lg font-weight-600"
                  >
                    Learn about our services
                  </Link>
                </div>
              </Container>
            </MyJumbotron>
            <section
              className="bg-resposive"
              style={{
                backgroundImage: "url('/expertise.jpg')",
                padding: "100px 0px 150px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container fluid>
                <h2
                  className="text-center font-weight-bold text-gagalin display-4 text-white"
                  data-sal="slide-up"
                  data-sal-delay="0"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  Our <span className="text-warning">Expertise.</span>
                </h2>
                <div>
                  <ExpertiseCards />
                </div>
              </Container>
            </section>
          </Layout>
        )
      }}
    </Media>
  )
}
