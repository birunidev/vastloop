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
        <Container>
          <Row className="justify-content-between">
            <Col>
              <img
                src="/logo-white.png"
                alt="Vast Loop Logo White"
                loading="lazy"
                width={250}
              />
            </Col>
            <div className="w-100"></div>
            <Col md={5} lg={3}>
              <p className="text-justify mt-5">
                If your brand still does not meet the level of success and brand
                awarness you want, Vast loop agency is the lifeblood for your
                business. We are a full-service agency that provides clients
                from all around the world with unique and powerful strategies
                that can transform their companies.
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
            <Col md={5} lg={2}>
              <ul className="mt-5">
                <li className="mb-3">
                  <Link className="text-white" to="/about">
                    Terms of Agreement
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" to="/about">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" to="/sitemap.xml">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={5} lg={3}>
              <ul className="mt-5">
                <li className="d-flex">
                  <img className="d-block" src="/location.svg" alt="Map Icon" />
                  <span className="ml-3">
                    2715 Ash Dr. San Jose, South Dakota 83475
                  </span>
                </li>
                <li className="d-flex mt-3">
                  <img className="d-block" src="/phone.svg" alt="Phone Icon" />
                  <span className="ml-3">(704) 555-0127</span>
                </li>
                <li className="d-flex mt-3">
                  <img
                    className="d-block"
                    src="/mail-icon.svg"
                    alt="Mail Icon"
                  />
                  <span className="ml-3">contact@vastloop.com</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="bg-dark">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-3">
            <p className="text-white">
              © Copyright 2020 | All Right Reserved to Vast Loop{" "}
            </p>
            <ul className="d-flex">
              <li className="mr-3">
                <a href="https://facebook.com">
                  <img
                    src="/facebook.svg"
                    className="img-fluid"
                    alt="facebook icon "
                  />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://instagram.com">
                  <img
                    src="/instagram.svg"
                    alt="facebook icon "
                    className="img-fluid"
                  />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <img
                    src="/linkedin.svg"
                    alt="facebook icon "
                    className="img-fluid"
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
