import React from "react"
import MyJumbotron from "../../components/MyJumbotron"
import Media from "react-media"
import Layout, { GLOBAL_MEDIA_QUERIES } from "../../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SocialComp from "../../components/ServicesComp/SocialComp"
import SocialAdsComp from "../../components/ServicesComp/SocialAdsComp"
import SEO from "../../components/seo"

export default function socialMediaMarketing() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <SEO
            title="Social Media Marketing and Ads"
            description="We create a solid social media campaign to reach your customers where they are and ensure that your brand’s voice is heard"
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
                social media marketing
              </h1>
              <p
                className={`${
                  matches.large ? "h1" : "h4"
                } my-4 text-gagalin text-white text-center`}
                data-sal="slide-down"
                data-sal-delay="1000"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                We create a solid social media campaign to reach your customers
                where they are and ensure that your brand’s voice is heard. Vast
                l<span className="text-warning">oo</span>p team is made of
                experts at:
              </p>
              <p
                className="h3 font-weight-600 text-white mb-5 text-center"
                style={{ marginTop: 60 }}
                data-sal="fade"
                data-sal-delay="1000"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
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
                    <img
                      src="/followers.svg"
                      width="85"
                      alt="Comparison Icon"
                    />
                    <p
                      className={`ml-4 line-height-2 text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      } `}
                    >
                      Followers' growth and traffic conversion.
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
                    <img src="/post.svg" width="85" alt="Revenue Icon" />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Original Feed creation.
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
                    <img
                      src="/conversion-rate.svg"
                      width="85"
                      alt="Growth Icon"
                    />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Increasing conversion rates.
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
                    <img src="/loyalty.svg" width="85" alt="Revenue Icon" />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Improvement of brand loyalty
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
                    <img src="/audit.svg" width="85" alt="Revenue Icon" />
                    <p
                      className={`ml-4 text-justify text-white font-weight-600 ${
                        matches.large ? "h4" : "h5"
                      }`}
                    >
                      Social media audits {"&"} full- funnel strategy.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </MyJumbotron>
          <section
            style={{
              backgroundImage: "url('/seo-service-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "bottom center",
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
                Our <span className="text-warning">social media marketing</span>{" "}
                Services
              </h2>
              <SocialComp />
            </Container>
          </section>
          <section
            style={{
              backgroundImage: "url('/social-ads-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "bottom center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <h3
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
                className={`${
                  matches.large ? "display-4" : matches.medium ? "h1" : "h2"
                } mt-n3 mb-5 text-warning text-gagalin text-center`}
              >
                <span className="text-warning">social media</span> ads
              </h3>
              <p
                data-sal="slide-down"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
                className={`${
                  matches.large ? "h1" : "h4"
                } my-4 text-gagalin text-white text-center`}
              >
                Vast l<span className="text-warning">oo</span>p helps you reach
                your target audience through social media advertising. We make
                sure that campaigns are continuously optimized and result in
                profitable returns.
              </p>
            </Container>
          </section>
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
                Our <span className="text-warning"> social media ads</span>{" "}
                Services
              </h2>
              <SocialAdsComp />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
