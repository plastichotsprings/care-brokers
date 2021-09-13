import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>A 'care broker' is a company, organization, or individual acting as an intermediary between care workers and their clients. This site collects the anonymized words and experiences of care workers who navigate care brokers in their day-to-day lives. We hope to show the similarities and differences in how care brokers structure and control caregivers and their workplaces.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">About the authors</Link>
    </p>
  </Layout>
)

export default IndexPage
