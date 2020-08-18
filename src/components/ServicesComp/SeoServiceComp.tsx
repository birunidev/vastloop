import React from "react"
import { Row, Col } from "react-bootstrap"

let data = [
  {
    icon: "rank.svg",
    title: "Organic SEO Services",
    detail:
      " We will design an SEO strategy that suits your unique business, and identifies the following:",
    lists: [
      " Keywords your potential customers search for",
      "Level of competition for those keywords, and which ones attract buyers",
      "SEO Optimization your competitors use and how to beat them",
      "How to improve your rankings and qualified traffic by buildingquality inbound links",
      "How to achieve long term, sustainable top rankings and business goals.",
    ],
  },
  {
    icon: "software-development.svg",
    title: "Local SEO services",
    detail:
      " If you have a local business , we will make sure that your local audience easily finds your website in Google!. We will also create and maintain an awesome Google My Business account and get the most out of your listings, and good rankings .",
  },
  {
    icon: "internet.svg",
    title: "Content Marketing",
    detail:
      " Our team creates valuable contents to attract and build customers’ loyalty, and generate profitable actions from them. We will create useful informations for your target audience in the form of: written words, infographics, pictures, videos, and more. ",
  },
  {
    icon: "seo-and-web.svg",
    title: "Link Building services",
    detail:
      "Our  SEO specialists  will provide your business with quality backlinks and organic referrals. We will boost your pages to rank higher in Google’s search results.",
  },
  {
    icon: "filter.svg",
    title: "Conversion Rate Optimization ( CRO )",
    detail:
      "We can increase the number of visitors who take the profitable action you want on your website. We analyze their behaviors, needs, and experiences. Which means we use CRO in a way that combines technical elements with the psychology of your potential customers. Among the results our team can help you achieve:",
    lists: [
      "Leading to more time spent on your website",
      "Allowing you to get ahead of your competitors",
      "Diminishing the costs of PPC advertising through getting most of the clicks via CRO",
      "Making decisions based on proven data.",
    ],
  },
]

function SeoBlurb({ isEven, icon, lists, detail, title }) {
  return (
    <div
      style={{ margin: "4em 0em" }}
      className={`seo-blurb d-lg-flex justify-content-between align-items-center ${
        isEven ? "flex-lg-row-reverse" : null
      }`}
    >
      <div className="seo-blurb__img mx-auto">
        <img src={`/${icon}`} alt={icon} />
      </div>
      <div className="seo-blurb__detail text-white text-center text-lg-left">
        <p className=" text-warning font-weight-bold seo-blurb__title">
          {title}
        </p>
        <p className="font-weight-600 h5 my-4 line-height-2">{detail}</p>
        {lists && (
          <ul className="seo-blurb__list h6">
            {lists.map((list, index) => {
              return (
                <li key={index} className="text-justify my-3 text-check">
                  - {list}
                </li>
              )
            })}
          </ul>
        )}
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