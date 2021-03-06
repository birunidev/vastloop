import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

import Media from "react-media"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const navigations = [
  {
    id: "nav-1",
    name: "Home",
    slug: "",
    hasDropdown: false,
  },
  {
    id: "nav-2",
    name: "About us",
    slug: "about",
    hasDropdown: false,
  },
  {
    id: "nav-5",
    name: "Our team",
    slug: "our-team",
    hasDropdown: false,
  },
  {
    id: "nav-3",
    name: "Services",
    slug: "services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Brand Strategy Implementation",
        link: "brand-strategy",
      },
      {
        name: "Website Design & Development",
        link: "web-design-and-development",
      },
      {
        name: "Search Engine Optimization",
        link: "seo",
      },
      {
        name: "Social Media Marketing and Ads",
        link: "social-media-marketing",
      },
      {
        name: "Pay Per Click Marketing",
        link: "ppc-marketing",
      },
      {
        name: "E-Commerce",
        link: "e-commerce",
      },
      {
        name: "Content Marketing",
        link: "content-marketing",
      },
      {
        name: "Email Marketing",
        link: "email-marketing",
      },
    ],
  },
  {
    id: "nav-4",
    name: "Contact us",
    slug: "contact",
    hasDropdown: false,
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
        <Container fluid>
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
                      className="logo-class"
                      src={matches.large ? "/logo-white.png" : `/${logo}`}
                      width={matches.large ? "260" : "190"}
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
                if (nav.hasDropdown) {
                  return (
                    <NavDropdown
                      style={{ color: "white" }}
                      className="nav-link-custom mx-3"
                      key={nav.id}
                      title="Services"
                      id="basic-nav-dropdown"
                    >
                      {nav.dropdownItems.map((item, index) => (
                        <AniLink
                          className="dropdown-item"
                          key={index}
                          to={`/services/${item.link}`}
                        >
                          {item.name}
                        </AniLink>
                      ))}
                    </NavDropdown>
                  )
                } else {
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
                }
              })}
              <a
                href="https://tawk.to/chat/5f42893b1e7ade5df44336c3/default"
                target="_blank"
                className="btn btn-warning text-dark font-weight-bold"
              >
                Let's Chat
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <p
          className=" text-white"
          style={{
            position: "absolute",
            transform: "translate(20px, 100px)",
            fontSize: "1.6rem",
            zIndex: 9999,
          }}
        >
          We know your worth. <br />
          Then add value.
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
