import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const sliderSettings = {
  infinite: false
}

const SectionIntro = styled.div`
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 6em;
`;

const SectionFindings = styled.div`
  margin-bottom: 6m;
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
  margin-bottom: 6em;
`;

const SectionCulture = styled.div`
  font-family: sans-serif;
  margin-bottom: 6em;
`;

const SubSectionQuote = styled.div`
  font-family: sans-serif;
`;

const FancyQuote = styled.div`
  font-size: 6rem;
  `;

const SubSectionLetter = styled.div`
  margin-bottom: 4em;
`;

const bgStyle = {
  position: 'absolute'
}

export default function IndexPage({ data }) {
  return (
    <Layout>

      <SectionIntro id="who" class="front-text">
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
            <StaticImage class="full-width" style={bgStyle}
            src="../images/bubbles.png" layout="fullWidth"
            />
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

      <br />

      <SectionFindings id="findings" class="front-text">
      <StaticImage class="full-width"
      src="../images/bgfindings.png" layout="fullWidth" style={bgStyle}
      />
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
      <br />
      <SectionSoWhat>
      <h1>So What Now?</h1>
      <h3>Summary sentence...</h3>
      <p style={{fontWeight:`bold`,}}>
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

      <SectionCulture id="culture" class="front-text">
      <StaticImage class="full-width"
      src="../images/bgculture.png" layout="fullWidth" style={bgStyle}
      />
      <h1>Challenging the Dominant Culture</h1>
      <br />
      <FancyQuote style={{marginBottom:`-2%`, marginLeft:`2rem`,}}><div>“</div></FancyQuote>
        <SubSectionQuote style={{marginLeft:`5rem`, marginRight:`5%`, marginTop:`-5%`}}>
        <p><i>
          And so, when we recruit people, or when people come in contact with ‘Co-op,’ I believe that the image that they see is... is an alternative to the mainstream, dominant culture. And I think what happens a lot of the time is that there’s no acknowledgement that the dominant culture is in everyone, whether they’re in a co-op, or in a traditional top-down hierarchy — because it’s internalized capitalism.
        </i></p>
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
        <ul class="readinglist">
          <li>
            <a href="https://journals.sagepub.com/doi/pdf/10.1177/0141778919879744"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Amrute, Sareeta. “Of Techno-Ethics and Techno-Affects.” Feminist Review, vol. 123, no. 1, 2019, pp. 56–73. Crossref, doi:10.1177/0141778919879744.
            </a>
          </li>
          <li>
            <a href="https://www.sup.org/books/title/?id=17330"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Boris, Eileen and Parreñas, Rhacel. Intimate Labors: Cultures, Technologies, and the Politics of Care. Palo Alto: Stanford University Press, 2010.
            </a>
          </li>
          <li>
            <a href="https://www.tandfonline.com/doi/abs/10.1080/14616742.2015.1007728?journalCode=rfjp20"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Brown, Rachel. “Re-examining the Transnational Nanny.” International Feminist Journal of Politics 18:2, 210-229, 2015.
            </a>
          </li>
          <li>
            <a href="https://www.google.com/books/edition/Disposable_Domestics/QdxeDAAAQBAJ?hl=en&gbpv=0&kptab=overview"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Chang, Grace. Disposable Domestics: Immigrant Women Workers in the Global Economy. Chicago: Haymarket Books, 2016.
            </a>
          </li>
          <li>
            <a href="https://www.google.com/books/edition/Riding_for_Deliveroo/bq5rwwEACAAJ?hl=en"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Cant, Callum. Riding for Deliveroo: Resistance in the New Economy. Malden: Polity Press, 2020.
            </a>
          </li>
          <li>
            <a href="https://books.google.com/books?id=OmKUoYYGlngC&newbks=0&hl=en&source=newbks_fb"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Carrillo, Teresa. “The Best of Care: Latinas as Transnational Mothers and Caregivers” in Technofuturos: Critical Interventions in Latina/o Studies. Minneapolis: Lexington Books, 2007.
            </a>
          </li>
          <li>
            <a href="https://books.google.com/books/about/Gender_and_Technology_in_the_Making.html?id=85mwBllqv98C"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Cockburn, Cynthia and Susan Ormrod. Gender and Technology in the Making. SAGE Publications, 1993.
            </a>
          </li>
          <li>
            <a href="https://www.google.com/books/edition/Women_Race_Class/74QzFiv1w10C?hl=en&gbpv=1&dq=angela+davis+women+race+and+class&printsec=frontcover"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Davis, Angela. “The Approaching Obsolescence of Housework” in Women, Race and Class. New York: Random House (Vintage Books), 1983.
            </a>
          </li>
          <li>
            <a href="https://books.google.com/books?id=WEw9CwAAQBAJ&dq=Dyer-Witheford,+Nick.+Cyber-proletariat:+Global+Labor+in+the+Digital+Vortex.+London:+Pluto+Press,+2015.&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwj3go3e7KfzAhX3MlkFHUmTB1cQ6AF6BAgDEAI"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Dyer-Witheford, Nick. Cyber-proletariat: Global Labor in the Digital Vortex. London: Pluto Press, 2015.
            </a>
          </li>
          <li>
            <a href="https://politybooks.com/bookdetail/?isbn=9781509520626&subject_id=88"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Hester, Helen. Xenofeminism. Malden: Polity, 2018.
            </a>
          </li>
          <li>
            <a href="https://www.ucpress.edu/book/9780520251717/domestica"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Hondagneu-Sotelo, Pierrette. Domestica: Immigrant Workers Cleaning and Caring in the Shadows of Affluence. Los Angeles: University of California Press, 2001.
            </a>
          </li>
          <li>
            <a href="https://www.jstor.org/stable/j.ctt1287j8b"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Huws, Ursula. Labor in the Global Digital Economy: The Cybertariat Comes of Age. Monthly Review Press, 2014.
            </a>
          </li>
          <li>
            <a href="https://www.ilo.org/travail/Whatsnew/WCMS_173363/lang--en/index.htm"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            International Labor Office. Domestic Workers Around the World: Global and Regional Statistics and the Extent of Legal Protections. Geneva: International Labor Organization, 2013.
            </a>
          </li>
          <li>
            <a href="https://www.sup.org/books/title/?id=1432"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Matthews, Glenna. Silicon Valley, Women and the California Dream: Gender, Class and Opportunity in the Twentieth Century. Palo Alto: Stanford University Press,
            </a>
          </li>
          <li>
            <a href="https://books.google.com/books/about/Breaking_Things_at_Work.html?id=vRMbywEACAAJ"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Mueller, Gavin. Breaking Things at Work: The Luddites Were Right About Why You Hate Your Job. New York: Verso, 2021.
            </a>
          </li>
          <li>
            <a href="https://nyupress.org/9781479837243/algorithms-of-oppression/"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Noble, Safiya. Algorithms of Oppression: How Search Engines Reinforce Racism. New York: New York University Press, 2018.
            </a>
          </li>
          <li>
            <a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9780470696569"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Ong, Aihwa and Stephen J. Collier. Global Assemblages: Technology, Politics, and Ethics as Anthropological Problems. Blackwell Publishing, 2005.
            </a>
          </li>
          <li>
            <a href="https://archive.org/details/betweenwomendome00roll"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Rollins, Judith. Between Women: Domestics and their Employers. Philadelphia: Temple University Press, 1985.
            </a>
          </li>
          <li>
            <a href="https://books.google.com/books/about/More_Work_For_Mother.html?id=9YM1tAEACAAJ"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Schwartz Cowan, Ruth. More Work for Mother: The Ironies of Household Technology from the Open Hearth to the Microwave. Basic Books, 1985.
            </a>
          </li>
          <li>
            <a href="https://www.wiley.com/en-us/Platform+Capitalism-p-9781509504862"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Srnicek, Nick. Platform Capitalism. Malden, MA: Polity Press, 2017.
            </a>
          </li>
          <li>
            <a href="https://datasociety.net/wp-content/uploads/2018/06/Data_Society_Beyond_Disruption_FINAL.pdf"
            target="_blank" rel="noopener noreferrer" style={{textDecoration:`none`, color:`black`,}}>
            Ticona,  Julia, Alexandra Mateescu and Alex Rosenblat. Beyond Disruption: How Tech Shapes Labor Across Domestic Work and Ridehailing. New York, NY: Data and Society, 2018.
            </a>
          </li>

        </ul>
      </SectionCulture>
      <br />

      <SectionIntro id="about">
      <h2>Authors and Acknowledgments</h2>

      <p>Magally "Maga" Miranda Alcázar (she/they) is a graduate student in Chicana/o and Central American Studies at UCLA. Using methods that emphasize the co-production of knowledge with rank-and-file workers, their research explores the contested meanings of care, work and Latinidad in the context of a globalized economy of care and information. Maga is also the co-founder of the multimedia platform SAL(T): Xicana Marxist Thoughts.</p>

      <p>Freesoul El Shabazz-Thompson (he/him) is a designer, researcher, and artist exploring communal creation and control of technologies. He is focused on democratic design and the social role of design in developing artifacts and experiences that challenge unsustainable and inequitable practices and beliefs. He is currently a research associate in design and HCI with the <a href="https://www.thecoalalab.com/" rel="noopener noreferrer" target="_blank">CoALA Lab</a> led by Dr. Ken Holstein at Carnegie Mellon University.</p>

      <p>Alex Ahmed (she/her) is a postdoc at Carnegie Mellon University, affiliated with the Tech Solidarity Lab led by Dr. Sarah Fox. Her research applies a Marxist, worker-centered perspective on the “future of work,” participatory design, and the intersections between labor and technology. Her writing has been published in several academic venues, in addition to Pangyrus Literary Magazine and a forthcoming piece in Science for the People Magazine.</p>
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
