import React from "react"
import { Row, Col } from "react-bootstrap"

let data = [
  {
    img: "1.jpg",
    name: "Antonia",
    position: "Project Manager",
  },
  {
    img: "2.jpg",
    name: "Jessy",
    position: "Founder and Content Writer",
  },
  {
    img: "3.jpg",
    name: "Marry",
    position: "Strategist",
  },
  {
    img: "4.jpg",
    name: "Sisca",
    position: "Graphic Designer",
  },
  {
    img: "5.jpg",
    name: "Eric",
    position: "Social Media Manager",
  },
  {
    img: "6.jpg",
    name: "Jack",
    position: "SEO Specialist",
  },
  {
    img: "7.jpg",
    name: "Ibrahim",
    position: "Pay Per Click Manager",
  },
  // {
  //   img: "10.jpg",
  //   name: "Al Biruni",
  //   position: "Website Developer",
  // },
  {
    img: "8.jpg",
    name: "James",
    position: "Email Marketing / Marketing Automation Specialist",
  },
  {
    img: "9.jpg",
    name: "Jelita",
    position: "Front-End Developer",
  },
]

function TeamCard({ img, name, position }) {
  return (
    <div className="team-card my-5">
      <div className="team-card__img mx-auto mb-3">
        <img src={`/team/${img}`} className="img-fluid" alt={name} />
      </div>
      <div className="team-card__detail text-center">
        <p className="h3 font-weight-bold text-gagalin text-warning">{name}</p>
        <p className="h4 font-weight-600 text-white">{position}</p>
      </div>
    </div>
  )
}

export default function TeamCards() {
  return (
    <Row className="mt-5">
      {data.map((profile, index) => {
        return (
          <Col
            key={index}
            md={4}
            data-sal="fade"
            data-sal-delay="0"
            data-sal-easing="ease-out"
            data-sal-duration="1000"
          >
            <TeamCard
              name={profile.name}
              img={profile.img}
              position={profile.position}
            />
          </Col>
        )
      })}
    </Row>
  )
}
