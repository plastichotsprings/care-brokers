import * as React from "react"
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
export function Headergraphic() {
  return (
    <StaticImage
    src="../images/headergraphic.png"
    width={100%}
    />
  )
}

const sliderSettings = {
  infinite: false
}

const SectionHeader = styled.div`
  margin-bottom: 0em;
  background-color: #000;
`;

const AgencyBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #FFBABA;
`;

const PlatformsBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #AED3FF;
`;

const CoopsBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #FEFFBF;
`;

export default function IndexPage({ data }) {
  return (
    <Layout>


      <SectionHeader>
        <Seo title="Home" />

      </SectionHeader>

      <h2>Agencies</h2>
      <Slider {...sliderSettings}>
        <AgencyBox>
          <h4>Job Finding and Assignments</h4>
          <p>{ getSliderText(data, "agency", "jobfinding") }</p>
        </AgencyBox>
        <AgencyBox>
          <h4>Negotiations</h4>
          <p>{ getSliderText(data, "agency", "negotiations") }</p>
        </AgencyBox>
      </Slider>

      <h2>Care Work Platforms</h2>
      <Slider {...sliderSettings}>
        <PlatformsBox>
          <h4>Job Finding and Assignments</h4>
          <p>{ getSliderText(data, "platform", "jobfinding") }</p>
        </PlatformsBox>
        <PlatformsBox>
          <h4>Negotiations</h4>
          <p>{ getSliderText(data, "platform", "negotiations") }</p>
        </PlatformsBox>
      </Slider>

      <h2>Co-operatives</h2>
      <Slider {...sliderSettings}>
        <CoopsBox>
          <h4>Job Finding and Assignments</h4>
          <p>{ getSliderText(data, "co-op", "jobfinding") }</p>
        </CoopsBox>
        <CoopsBox>
          <h4>Negotiations</h4>
          <p>{ getSliderText(data, "co-op", "negotiations") }</p>
        </CoopsBox>
      </Slider>

      <br />
      <p>
        <Link to="/about/">About the study and authors</Link>
      </p>
    </Layout>
  )
}

function getSliderText(data, theBroker, theTopic) {
  const sliderItemsArray = [];

  let items = data.dataJson.quotes.filter(
    quote => quote.broker === theBroker & quote.topic === theTopic
  );

  items.forEach( item =>
    sliderItemsArray.push(<p>{item.quote}</p>)
  );
  return sliderItemsArray;
}

export const query = graphql`
  query MyQuery {
    dataJson {
      quotes {
        broker
        topic
        quote
      }
    }
  }
`
