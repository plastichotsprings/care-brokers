import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Layout from "../components/layout"
import { graphql } from 'gatsby';

const sliderSettings = {
  infinite: false
}

const SectionIntro = styled.div`
  font-family: sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1em;
  background-color: #fff;
`;

const OnboardingBox = styled.div`
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

    <SectionIntro id="who">
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
            <li>web developers and designers of digital platforms</li>
          </ul>
        </p>
    </SectionIntro>
     
    <SectionIntro id="findings">
      <h2 style={{backgroundColor: `yellow`,}}>Findings</h2>
      <p>Statement about the proceeding themes and sub-themes, and how to use the slidey boxes...</p>

      {/* Begin slidey boxes */}
      <h2>Onboarding</h2>
        <Slider {...sliderSettings}>
          <OnboardingBox>
            <p>{ getSliderText(data,"why", "agency", "negotiations") }</p>
          </OnboardingBox>
          <OnboardingBox>
            <p>{ getSliderText(data, "agency", "negotiations") }</p>
          </OnboardingBox>
          <OnboardingBox>
            <p>{ getSliderText(data, "agency", "negotiations") }</p>
          </OnboardingBox>
        </Slider>

        <h2>Technology and Surveillance</h2>
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

        <h2>"Hacking" the Algorithm</h2>
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

        <h2>The Digital Language Divide</h2>
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

        <h2>Positive Experiences</h2>
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
      </SectionIntro>

      <SectionIntro id="culture">
      <h2 style={{backgroundColor: `yellow`,}}>Challenging the Dominant Culture</h2>
        <p>For this project, we conducted 60-90 minute semi-structured interviews with 15 care workers who had experience using digital platforms. Our goal was to learn how these apps could be better designed, prioritizing the needs of care workers. In other words, we are taking into consideration the point of view of care workers who use apps. This is significant not only because workers have direct experiences with digital platforms approaching a more accurate account or knowledge of the workplace, but also because taking this viewpoint is critical for understanding how to undermine the most exploitative aspects of care work and how we can envision alternatives.</p>

        <p>More often than not, research and design is conducted with the aim of increasing profits for the care brokering company. In this case, the point of view of the company or perhaps at times the paying client is taken into consideration, while the workers’ viewpoint is neglected. When profit is the primary motive, exploitation is allowed to run rampant.</p> 

        <p>This is not always done intentionally, either. Designers and researchers may often wrongly assume that their design and their research is objective or politically-neutral, which is just another way to say that it is uncritical or supportive of the status quo. Designers may set out with the best of intentions, but without asking themselves “who is this design accountable to?” they run the risk of reproducing the material conditions of the dominant culture, as P10 put it, because of a failure to interrogate internalized capitalism.</p>

        <p>At stake here is the question of what Mark Fisher has called “capitalist realism,” or the belief that capitalism is the only or best way to organize human social life. Which in turn has implications for how we believe social change is supposed to come about, the importance of workplace democracy and economic and social justice.</p>

        <p>What we are really talking about here is alternatives to the dominant culture.</p>
      
      <h3>Further Reading</h3>

      </SectionIntro>

      <SectionIntro id="about">
      <h2 style={{backgroundColor: `yellow`,}}>Authors and Acknowledgments</h2>
      <p>insert content here</p>

      </SectionIntro>

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
