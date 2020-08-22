import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container, Button } from "react-bootstrap"
import PPCComp from "./../../components/ServicesComp/PPCComp"
import PPCReportComp from "./../../components/ServicesComp/PPCReportComp"
import Media from "react-media"
import { GLOBAL_MEDIA_QUERIES } from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

export default function ppcMarketing() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <SEO
            title="Pay Per Click Marketing"
            description="Whatever platform you advertise on , we will put your Ad in front of people who are most likely to be interested in your products or services. What we do : Vast loop uses PPC to allow brands get fast returs on investment (ROI). We have experts who can create campaigns in Google Ads, Bing Ads, social media, and more."
          />
          <MyJumbotron background="/ppc-bg.jpg">
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
                Pay Per Click Marketing.
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
                Whatever platform you advertise on , we will put your Ad in
                front of people who are most likely to be interested in your
                products or services.
              </p>
            </Container>
          </MyJumbotron>
          <section
            style={{
              backgroundImage: "url('/ppc-service-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <p
                className="h5 mt-3 mb-5 line-height-2 text-white  center-justified w-75 mx-auto"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Vast loop uses PPC to allow brands get fast returs on investment
                (ROI). We have experts who can create campaigns in Google Ads,
                Bing Ads, social media, and more.
              </p>
              <h2
                className="text-center font-weight-bold text-gagalin h1 text-white"
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Our <span className="text-warning">PPC</span> Services.
              </h2>
              <PPCComp />
            </Container>
          </section>
          <section
            style={{
              backgroundImage: "url('/ppc-reporting-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <h3
                className="text-center font-weight-bold text-gagalin h1 text-white"
                data-sal="zoom-in"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Our approach to{" "}
                <span className="text-warning">PPC reporting.</span>
              </h3>
              <p
                className="h5 font-weight-600 text-center text-white mt-4"
                data-sal="slide-down"
                data-sal-delay="500"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                You can clearly see how our efforts are increasing your{" "}
                <span className="d-lg-block">
                  online revenue with our custom reports and client dashboard.
                </span>
              </p>
              <PPCReportComp />
              <div className="text-center mt-4">
                <Link
                  to="/contact"
                  className="btn btn-lg btn-warning font-weight-bold trans-scale"
                >
                  Get Started
                </Link>
              </div>
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
