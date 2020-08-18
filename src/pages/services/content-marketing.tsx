import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "./../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import ContentComp from "./../../components/ServicesComp/ContentComp"

export default function contentMarketing() {
  return (
    <Layout>
      <MyJumbotron background="/content-bg.jpg">
        <Container>
          <h1 className="display-3 mt-n3 mb-5 text-warning text-gagalin text-center">
            Content Marketing
          </h1>
          <p className="h2 my-4 text-gagalin w-75 mx-auto text-white text-center">
            Our content writers will produce relevant content to engage your
            audience, build trust, and influence their purchasing decisions.
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
          <h2 className="text-center font-weight-bold text-gagalin h1 text-white">
            How do we use <span className="text-warning">email marketing</span>{" "}
            to create successful strategies ?
          </h2>
        </Container>
      </section>
    </Layout>
  )
}
