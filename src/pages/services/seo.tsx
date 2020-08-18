import React from "react"
import Layout, { GLOBAL_MEDIA_QUERIES } from "./../../components/layout"
import Media from "react-media"
import MyJumbotron from "../../components/MyJumbotron"
import { Container } from "react-bootstrap"
import SeoHelp from "../../components/ServicesComp/SeoHelp"
import SeoServiceComp from "../../components/ServicesComp/SeoServiceComp"

export default function seo() {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <Layout>
          <MyJumbotron background="/content-bg.jpg">
            <Container>
              <h1
                className={`${
                  matches.large
                    ? "display-3"
                    : matches.medium
                    ? "display-4"
                    : "h1"
                } mt-n3 mb-5 text-warning text-gagalin text-center`}
              >
                Search engine optimization
              </h1>
              <p className="h3 font-weight-bold mt-5 text-center text-white">
                What we do
              </p>
              <SeoHelp />
            </Container>
          </MyJumbotron>

          <section
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
              >
                Vast L<span className="text-warning">oo</span>p agency has a
                team of SEO specialists.{" "}
                <span className="d-lg-block">They are experts in :</span>
              </h2>
              <SeoServiceComp />
              <div className="mt-5  text-white">
                <h3 className="font-weight-bold h2 text-warning text-center">
                  All in One SEO services
                </h3>
                <p className="mt-3 mb-5 text-white font-weight-600 text-center">
                  We bundle several SEO services together into a cost-effective
                  and time-effective{" "}
                  <span className="d-lg-block">
                    approach to optimize your website.
                  </span>
                </p>
                <div className="seo-all-blurb row justify-content-between flex-lg-row-reverse align-items-center text-white">
                  <div className="col-md-6 col-lg-5">
                    <div className="seo-all-blurb__img">
                      <img src="/revenue-bg.png" alt="All in SEO Background" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5">
                    <ul className="mt-5 ml-4">
                      <li className="text-check text-justify line-height-2  my-3">
                        Comprehensive analysis of your website, your
                        competition, Search Engine visibility . Usage of a
                        variety of methods to obtain the best keywords to drive
                        quality traffic to your website.
                      </li>
                      <li className="text-check line-height-2  my-3">
                        Onpage optimization to improve the visibility and
                        usability of your website in search engines.
                      </li>
                      <li className="text-check line-height-2  my-3">
                        Quality Inbound and internal linking to highly rank onh
                        search.
                      </li>
                      <li className="text-check line-height-2  my-3">
                        Meta optimization to drive more organic traffic to your
                        website
                      </li>
                      <li className="text-check line-height-2  my-3">
                        SEO Copywriting: reporting to meet your business goals
                        and make wise decisions that improve ROI.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </Layout>
      )}
    </Media>
  )
}