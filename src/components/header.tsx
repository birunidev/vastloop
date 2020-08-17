import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Navbar, Nav, Container } from "react-bootstrap"

import Media from "react-media"

const navigations = [
  {
    id: "nav-1",
    name: "Home",
    slug: "home",
  },
  {
    id: "nav-2",
    name: "About Us",
    slug: "about",
  },
  {
    id: "nav-3",
    name: "Services",
    slug: "services",
  },
  {
    id: "nav-4",
    name: "Blog",
    slug: "blog",
  },
]

const Header = () => {
  const [logo, setLogo] = useState("logo-compressed.svg")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function scrollNav() {
      if (window.top.scrollY > 60) {
        setScrolled(true)
        setLogo("logo-white.png")
      } else {
        setScrolled(false)
        setLogo("logo-compressed.svg")
      }
    }

    document.addEventListener("scroll", scrollNav)

    return () => {
      document.removeEventListener("scroll", scrollNav)
    }
  })

  return (
    <header>
      <Navbar
        className={`custom-navbar ${scrolled ? "scrolled" : null}`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Media
              queries={{
                large: "(max-width:992px)",
              }}
            >
              {matches => {
                return (
                  <img
                    src={matches.large ? "logo-white.png" : logo}
                    width="190"
                    alt="Vast Loop Logo"
                  />
                )
              }}
            </Media>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navigations.map(nav => {
                return (
                  <Link
                    className={`nav-link nav-link-custom mx-3`}
                    to={`/${nav.slug}`}
                    key={nav.id}
                  >
                    {nav.name}
                  </Link>
                )
              })}
              <button
                type="button"
                className="btn btn-warning text-dark font-weight-bold"
              >
                Let's Chat
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <p className=" text-white" style={{ position: "absolute" }}>
          We Know Your Worth <br />
          Then Add Value
        </p>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
