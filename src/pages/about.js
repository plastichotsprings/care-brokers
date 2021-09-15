import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About the study and authors</h1>

    <p>This site showcases selected quotations from nannies and caregivers, recruited for our study designed to learn more about their work experiences. We asked them about their background and history of caregiving, registering for and using care work platforms, and what a typical day of work is like.</p>

    <p>We were especially interested in any technology they encountered, used, or navigated in the context of their work (including surveillance cameras and virtual assistants).Other questions included, "What was your favorite caregiving experience?" and, "If you could change anything about your work, what would it be?"</p>

    <p>Please do not hesitate to contact us at cmucarelabor [at] gmail [dot] com with any questions or comments. We'd love to hear from you!</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
