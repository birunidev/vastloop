import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "keyword.svg",
    title: "Comprehensive Keyword Research.",
    text:
      "We ensure that you appear for the right searches by finding newly discovered keywords, and effectively monitoring your campaign’s performance.",
  },
  {
    icon: "landing-page.svg",
    title: "Landing page conversion optimization",
    text:
      "We will create a landing page on your site tailored to identify the visitors that have clicked through from your PPC ads. This will let us be free to create a page specifically designed to sell your products or services.",
  },
  {
    icon: "campaign.svg",
    title: "Remarketing \ncampaigns",
    text:
      "Our remarketing tactics serve targeted ads to people who have already visited or taken action on your website. Using a remarketing campaign, we can help growing return on ad spendings by increasing sales, and getting more leades.",
  },
  {
    icon: "comparison-ppc.svg",
    title: "Split testing and comparison of ads",
    text:
      "We’ll set up comparisons to test the effectiveness of different ads. This will allow us to improve our content and presentation",
  },
  {
    icon: "campaign-2.svg",
    title: "PPC mini-campaigns",
    text:
      "Let us target your state, city, or even neighborhood with ads, or set up a small campaign designed to expand your services or products",
  },
  {
    icon: "score.svg",
    title: "+-Proof of ROI through detailed reporting",
    text:
      "These kinds of emails make it easy for you to keep users up-to-date with the latest happenings at your company. Whether it be new employees, new products, or events that you’re hosting in the future.",
  },
]

export default function PPCComp() {
  return (
    <Row className="mt-5">
      {data.map((ppc, index) => {
        return (
          <Col md={4} key={index}>
            <StepCard
              title={ppc.title}
              text={ppc.text}
              icon={ppc.icon}
              maxWidth={250}
            />
          </Col>
        )
      })}
    </Row>
  )
}
