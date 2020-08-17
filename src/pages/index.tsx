import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GetStarted from "./../components/Forms/GetStarted"
import VideoBackground from "../components/UI/VideoBackground"
import Partners from "../components/UI/Partners"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoBackground video="jumbotron_1.mp4">
      <h1 className="big-jumbo-text text-center text-gagalin">
        We can speed up your{" "}
        <span className="text-warning d-block">Business growth!</span>
      </h1>
      <p className="jumbo-text-detail text-center mb-0 font-weight-600 my-3">
        From building unique digital strategies, and tactics to optimizing
        <br /> for the best results, and globally expanding your business.
      </p>
      <div className="text-center">
        <button className="btn btn-warning font-weight-bold btn-lg mb-3">
          Learn more about us
        </button>
      </div>
      <GetStarted />
      <Partners />
    </VideoBackground>
  </Layout>
)

export default IndexPage
