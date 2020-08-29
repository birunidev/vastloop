import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <>
      <footer
        style={{ background: "url('/footer.jpg')", backgroundSize: "cover" }}
        className="text-white py-5"
      >
        <Container fluid style={{ paddingLeft: "40px", paddingRight: "40px" }}>
          <Row className="justify-content-between">
            <Col>
              <img
                src="/logo-white.png"
                alt="Vast Loop Logo White"
                loading="lazy"
                width={330}
              />
            </Col>
            <div className="w-100"></div>
            <Col md={5} lg={3}>
              <p className="text-justify mt-5">
                If your brand still does not meet the level of success and brand
                awareness you want, we are here to provide you with unique
                strategies that will transform your company. Vast loop agency is
                the lifeblood of your business.
              </p>
            </Col>
            <Col md={5} lg={2}>
              <ul className="mt-5">
                <li className="mb-3">
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" to="/services">
                    Services
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={5} lg={3}>
              <ul className="mt-5">
                <li className="d-flex">
                  <img className="d-block" src="/location.svg" alt="Map Icon" />
                  <span className="ml-3">Bali, Indonesia</span>
                </li>
                <li className="d-flex mt-3">
                  <img className="d-block" src="/phone.svg" alt="Phone Icon" />
                  <span className="ml-3">+62 821-4445-7053</span>
                </li>
                <li className="d-flex mt-3">
                  <img
                    className="d-block"
                    src="/mail-icon.svg"
                    alt="Mail Icon"
                  />
                  <span className="ml-3">vastloop1@gmail.com</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="bg-dark">
        <Container fluid style={{ paddingLeft: "40px", paddingRight: "40px" }}>
          <div className="d-flex justify-content-between align-items-center py-3">
            <p className="text-white">
              © Copyright 2020 | All Right Reserved to Vast Loop{" "}
            </p>
            <ul className="d-flex">
              <li className="mr-3">
                <a href="https://facebook.com">
                  <img
                    src="/facebook.svg"
                    className="img-fluid trans-scale"
                    alt="facebook icon "
                    width="10"
                  />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://instagram.com">
                  <img
                    src="/instagram.svg"
                    alt="facebook icon "
                    className="img-fluid trans-scale"
                    width="25"
                  />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <img
                    src="/linkedin.svg"
                    alt="facebook icon "
                    className="img-fluid trans-scale"
                    width="22"
                  />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  )
}
