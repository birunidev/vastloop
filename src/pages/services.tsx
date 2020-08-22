import React from "react"
import Layout from "./../components/layout"
import MyJumbotron from "../components/MyJumbotron"
import ExpertiseCards from "../components/UI/ExpertiseCards"
import { Container } from "react-bootstrap"
import GetStartedSection from "./../components/Sections/GetStartedSection"
import SEO from "../components/seo"

export default function services() {
  return (
    <Layout>
      <SEO
        title="Our Services"
        description="We are a full-service agency that provides clients from all around the world with unique and powerful strategies that can transform their companies.We make you different, unique, and identifiable by others. Why Choose us ? Cost effective : you can have access to a full team of professionals. ..."
      />
      <MyJumbotron background="/expertise-black-2.jpg">
        <h1
          className="display-3 text-warning text-gagalin text-center"
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease-out"
          data-sal-duration="1000"
        >
          OUR EXPERTISE.
        </h1>
        <Container fluid>
          <ExpertiseCards />
        </Container>
      </MyJumbotron>
      <GetStartedSection />
    </Layout>
  )
}
