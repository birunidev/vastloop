import React from "react"
import { Row, Col } from "react-bootstrap"

let data = [
  {
    img: "2.jpg",
    name: "Jessy",
    position: "Agency founder and content writer.",
  },
  {
    img: "1.jpg",
    name: "Antonia",
    position: "Project manager.",
  },

  {
    img: "3.jpg",
    name: "Marry",
    position: "Strategist.",
  },
  {
    img: "4.jpg",
    name: "Sisca",
    position: "Graphic designer.",
  },
  {
    img: "5.jpg",
    name: "Eric",
    position: "Social media manager.",
  },
  {
    img: "6.jpg",
    name: "Jack",
    position: "SEO specialist.",
  },
  {
    img: "7.jpg",
    name: "Ibrahim",
    position: "Pay-per-click manager.",
  },
  // {
  //   img: "10.jpg",
  //   name: "Al Biruni",
  //   position: "Website Developer",
  // },
  {
    img: "8.jpg",
    name: "James",
    position: "Email marketing / marketing automation specialist.",
  },
  {
    img: "9.jpg",
    name: "Jelita",
    position: "Front-end developer.",
  },
]

function TeamCard({ img, name, position }) {
  return (
    <div className="team-card my-5">
      <div className="team-card__img mx-auto mb-3">
        <img src={`/team/${img}`} className="img-fluid" alt={name} />
      </div>
      <div className="team-card__detail text-center">
        <p className="h2 font-weight-bold text-warning">{name}</p>
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
