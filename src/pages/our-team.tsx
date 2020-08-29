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
              title="Our Team"
              description="Vast loop agency hires award-winning specialists who will hit
              your goals, and take your business to the next level. We are
              passionate about growing brands and getting real results
              online. ..."
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
                  className="h3 text-gagalin font-weight-600 text-white mb-5 text-center"
                  style={{ marginTop: 60 }}
                  data-sal="slide-down"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  Vast loop agency hires award-winning specialists who will hit
                  your goals, and take your business to the next level. We are
                  passionate about growing brands and getting real results
                  online.
                </p>
              </Container>
              <Container fluid>
                <div
                  className="text-center mb-5"
                  data-sal="slide-down"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  <img
                    src="/team-icon.svg"
                    width={200}
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
