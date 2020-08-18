import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import StepsComp from "../../components/ServicesComp/StepsComp"

import Media from "react-media"
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
              >
                Brand Stategy Implementation
              </h1>
              <p
                className={`${
                  matches.large ? "h1" : matches.medium ? "h3" : "h4"
                } my-4 text-gagalin text-white text-center`}
              >
                Vast L<span className="text-warning">oo</span>p can transform
                your business goals into a lively and colorful reality.
              </p>
              <p className="h5 mt-5 line-height-2 text-white font-weight-600 center-justified w-75 mx-auto">
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
              <h2 className="text-center font-weight-bold text-gagalin h1 text-white">
                The steps we take to make{" "}
                <span className="text-warning d-lg-block">
                  your vision a reality:
                </span>
              </h2>
              <StepsComp />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
