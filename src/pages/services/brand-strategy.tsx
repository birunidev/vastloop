import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import StepsComp from "../../components/ServicesComp/StepsComp"
import Media from "react-media"
import SEO from "../../components/seo"
import DoMore from "./../../components/UI/DoMore"

export default function brandStrategy() {
  return (
    <Media
      queries={{
        medium: "(min-width:768px)",
        large: "(min-width: 992px)",
      }}
    >
      {matches => (
        <Layout>
          <SEO
            title="Brand Stategy Implementation"
            description="Vast Loop can transform your business goals into a lively and colorful reality. By differentiating your brand from its competitors, and grabbing attention to its unique personality, we enable your company to inspire loyality, and credibility."
          />
          <MyJumbotron background="/brand-strategy-bg.jpg">
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
                Brand Stategy Implementation.
              </h1>
              <p
                className={`${
                  matches.large ? "h1" : matches.medium ? "h3" : "h4"
                } my-4 text-gagalin text-white text-center`}
                data-sal="slide-down"
                data-sal-delay="1000"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Vast L<span className="text-warning">oo</span>p can transform
                your business goals into a lively and colorful reality.
              </p>
              <p
                className="h5 mt-5 line-height-2 text-white font-weight-600 center-justified w-75 mx-auto"
                data-sal="zoom-in"
                data-sal-delay="1500"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                By differentiating your brand from its competitors, and grabbing
                attention to its unique personality, we enable your company to
                inspire loyality, and credibility.
              </p>
            </Container>
          </MyJumbotron>
          <section
            style={{
              backgroundImage: "url('/vision-bg.jpg')",
              padding: "100px 0px 150px",
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
                The steps we take to make{" "}
                <span className="text-warning d-lg-block">
                  your vision a reality:
                </span>
              </h2>
              <StepsComp />
              <DoMore title="Brand Stategy Implementation" />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
