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
import Testimonials from "./../components/UI/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="If your brand still does not meet the level of success and brand awarness you want, Vast loop agency is the lifeblood for your business. We are a full-service agency that provides clients from all around the world with unique and powerful strategies that can transform their companies."
    />
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
        From building unique digital strategies and tactics to optimizing
        <br /> for the best results and globally expanding your business.
      </p>
      <div className="text-center my-5">
        <AniLink
          swipe
          direction="left"
          to="about-us"
          className="btn btn-warning font-weight-bold btn-lg trans-scale"
          data-sal="zoom-in"
          data-sal-delay="2000"
          data-sal-easing="ease"
          data-sal-duration="1000"
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
      <Container fluid>
        <h2
          className="text-center font-weight-bold text-gagalin display-4 text-white"
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Our <span className="text-warning">Expertise.</span>{" "}
        </h2>
        <div>
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
        <h3 className="text-center font-weight-bold text-gagalin h1 text-white">
          Why <span className="text-warning">Choose us</span> ?
        </h3>
        <WhyChooseCards />
      </Container>
    </section>
    <section
      style={{
        backgroundImage: "url('/testi-bg.jpg')",
        padding: "100px 0px 150px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div style={{ width: "85%" }} className="mx-auto">
        <h3 className="text-center font-weight-bold text-gagalin h1 text-white">
          Testimo<span className="text-warning">nials.</span>
        </h3>
        <Testimonials />
      </div>
    </section>
    <GetStartedSection />
  </Layout>
)

export default IndexPage
