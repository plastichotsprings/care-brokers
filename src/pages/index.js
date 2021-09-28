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

const SectionFindings = styled.div`

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

const SectionSoWhat = styled.div`
  font-family: sans-serif;
  font-size: 1.2rem;
`;

const SectionCulture = styled.div`
  font-family: sans-serif;
`;

const SubSectionQuote = styled.div`
  font-family: sans-serif;
`;

const FancyQuote = styled.div`
  font-size: 6rem;
  `;

const SubSectionLetter = styled.div`

`;

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SectionIntro>
        <h2 style={{}}>Who is a Care Broker?</h2>
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
          <h2 style={{}}>Who can use this resource?</h2>
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
          <h3> Statement about Brokers impacts on care givers and care relationships i.e. why we are paying attention to care brokers == end goals/strategy to get there</h3>
      </SectionIntro>

      <SectionFindings>
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
      </SectionFindings>

      <SectionSoWhat>
      <h1>So What?</h1>
      <h3>Summary sentence...</h3>
      <p style={{fontWeight:'bold',}}>
        <ul>
          <li>What users need to know/best practice</li>
            <p style={{fontWeight:`lighter`,}}>detail...</p>
          <li>anything else</li>
            <p style={{fontWeight:`lighter`,}}>detail...</p>
          <li>anything else</li>
            <p style={{fontWeight:`lighter`,}}>detail...</p>
        </ul>
      </p>
      </SectionSoWhat>

      <SectionCulture>
      <h1>Challenging the Dominant Culture</h1>
      <br />
      <FancyQuote style={{marginBottom:`-2%`, marginLeft:`2rem`,}}><div>“</div></FancyQuote>
        <SubSectionQuote style={{marginLeft:`5rem`, marginRight:`5%`, marginTop:`-5%`}}>
        <p>
          And so, when we recruit people, or when people come in contact with ‘Co-op,’ I believe that the image that they see is... is an alternative to the mainstream, dominant culture. And I think what happens a lot of the time is that there’s no acknowledgement that the dominant culture is in everyone, whether they’re in a co-op, or in a traditional top-down hierarchy — because it’s internalized capitalism.
        </p>
        </SubSectionQuote>
        <SubSectionLetter>
        <p>
        For this project, we conducted 60-90 minute semi-structured interviews with 15 care workers who had experience using digital platforms. Our goal was to learn how these apps could be better designed, prioritizing the needs of care workers. In other words, we are taking into consideration the point of view of care workers who use apps. This is significant not only because workers have direct experiences with digital platforms approaching a more accurate account or knowledge of the workplace, but also because taking this viewpoint is critical for understanding how to undermine the most exploitative aspects of care work and how we can envision alternatives.
        </p>
        <p>
        More often than not, research and design is conducted with the aim of increasing profits for the care brokering company. In this case, the point of view of the company or perhaps at times the paying client is taken into consideration, while the workers’ viewpoint is neglected. When profit is the primary motive, exploitation is allowed to run rampant.
        </p>
        <p>
        This is not always done intentionally, either. Designers and researchers may often wrongly assume that their design and their research is objective or politically-neutral, which is just another way to say that it is uncritical or supportive of the status quo. Designers may set out with the best of intentions, but without asking themselves “who is this design accountable to?” they run the risk of reproducing the material conditions of the dominant culture, as P10 put it, because of a failure to interrogate internalized capitalism.
        </p>
        <p>
        At stake here is the question of what Mark Fisher has called “capitalist realism,” or the belief that capitalism is the only or best way to organize human social life. Which in turn has implications for how we believe social change is supposed to come about, the importance of workplace democracy and economic and social justice.
        </p>
        <p>
        What we are really talking about here is alternatives to the dominant culture.
        </p>
        </SubSectionLetter>
        <h4>
        Further Reading
        </h4>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </SectionCulture>
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
