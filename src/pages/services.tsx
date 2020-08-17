import React from "react"
import Layout from "./../components/layout"
import MyJumbotron from "../components/MyJumbotron"
import ExpertiseCards from "../components/UI/ExpertiseCards"
import { Container } from "react-bootstrap"

export default function services() {
  return (
    <Layout>
      <MyJumbotron background="/expertise-black.jpg">
        <h1
          className="display-3 text-warning text-gagalin text-center"
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease-out"
          data-sal-duration="1000"
        >
          OUR EXPERTISE
        </h1>
        <Container>
          <ExpertiseCards />
        </Container>
      </MyJumbotron>
    </Layout>
  )
}
