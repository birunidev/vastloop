import React from "react"
import Layout from "../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import HowWebsiteComp from "../../components/ServicesComp/HowWebsiteComp"
import WebsiteFeatureComp from "./../../components/ServicesComp/WebsiteFeatureComp"
import Media from "react-media"
import { GLOBAL_MEDIA_QUERIES } from "./../../components/layout"

export default function webDesign() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <MyJumbotron background="/web-design-bg.jpg">
            <Container>
              <h1
                className={`${
                  matches.large
                    ? "display-3"
                    : matches.medium
                    ? "display-4"
                    : "h1"
                }  mt-n3 mb-5 text-warning text-gagalin text-center`}
              >
                Website design <span className="d-lg-block"></span> and
                developement
              </h1>
              <p
                className={`${
                  matches.large ? "h2" : matches.medium ? "h3" : "h5"
                } my-4 text-gagalin text-white center-justified`}
              >
                Vast l<span className="text-warning">oo</span>p is made of
                specialists who can Incorporate smart and creative website
                design ideas. These lasts can enable your brand to provide a
                unique, and positive experience for your website visitors.
              </p>
            </Container>
          </MyJumbotron>
          <section
            style={{
              backgroundImage: "url('/how-website-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <h2
                className={`text-center font-weight-bold text-gagalin  text-white w-75 mx-auto ${
                  matches.large ? "h1" : "h3"
                }`}
              >
                How do we turn your website into a{" "}
                <span className="text-warning">productive way</span> to{" "}
                <span className="text-warning">engage</span> with your audience
                ?
              </h2>
              <HowWebsiteComp />
            </Container>
          </section>
          <section
            style={{
              backgroundImage: "url('/website-features-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <h3 className="text-center font-weight-bold text-gagalin h1 text-white w-75 mx-auto">
                We also
              </h3>
              <WebsiteFeatureComp />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
