import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyJumbotron from "../components/MyJumbotron"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <MyJumbotron background="/about-us.jpg">
      <Container>
        <h1
          className="display-2 mt-n3 mb-5 text-warning text-gagalin text-center"
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          404: Not Found
        </h1>
        <p
          className="h1 my-4 text-gagalin text-white text-center"
          data-sal="slide-down"
          data-sal-delay="1000"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Hi, you found our 404 page.{" "}
          <Link className="text-warning" to="/">
            Go Back to Home
          </Link>
        </p>
      </Container>
    </MyJumbotron>
  </Layout>
)

export default NotFoundPage
