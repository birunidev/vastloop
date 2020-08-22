import React from "react"
import { Row, Col } from "react-bootstrap"
import { StepCard } from "./StepsComp"

let data = [
  {
    icon: "statistics.svg",
    title: "PPC performance",
    text:
      "Check up on your site’s Google Analytics reports for an overview or minute details on your PPC performance.",
  },
  {
    icon: "report.svg",
    title: "Ranking monitor",
    text:
      "Visit your client dashboard anytime and see how your site is ranking for specific keywords and search phrases.",
  },
  {
    icon: "score.svg",
    title: "Detailed report",
    text:
      "View a detailed report sent to you monthly, listing how we’ve spent our time working on your PPC campaign.",
  },
  {
    icon: "contact.svg",
    title: "PPC campaign strategy",
    text:
      "Contact your PPC specialist by phone or email if you want to discuss your PPC campaign strategy or have any questions.",
  },
]

export default function PPCReportComp() {
  return (
    <Row className="mt-5">
      {data.map((report, index) => {
        return (
          <Col md={12} key={index}>
            <StepCard
              title={report.title}
              text={report.text}
              icon={report.icon}
            />
          </Col>
        )
      })}
    </Row>
  )
}
