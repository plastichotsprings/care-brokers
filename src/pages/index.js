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
    />
  )
}

const sliderSettings = {
  infinite: false
}

const SectionIntro = styled.div`
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1em;
  background-color: #fff;
`;

const OnboardingBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #eee;
`;

const TechBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #eee;
`;

const HackingBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #eee;
`;

const DivideBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #eee;
`;

const PositiveBox = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #eee;
`;

export default function IndexPage({ data }) {
  return (
    <Layout>
    <SectionIntro>
      <h2 style={{backgroundColor: `yellow`,}}>Who is a Care Broker?</h2>
          <p>
            <ul>
              <li>Traditional Care Agencies</li>
                <p style={{fontWeight:`lighter`,}}>A traditional care agency...</p>
              <li>Online Care Platforms (like Care.com)</li>
                <p style={{fontWeight:`lighter`,}}>definition...</p>
              <li>Care Co-operatives</li>
                <p style={{fontWeight:`lighter`,}}>definition...</p>
              <li>Social Media Groups</li>
                <p style={{fontWeight:`lighter`,}}>definition...</p>
            </ul>
          </p>
        <h3> Statement about Brokers impacts on care givers and care relationships i.e. why we are paying attention to care brokers == end goals/strategy to get there</h3>
        <h2 style={{backgroundColor: `yellow`,}}>Who can use this resource?</h2>
        <p>We designed this site as a tool for various stakeholders including:</p>
        <p>
          <ul>
            <li>parents, families and employers looking to hire a care worker using a broker </li>
            <li>care workers looking to use a care broker to find jobs or gigs</li>
            <li>researchers interested in the nexus of technology and care</li>
            <li>policy makers</li>
            <li>professionals in the care broker industry</li>
            <li>web developers & designers of digital platforms</li>
          </ul>
        </p>
    </SectionIntro>
      <h1>Findings</h1>
      <h3>Statement about the themes and sub-themes...</h3>
      <h2>Onboarding</h2>
      <Slider {...sliderSettings}>
        <OnboardingBox>
          <p>{ getSliderText(data, ) }</p>
        </OnboardingBox>
        <OnboardingBox>
          <p>{ getSliderText(data, ) }</p>
        </OnboardingBox>
        <OnboardingBox>
          <p>{ getSliderText(data, ) }</p>
        </OnboardingBox>
      </Slider>

      <h2>Technology and Surveillance</h2>
      <Slider {...sliderSettings}>
        <TechBox>
          <p>{ getSliderText(data, ) }</p>
        </TechBox>
        <TechBox>
          <p>{ getSliderText(data, ) }</p>
        </TechBox>
        <TechBox>
          <p>{ getSliderText(data, ) }</p>
        </TechBox>
      </Slider>

      <h2>"Hacking" the Algorithm</h2>
        <Slider {...sliderSettings}>
        <HackingBox>
          <p>{ getSliderText(data, ) }</p>
        </HackingBox>
        <HackingBox>
          <p>{ getSliderText(data, ) }</p>
        </HackingBox>
        <HackingBox>
          <p>{ getSliderText(data, ) }</p>
        </HackingBox>
        </Slider>

        <h2>The Digital (and Language) Divide</h2>
          <Slider {...sliderSettings}>
          <DivideBox>
            <p>{ getSliderText(data, ) }</p>
          </DivideBox>
          <DivideBox>
            <p>{ getSliderText(data, ) }</p>
          </DivideBox>
          <DivideBox>
            <p>{ getSliderText(data, ) }</p>
          </DivideBox>
          </Slider>

          <h2>Positive Experiences with Brokers & Clients</h2>
            <Slider {...sliderSettings}>
            <PositiveBox>
              <p>{ getSliderText(data, ) }</p>
            </PositiveBox>
            <PositiveBox>
              <p>{ getSliderText(data, ) }</p>
            </PositiveBox>
            <PositiveBox>
              <p>{ getSliderText(data, ) }</p>
            </PositiveBox>
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
