import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container, Button } from "react-bootstrap"
import PPCComp from "./../../components/ServicesComp/PPCComp"
import PPCReportComp from "./../../components/ServicesComp/PPCReportComp"

export default function ppcMarketing() {
  return (
    <Layout>
      <MyJumbotron background="/ppc-bg.jpg">
        <Container>
          <h1 className="display-3 mt-n3 mb-5 text-warning text-gagalin text-center">
            Pay Per Click Marketing
          </h1>
          <p className="h1 my-4 text-gagalin text-white text-center">
            Whatever platform you advertise on , we will put your Ad in front of
            people who are most likely to be interested in your products or
            services.
          </p>
          <p className="h3 font-weight-bold mt-5 text-center text-white">
            What we do
          </p>
          <div className="text-center mt-4">
            <img
              src="/big-companies.svg"
              alt="Big Companies Logo"
              className="mx-auto"
            />
            <p className="h5 mt-3 line-height-2 text-white  center-justified w-75 mx-auto">
              Vast loop uses PPC to allow brands get fast returs on investment
              (ROI). We have experts who can create campaigns in Google Ads,
              Bing Ads, social media, and more.
            </p>
          </div>
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
          <h2 className="text-center font-weight-bold text-gagalin h1 text-white">
            Our <span className="text-warning">PPC</span> Services
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
          <h3 className="text-center font-weight-bold text-gagalin h1 text-white">
            Our approach to <span className="text-warning">PPC reporting</span>
          </h3>
          <p className="h5 font-weight-600 text-center text-white mt-4">
            You can clearly see how our efforts are increasing your{" "}
            <span className="d-lg-block">
              online revenue with our custom reports and client dashboard.
            </span>
          </p>
          <PPCReportComp />
          <div className="text-center mt-4">
            <Button
              variant="warning"
              size="lg"
              className="font-weight-bold trans-scale"
            >
              Get Started
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
