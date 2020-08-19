import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Navbar, Nav, Container } from "react-bootstrap"

import Media from "react-media"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const navigations = [
  {
    id: "nav-1",
    name: "Home",
    slug: "",
  },
  {
    id: "nav-2",
    name: "About us",
    slug: "about",
  },
  {
    id: "nav-3",
    name: "Services",
    slug: "services",
  },
  {
    id: "nav-4",
    name: "Contact us",
    slug: "contact",
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
          <div className="navbar-brand">
            <Link to="/">
              <Media
                queries={{
                  large: "(max-width:992px)",
                }}
              >
                {matches => {
                  return (
                    <img
                      src={matches.large ? "/logo-white.png" : `/${logo}`}
                      width="190"
                      alt="Vast Loop Logo"
                    />
                  )
                }}
              </Media>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navigations.map(nav => {
                return (
                  <AniLink
                    className={`nav-link nav-link-custom mx-3`}
                    to={`/${nav.slug}`}
                    top="entry"
                    key={nav.id}
                  >
                    {nav.name}
                  </AniLink>
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
        <p
          className=" text-white"
          style={{
            position: "absolute",
            transform: "translateY(80px)",
            zIndex: 9999,
          }}
        >
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
