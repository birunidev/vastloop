import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "keyword.svg",
    title: "Comprehensive keyword research:",
    text:
      "We ensure that you appear for the right searches by finding newly discovered keywords, and effectively monitoring your campaign’s performance.",
  }
  {
    icon: "landing-page.svg",
    title: "Landing page conversion optimization:",
    text:
      "We will create a landing page on your site tailored to identify the visitors that have clicked through from your PPC ads. This will let us be free to create a page specifically designed to sell your products or services.",
  },
  {
    icon: "campaign.svg",
    title: "Remarketing campaigns:",
    text:
      "Our remarketing tactics serve targeted ads to people who have already visited or taken action on your website. Using a remarketing campaign, we can help growing return on ad spendings by increasing sales, and getting more leads.",
  },
  {
    icon: "comparison-ppc.svg",
    title: "Split testing and comparison of ads:",
    text:
      "We’ll set up comparisons to test the effectiveness of different ads. This will allow us to improve our content and presentation.",
  },
  {
    icon: "campaign-2.svg",
    title: "PPC mini-campaigns:",
    text:
      "We will target your state, city, or even neighborhood with ads, or set up a small campaign designed to expand your services or products.",
  },
  {
    icon: "score.svg",
    title: "Proof of ROI through detailed reporting:",
    text:
      "We  generate a customized PDF report highlighting the most important information showing  us  what’s working and what’s not. That allows us to shift resources and tactics to be more effective.",
  },
]

export default function PPCComp() {
  return (
    <Row className="mt-5">
      {data.map((ppc, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard title={ppc.title} text={ppc.text} icon={ppc.icon} />
          </Col>
        )
      })}
    </Row>
  )
}
