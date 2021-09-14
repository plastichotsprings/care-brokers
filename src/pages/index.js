import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout"
import Seo from "../components/seo"

const sliderSettings = {
  autoplay: false,
  arrows: true,
  dots: false,
  infinite: false
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>A 'care broker' is a company, organization, or individual acting as an intermediary between care workers and their clients. This site collects the anonymized words and experiences of care workers who navigate care brokers in their day-to-day lives. We hope to show the similarities and differences in how care brokers structure and control caregivers and their workplaces.</p>
    
    <Slider {...sliderSettings}>
      <div>
        Some text
      </div>
      <div>
        Some more text
      </div>
    </Slider>

    <p>
      <Link to="/page-2/">About the authors</Link>
    </p>
  </Layout>
)

export default IndexPage
