import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "./../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import ContentComp from "./../../components/ServicesComp/ContentComp"
import Media from "react-media"
import { GLOBAL_MEDIA_QUERIES } from "../../components/layout"

export default function contentMarketing() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => {
        return (
          <Layout>
            <MyJumbotron background="/content-bg.jpg">
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
                  Content Marketing
                </h1>
                <p
                  className={`${
                    matches.large ? "h2" : "h4"
                  } my-4 text-gagalin w-75 mx-auto text-white text-center`}
                >
                  Our content writers will produce relevant content to engage
                  your audience, build trust, and influence their purchasing
                  decisions.
                </p>
              </Container>
            </MyJumbotron>
            <section
              style={{
                backgroundImage: "url('/email-success-bg.jpg')",
                padding: "100px 0px 80px",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Container>
                <h2
                  className={`text-center font-weight-bold text-gagalin  text-white ${
                    matches.large ? "h2 " : "h3"
                  }`}
                >
                  How do we use{" "}
                  <span className="text-warning">email marketing</span>{" "}
                  <span className="d-lg-block">
                    {" "}
                    to create successful strategies ?
                  </span>
                </h2>
                <ContentComp />
              </Container>
            </section>
          </Layout>
        )
      }}
    </Media>
  )
}