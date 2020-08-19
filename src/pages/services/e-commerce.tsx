import React from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import Layout, { GLOBAL_MEDIA_QUERIES } from "../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import Media from "react-media"
import ECommerceComp from "../../components/ServicesComp/ECommerceComp"
import SEO from "../../components/seo"

export default function eCommerce() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <SEO
            title="E-Commerce"
            description="we use our experience, excellent platforms, and effective tools to deliver massive results for growing online stores. Our eCommerce developments services team
            will provide you with: 1. Customer insights merchandising strategy. 2. ..."
          />
          <MyJumbotron background="/e-commerce-bg.jpg">
            <Container>
              <h1
                className={`${
                  matches.large
                    ? "display-3"
                    : matches.medium
                    ? "display-4"
                    : "h1"
                } mt-n3 mb-5 text-warning text-gagalin text-center`}
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                E-Commerce
              </h1>
              <p
                className={`${
                  matches.large ? "h1" : "h4"
                } my-4 text-gagalin text-white text-center`}
                data-sal="slide-down"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                we use our experience, excellent platforms, and effective tools
                to deliver massive results for growing online stores.
              </p>
              <p
                className="h3 font-weight-600 text-white mb-5 text-center"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
                style={{ marginTop: 60 }}
              >
                Our <span className="text-warning">eCommerce</span> developments
                services team <span className="d-lg-block"></span> will provide
                you with:
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
                    <img src="/hashtag.svg" width="85" alt="Comparison Icon" />
                    <p
                      className={`ml-4 line-height-2 text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      } `}
                    >
                      Customer insights merchandising strategy.
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
                    <img
                      src="/data-collection.svg"
                      width="85"
                      alt="Revenue Icon"
                    />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Supply chain.
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
                    <img src="/wordpress.svg" width="85" alt="Growth Icon" />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Technology
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
                    <img
                      src="/digital-marketing.svg"
                      width="85"
                      alt="Revenue Icon"
                    />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Digital marketing strategy.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </MyJumbotron>
          <section
            style={{
              backgroundImage: "url('/e-commerce-service-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <h2
                className="text-center font-weight-bold text-gagalin h1 text-white"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Our <span className="text-warning">E-commerce</span> Services
              </h2>
              <ECommerceComp />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
