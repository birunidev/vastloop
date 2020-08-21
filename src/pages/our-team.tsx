import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyJumbotron from "../components/MyJumbotron"
import Media from "react-media"
import TeamCards from "../components/Team/TeamCards"

export default function ourTeam() {
  return (
    <Media
      queries={{
        large: "(min-width: 992px)",
      }}
    >
      {matches => {
        return (
          <Layout>
            <SEO
              title="About Us"
              description="We make you different, unique, and identifiable by others. Why Choose us ? Cost effective : you can have access to a full team of professionals. ..."
            />
            <MyJumbotron background="/team-bg.jpg">
              <Container>
                <h1
                  className="h1 font-weight-bold text-gagalin text-warning text-center"
                  data-sal="slide-up"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  Meet Our Team.
                </h1>
                <p
                  className="h3 font-weight-600 text-white mb-5 text-center"
                  style={{ marginTop: 60 }}
                  data-sal="slide-down"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  Some Text Here:
                </p>
                <div
                  className="text-center mb-5"
                  data-sal="slide-down"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  <img
                    src="/team-icon.svg"
                    width={90}
                    className="mx-auto"
                    alt="Team Icon"
                  />
                </div>
                <TeamCards />
              </Container>
            </MyJumbotron>
          </Layout>
        )
      }}
    </Media>
  )
}
