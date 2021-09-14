import * as React from "react"
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import Layout from "../components/layout"
import Seo from "../components/seo"

const sliderSettings = {
  autoplay: false,
  arrows: true,
  dots: false,
  infinite: false
}

const AgencyBox = styled.div`
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFBABA;
`;

const PlatformsBox = styled.div`
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #AED3FF;
`;

const CoopsBox = styled.div`
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FEFFBF;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>A 'care broker' is a company, organization, or individual acting as an intermediary between care workers and their clients. This site collects the anonymized words and experiences of care workers who navigate care brokers in their day-to-day lives. We hope to show the similarities and differences in how care brokers structure and control caregivers and their workplaces.</p>
    
    <h2>Agencies</h2>
    <Slider {...sliderSettings}>
      <AgencyBox>
        Some text
      </AgencyBox>
      <AgencyBox>
        Some more text
      </AgencyBox>
    </Slider>

    <h2>Care Work Platforms</h2>
    <Slider {...sliderSettings}>
      <PlatformsBox>
        Some text
      </PlatformsBox>
      <PlatformsBox>
        Some more text
      </PlatformsBox>
    </Slider>

    <h2>Co-operatives</h2>
    <Slider {...sliderSettings}>
      <CoopsBox>
        Some text
      </CoopsBox>
      <CoopsBox>
        Some more text
      </CoopsBox>
    </Slider>

    <p>
      <Link to="/page-2/">About the authors</Link>
    </p>
  </Layout>
)

export default IndexPage
