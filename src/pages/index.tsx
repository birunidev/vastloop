import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GetStarted from "./../components/Forms/GetStarted"
import VideoBackground from "../components/UI/VideoBackground"
import Partners from "../components/UI/Partners"
import { Container } from "react-bootstrap"
import ExpertiseCards from "../components/UI/ExpertiseCards"
import WhyChooseCards from "../components/UI/WhyChooseCards"
import GetStartedSection from "../components/Sections/GetStartedSection"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoBackground video="jumbotron_1.mp4">
      <h1
        className="big-jumbo-text text-center text-gagalin"
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease-out"
        data-sal-duration="1000"
      >
        We can speed up your{" "}
        <span className="text-warning d-block">Business growth!</span>
      </h1>
      <p
        className="jumbo-text-detail text-center mb-0 font-weight-600 my-3"
        data-sal="slide-down"
        data-sal-delay="1000"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        From building unique digital strategies, and tactics to optimizing
        <br /> for the best results, and globally expanding your business.
      </p>
      <div className="text-center my-5">
        <AniLink
          swipe
          direction="left"
          to="about-us"
          className="btn btn-warning font-weight-bold btn-lg trans-scale"
        >
          Learn more about us
        </AniLink>
      </div>
      <GetStarted />
      <Partners />
    </VideoBackground>

    <section
      className="bg-resposive"
      style={{
        backgroundImage: "url('/expertise.jpg')",
        padding: "100px 0px 150px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <h2 className="text-center font-weight-bold text-gagalin display-4 text-white">
          Our <span className="text-warning">Expertise</span>{" "}
        </h2>
        <div
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <ExpertiseCards />
        </div>
      </Container>
    </section>
    <section
      style={{
        backgroundImage: "url('/why-choose-us.jpg')",
        padding: "100px 0px 150px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h3 className="text-center font-weight-bold text-gagalin display-4 text-white">
          Why <span className="text-warning">Choose us</span> ?
        </h3>
        <WhyChooseCards />
      </Container>
    </section>
    <GetStartedSection />
  </Layout>
)

export default IndexPage
