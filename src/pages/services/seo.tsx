import React from "react"
import Layout, { GLOBAL_MEDIA_QUERIES } from "./../../components/layout"
import Media from "react-media"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import SeoHelp from "../../components/ServicesComp/SeoHelp"
import SeoServiceComp from "../../components/ServicesComp/SeoServiceComp"
import SEO from "../../components/seo"
import DoMore from "../../components/UI/DoMore"
import ScrollDown from "./../../components/UI/ScrollDown"

export default function seo() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <SEO
            title="Search Engine Optimization"
            description="What we do : Increase the rankings for your website and your Google My Business (GMB) listing, Increase your company's recognition online, which leads to building you Brand awarness. ..."
          />
          <MyJumbotron background="/seo-bg.jpg">
            <Container>
              <h1
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
                className={`${
                  matches.large
                    ? "display-3"
                    : matches.medium
                    ? "display-4"
                    : "h1"
                } mt-n3 mb-5 text-warning text-gagalin text-center`}
              >
                Search engine optimization.
              </h1>
              <p
                className="h2 font-weight-bold mt-5 text-center text-warning text-gagalin"
                data-sal="slide-down"
                data-sal-delay="1000"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                We help you:
              </p>
              <SeoHelp />
              <ScrollDown toScroll="#seo-specialists" />
            </Container>
          </MyJumbotron>

          <section
            id="seo-specialists"
            style={{
              backgroundImage: "url('/seo-service-bg.jpg')",
              padding: "100px 0px 80px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <h2
                className={`text-center font-weight-bold text-gagalin  text-white ${
                  matches.large ? "h2 " : "h3"
                }`}
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
                data-sal-duration="1000"
              >
                Vast L<span className="text-warning">oo</span>p agency has a
                team of SEO specialists.{" "}
                <span className="d-lg-block">They are experts in :</span>
              </h2>
              <SeoServiceComp />
              <ScrollDown toScroll="#seo-packages" />
              <div className="mt-5 text-white">
                <h3
                  className="mt-3 font-weight-bold display-4 text-warning text-gagalin text-center"
                  data-sal="slide-up"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  SEO packages.
                </h3>
                <p
                  className="mt-3 h4 text-white text-gagalin font-weight-600 text-center"
                  data-sal="slide-down"
                  data-sal-delay="0"
                  data-sal-easing="ease-out"
                  data-sal-duration="1000"
                >
                  We bundle several SEO services together into a cost-effective
                  and time-effective approach to optimize your website.
                </p>
                <div
                  className="seo-all-blurb row mt-3 justify-content-between flex-lg-row-reverse align-items-center text-white"
                  id="seo-packages"
                >
                  <div className="col-md-6 col-lg-5">
                    <div
                      className="seo-all-blurb__img"
                      data-sal="fade"
                      data-sal-delay="0"
                      data-sal-easing="ease-out"
                      data-sal-duration="200"
                    >
                      <img src="/revenue-bg.png" alt="All in SEO Background" />
                    </div>
                  </div>
                  <div
                    className="col-md-6 "
                    data-sal="fade"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                    data-sal-duration="200"
                  >
                    <ul className="mt-5 ml-4">
                      <li className="text-justify d-flex justify-content-between line-height-2 my-3">
                        <span>
                          -Comprehensive analysis of your website, competition,
                          and search engine visibility.
                        </span>
                        <img
                          className="d-inline-block"
                          src="/check.svg"
                          alt="Check Icon"
                        />
                      </li>
                      <li className="text-justify d-flex justify-content-between line-height-2 my-3">
                        <span>
                          - Usage of a variety of methods to obtain the best
                          keywords to drive quality traffic to your website.
                        </span>
                        <img
                          className="d-inline-block"
                          src="/check.svg"
                          alt="Check Icon"
                        />
                      </li>
                      <li className="line-height-2 my-3 d-flex justify-content-between">
                        <span>
                          - Onpage optimization to improve the visibility and
                          usability of your website in the search engines.
                        </span>
                        <img src="/check.svg" alt="Check Icon" />
                      </li>
                      <li className="line-height-2 my-3 d-flex justify-content-between">
                        <span>
                          - Quality inbound and internal linkings to highly rank
                          on search.
                        </span>
                        <img src="/check.svg" alt="Check Icon" />
                      </li>
                      <li className="line-height-2 my-3 d-flex justify-content-between">
                        <span>
                          - Meta optimization to drive more organic traffic to
                          your website.
                        </span>
                        <img src="/check.svg" alt="Check Icon" />
                      </li>
                      <li className="line-height-2 my-3 d-flex justify-content-between">
                        <span>
                          - SEO copywriting: reporting to meet your business
                          goals and make wise decisions that improve the ROI.
                        </span>
                        <img src="/check.svg" alt="Check Icon" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <DoMore title="SEO" />
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}
