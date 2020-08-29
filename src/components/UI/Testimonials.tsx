import React, { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import API from "./../utils/api"

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
        <p className="font-weight-bold h3">{name}</p>
        <Card.Text className="text-justify">{content}</Card.Text>
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
        console.log(res)
      })
      .catch(err => {
        setError(true)
      })
  }, [])

  return (
    <Row>
      {isError && <p>Error getting testimonials</p>}
      {testi.length > 0 &&
        testi.map(test => {
          return (
            <Col md={6}>
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
