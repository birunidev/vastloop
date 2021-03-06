import React from "react"
import Layout, { GLOBAL_MEDIA_QUERIES } from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import EmailSuccessComp from "../../components/ServicesComp/EmailSuccessComp"
import EmailComp from "./../../components/ServicesComp/EmailComp"
import DoMore from "../../components/UI/DoMore"
import Media from "react-media"
import SEO from "../../components/seo"
import ScrollDown from "../../components/UI/ScrollDown"

export default function emailMarketing() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <SEO
            title="Email Marketing"
            description="Vast loop agency has specialists capable of developing strategic, high-performing marketing campaigns for its e-commerce clients. We use our experience, platforms, and effective tools to deliver massive results for growing online stores"
          />
          <MyJumbotron background="/email-marketing-bg.jpg">
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
                Email Marketing.
              </h1>
              <p
                className={`${
                  matches.large ? "h2 text-center" : "h4 center-justified"
                } my-4 text-gagalin text-white `}
                data-sal="slide-down"
                data-sal-delay="500"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Save your time by allowing our dedicated specialists to build,
                develop, launch, and manage a custom email marketing strategy
                for your company.
              </p>
              <ScrollDown toScroll="#email-service" />
            </Container>
          </MyJumbotron>
          <section
            id="email-service"
            style={{
              backgroundImage: "url('/seo-service-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container fluid>
              <h2
                className={`text-center font-weight-bold text-gagalin h1 text-white`}
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                How do we use{" "}
                <span className="text-warning">email marketing</span> to <br />{" "}
                create successful strategies ?
              </h2>
              <EmailSuccessComp />
              <ScrollDown toScroll="#email-strategy" />
            </Container>
          </section>
          <section
            id="email-strategy"
            style={{
              backgroundImage: "url('/email-services-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container fluid>
              <h3
                className="text-center font-weight-bold text-gagalin h2 text-white"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                What kind of <span className="text-warning">emails</span> do we
                create ?
              </h3>
              <EmailComp />
              <DoMore title="Email Marketing" />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
