import React from "react"
import Layout from "./../components/layout"
import MyJumbotron from "./../components/MyJumbotron"
import { Container } from "react-bootstrap"
import WhyChooseCards from "../components/UI/WhyChooseCards"

export default function about() {
  return (
    <Layout>
      <MyJumbotron background="/about-us.jpg">
        <Container>
          <h1 className="display-2 mt-n3 mb-5 text-warning text-gagalin text-center">
            ABOUT US
          </h1>
          <p className="h1 my-4 text-gagalin text-white text-center">
            We make you different, unique, and identifiable by others
          </p>
          <p className="h5 mt-5 line-height-2 text-white font-weight-600 text-center w-75 mx-auto">
            if your brand still does not meet the level of success and brand
            awareness you want, we are here to provide you with unique
            strategies that will transform your company. Vast loop agency is the
            lifeblood of your business
          </p>
        </Container>
      </MyJumbotron>
      <section
        style={{
          backgroundImage: "url('/why-choose-us-blue.jpg')",
          padding: "100px 0px 150px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <h3 className="text-center font-weight-bold text-gagalin display-4 text-white">
            Why <span className="text-warning">Choose us</span> ?
          </h3>
          <WhyChooseCards />
        </Container>
      </section>
    </Layout>
  )
}
