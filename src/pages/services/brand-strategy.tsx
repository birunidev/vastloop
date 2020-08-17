import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"

export default function brandStrategy() {
  return (
    <Layout>
      <MyJumbotron background="/brand-strategy-bg.jpg">
        <Container>
          <h1 className="display-3 mt-n3 mb-5 text-warning text-gagalin text-center">
            Brand Stategy Implementation
          </h1>
          <p className="h1 my-4 text-gagalin text-white text-center">
            Vast L<span className="text-warning">oo</span>p can transform your
            business goals into a lively and colorful reality.
          </p>
          <p className="h5 mt-5 line-height-2 text-white font-weight-600 text-center w-75 mx-auto">
            By differentiating your brand from its competitors, and grabbing
            attention to its unique personality, we enable your company to
            inspire loyality, and credibility.
          </p>
        </Container>
      </MyJumbotron>
      <section
        style={{
          backgroundImage: "url('/why-choose-us.jpg')",
          padding: "100px 0px 150px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></section>
    </Layout>
  )
}
