import React from "react"
import Layout from "./../../components/layout"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import EmailSuccessComp from "../../components/ServicesComp/EmailSuccessComp"
import EmailComp from "./../../components/ServicesComp/EmailComp"
import DoMore from "../../components/UI/DoMore"

export default function emailMarketing() {
  return (
    <Layout>
      <MyJumbotron background="/email-marketing-bg.jpg">
        <Container>
          <h1 className="display-3 mt-n3 mb-5 text-warning text-gagalin text-center">
            Email Marketing
          </h1>
          <p className="h1 my-4 text-gagalin text-white text-center">
            Save your time by allowing our dedicated specialists to build,
            develop, launch, and manage a custom email marketing strategy for
            your company
          </p>
          <p className="h3 font-weight-bold mt-5 text-center text-white">
            What we do
          </p>
          <p className="h5 mt-3 line-height-2 text-white  center-justified w-75 mx-auto">
            Vast loop agency has specialists capable of developing strategic,
            high-performing marketing campaigns for its e-commerce clients. We
            use our experience, platforms, and effective tools to deliver
            massive results for growing online stores
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
            to <br /> create successful strategies ?
          </h2>
          <EmailSuccessComp />
        </Container>
      </section>
      <section
        style={{
          backgroundImage: "url('/email-services-bg.jpg')",
          padding: "100px 0px 80px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h3 className="text-center font-weight-bold text-gagalin h2 text-white">
            What kind of <span className="text-warning">emails</span> do we
            create ?
          </h3>
          <EmailComp />
          <DoMore title="Email Marketing" />
        </Container>
      </section>
    </Layout>
  )
}
