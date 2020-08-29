import React from "react"
import { Row, Col } from "react-bootstrap"

let data = [
  {
    icon: "rank.svg",
    title: "Organic SEO services",
    detail:
      " We will design an SEO strategy that suits your unique business, and identifies the following:",
    lists: [
      "Keywords that your potential customers search for.",
      "Level of competition for those keywords, and which ones attract buyers.",
      "SEO Optimization your competitors use and how to beat them.",
      "How to improve your rankings and qualified traffic by building quality inbound links.",
      "How to achieve long term, sustainable top rankings and business goals.",
    ],
  },
  {
    icon: "software-development.svg",
    title: "Local SEO services",
    detail:
      " If you have a local business, we will make sure that your local audience easily finds your website in Google. We will also create and maintain an awesome Google My Business account and get the most out of your listings, and good rankings.",
  },
  {
    icon: "internet.svg",
    title: "Content marketing",
    detail:
      " Our team creates valuable contents to attract and build customers’ loyalty, and generate profitable actions from them. We will create useful informations for your target audience in the form of: written words, infographics, pictures, videos, and more. ",
  },
  {
    icon: "seo-and-web.svg",
    title: "Link building services",
    detail:
      "Our  SEO specialists  will provide your business with quality backlinks and organic referrals. We will boost your pages to rank higher in Google’s search results.",
  },
  {
    icon: "filter.svg",
    title: "Conversion rate optimization ( CRO )",
    detail:
      "We can increase the number of visitors who take the profitable action you want on your website. We analyze their behaviors, needs, and experiences. Which means we use CRO in a way that combines technical elements with the psychology of your potential customers. Among the results our team can help you achieve:",
    lists: [
      "Leading to more time spent on your website.",
      "Allowing you to get ahead of your competitors.",
      "Diminishing the costs of PPC advertising through getting most of the clicks via CRO.",
      "Making decisions based on proven data.",
    ],
  },
]

function SeoBlurb({ isEven, icon, lists, detail, title }) {
  return (
    <div
      style={{ margin: "5em 0em 3em" }}
      className={`seo-blurb row justify-content-between align-items-center ${
        isEven ? "flex-lg-row-reverse" : null
      }`}
    >
      <div className="col-md-6">
        <div
          className="seo-blurb__img mx-auto"
          data-sal={`${isEven ? "slide-left" : "slide-right"}`}
          data-sal-delay="0"
          data-sal-easing="ease-out"
          data-sal-duration="1000"
        >
          <img src={`/${icon}`} alt={icon} />
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="seo-blurb__detail text-white text-center text-lg-left"
          data-sal={`${isEven ? "slide-right" : "slide-left"}`}
          data-sal-delay="0"
          data-sal-easing="ease-out"
          data-sal-duration="1000"
        >
          <p className=" text-warning font-weight-bold seo-blurb__title">
            {title}:
          </p>
          <p className="font-weight-600 h5 my-4 line-height-2">{detail}</p>
          {lists && (
            <ul className="seo-blurb__list h5">
              {lists.map((list, index) => {
                return (
                  <li
                    key={index}
                    className="text-justify my-3 d-flex align-items-center"
                  >
                    <span className="mr-3">- {list}</span>
                    <img src="/check.svg" alt="Check Icon" />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SeoServiceComp() {
  return (
    <Row>
      <Col>
        {data.map((service, index) => {
          return (
            <SeoBlurb
              icon={service.icon}
              title={service.title}
              detail={service.detail}
              lists={service.lists}
              isEven={(index + 1) % 2 === 0}
            />
          )
        })}
      </Col>
    </Row>
  )
}
