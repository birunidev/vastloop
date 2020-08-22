import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

export let expertise = [
  {
    title:
      '<p> <span class="text-warning">Brand Strategy</span> Implementation<p>',
    img: "brand-strategy.svg",
    link: "brand-strategy",
  },
  {
    title:
      '<p> <span class="text-warning">Website Design</span><br/> & Development <p>',
    img: "webdev.svg",
    link: "web-design-and-development",
  },
  {
    title:
      '<p> <span class="text-warning">Search Engine</span> Optimization (SEO)<p>',
    img: "seo.svg",
    link: "seo",
  },
  {
    title:
      '<p> <span class="text-warning">Social Media</span> Marketing and Advertising<p>',
    img: "socmed.svg",
    link: "social-media-marketing",
  },
  {
    title:
      '<p> <span class="text-warning">Pay-Per-Click  </span><br/> ( PPC ) Marketing<p>',
    img: "ppc.svg",
    link: "ppc-marketing",
  },
  {
    title: '<p> <span class="text-warning">E-Commerce </span><br/> Website<p>',
    img: "e-commerce.svg",
    link: "e-commerce",
  },
  {
    title: '<p> <span class="text-warning">Content  </span><br/> marketing<p>',
    img: "content-marketing.svg",
    link: "content-marketing",
  },
  {
    title: '<p> <span class="text-warning">Email </span> <br/> Marketing<p>',
    img: "mail-marketing.svg",
    link: "email-marketing",
  },
]

function ExpertiseCard({ title, img, link }) {
  return (
    <Link className="text-decoration-none" to={`/services/${link}`}>
      <div
        className="expertise-card text-center mx-auto mt-4"
        style={{ maxWidth: 250 }}
      >
        <div>
          <div className="expertise-card__img">
            <img src={`/${img}`} alt={title + " icon"} />
          </div>
          <div
            className="expertise-detail mt-4 font-weight-bold text-white h5"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        </div>
      </div>
    </Link>
  )
}

export default function ExpertiseCards() {
  return (
    <Row className="mt-5">
      {expertise.map((exp, index) => {
        return (
          <Col
            md={3}
            lg={3}
            key={index}
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {" "}
            <ExpertiseCard title={exp.title} img={exp.img} link={exp.link} />
          </Col>
        )
      })}
    </Row>
  )
}
