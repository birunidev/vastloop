import React, { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import API from "./../utils/api"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

function TestiCard({ img_id, name, content }) {
  const [img, setImg] = useState<any>("/logo-placeholder.svg")

  useEffect(() => {
    API.getRequest(`media/${img_id}`)
      .then((res: any) => {
        setImg(res.guid.rendered)
      })
      .catch(err => {
        setImg("/logo-placeholder.svg")
      })
  }, [img_id])
  return (
    <Card
      style={{ maxWidth: "24rem", padding: "20px 0px" }}
      className="my-4 mx-auto testi-card"
    >
      <div className="card-logo-wrapper">
        <img src={img} alt={`${name} Logo`} />
      </div>
      <Card.Body>
        <p className="font-weight-bold text-gagalin h5">{name}</p>
        <Card.Text className="text-justify" style={{ fontSize: "18px" }}>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default function Testimonials() {
  const [testi, setTesti] = useState<any>([])
  const [isError, setError] = useState(false)
  useEffect(() => {
    API.getRequest("testimonials")
      .then(res => {
        setTesti(res)
      })
      .catch(err => {
        setError(true)
      })
  }, [])

  return (
    <Row className="mt-5 justify-content-between">
      {isError && (
        <p className="text-white text-center mt-5">
          Error getting testimonials
        </p>
      )}
      {testi.length > 0 &&
        testi.map(test => {
          return (
            <Col key={test.id} md={6} lg={3} xs={4}>
              <TestiCard
                img_id={test.acf.company_logo}
                name={test.acf.company_name}
                content={test.acf.review}
              />
            </Col>
          )
        })}
    </Row>
  )
}
