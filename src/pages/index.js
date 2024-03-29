import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

const sliderSettings = {
  infinite: false,
  adaptiveHeight: true,
  dots: true
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
                  <p style={{fontWeight:`lighter`,}}>A public agency or private organization that offers home health care services to individuals in out-of-hospital settings, such as private homes, boarding homes, hospices, shelters, and so on. Typically regulated and licensed by governments only if they meet certain criteria.</p>
                <li>Online Care Platforms (like Care.com)</li>
                  <p style={{fontWeight:`lighter`,}}>Care work platforms are digital infrastructures that enable care work service providers and individuals seeking care work services to interact. The platforms we studied advertise direct online access to care workers for childcare, housekeeping, eldercare, and other services.</p>
                <li>Care Co-operatives</li>
                  <p style={{fontWeight:`lighter`,}}>A co-op organization is a jointly or democratically owned business. In the care co-op whose members we interviewed, care workers and individuals receiving care participate together in decision-making activities. </p>
                <li>Social Media Groups</li>
                  <p style={{fontWeight:`lighter`,}}>We interviewed several members of online communities who utilize the group features available on social networking services or messenger applications to crowd-source content pertaining to employment and other opportunities. Usually moderated by one or more volunteers in the group.</p>
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
              <li>web developers and designers of digital platforms</li>
            </ul>
          </p>

        <p style={{fontWeight:`lighter`,}}>As we spoke to care workers, we noticed that their work was structured significantly by the app, company, or organization mediating their relationship with their client. We decided to call that mediating body "the care broker." We found similar impacts and effects that brokers had across our interviews. This was true even of brokers that claim to be more supportive or democratic, such as care co-operatives.</p>

        <p style={{fontWeight:`lighter`,}}>We think that it’s important to put brokers under the magnifying glass. The common knowledge about care workers and employers suggests that care workers primarily or exclusively use personal networks or agencies. Far less is known about different types of care brokers such as emerging care work platforms like Care.com, SitterCity, or online communities. Our goal is to understand how each type of care broker functions and, ultimately, to assess their strengths and weaknesses. We are also interested in the behaviors, motivations and best practices of care workers and employers who use various types of care brokers.

        To this end, we sought to include the voice of critical stakeholders: 15 care workers who used various types of brokers including traditional agencies, online care work platforms, co-operatives and online communities, with several who had used multiple types of brokers throughout their careers and some who currently use multiple types. Their experiences can be summarized in the Findings section below.</p>
      </SectionIntro>

      <SectionFindings id="findings" class="front-text">
      <StaticImage class="full-width"
      src="../images/bgfindings.png" layout="fullWidth" style={bgStyle}
      />
        <h1>Findings</h1>
        <p>We decided to organize our findings into five major themes: onboarding, surveillance, hacking the broker, the digital and language divide, and positive experiences. You can swipe on each box, or interact with the arrows and dot controller around it, to view anonymized quotes from participants that relate to each theme.</p>
          <h2>Onboarding</h2>
          <Slider {...sliderSettings}>
            <OnboardingBox>
              <p>{ getWhyText(data, "onboarding") }</p>
            </OnboardingBox>
            <OnboardingBox>
              <p>{ getSliderText(data, "onboarding", "1") }</p>
            </OnboardingBox>
            <OnboardingBox>
              <p>{ getSliderText(data, "onboarding", "2") }</p>
            </OnboardingBox>
          </Slider>

          <h2>Technology and Surveillance</h2>
          <Slider {...sliderSettings}>
            <TechBox>
              <p>{ getWhyText(data, "surveillance") }</p>
            </TechBox>
            <TechBox>
              <p>{ getSliderText(data, "surveillance", "1") }</p>
            </TechBox>
            <TechBox>
              <p>{ getSliderText(data, "surveillance", "2") }</p>
            </TechBox>
            <TechBox>
              <p>{ getSliderText(data, "surveillance", "3") }</p>
            </TechBox>
          </Slider>

          <h2>"Hacking" the Broker</h2>
            <Slider {...sliderSettings}>
            <HackingBox>
              <p>{ getWhyText(data, "hacking") }</p>
            </HackingBox>
            <HackingBox>
              <p>{ getSliderText(data, "hacking", "1") }</p>
            </HackingBox>
            <HackingBox>
              <p>{ getSliderText(data, "hacking", "2") }</p>
            </HackingBox>
            </Slider>

          <h2>The Digital (and Language) Divide</h2>
            <Slider {...sliderSettings}>
            <DivideBox>
              <p>{ getWhyText(data, "digitaldivide") }</p>
            </DivideBox>
            <DivideBox>
              <p>{ getSliderText(data, "digitaldivide", "1") }</p>
            </DivideBox>
            <DivideBox>
              <p>{ getSliderText(data, "digitaldivide", "2") }</p>
            </DivideBox>
            </Slider>

          <h2>Positive Experiences with Brokers & Clients</h2>
            <Slider {...sliderSettings}>
            <PositiveBox>
              <p>{ getWhyText(data, "posexperiences") }</p>
            </PositiveBox>
            <PositiveBox>
              <p>{ getSliderText(data, "posexperiences", "1") }</p>
            </PositiveBox>
            <PositiveBox>
              <p>{ getSliderText(data, "posexperiences", "2") }</p>
            </PositiveBox>
            </Slider>
      </SectionFindings>
      <br />

      <SectionSoWhat id="sowhatnow">
      <h1>So What Now?</h1>
      <p>The following are questions and resources curated to support the care work community.</p>
      <p style={{fontWeight:`bold`,}}>Sample Contracts</p>
        <ul>
          <li><a href="https://docs.google.com/document/d/1zxP6UbNrYsPIfhOm2JA-y0mAMwOzhXL6/edit" target="_blank" rel="noopener noreferrer">Example contract with commentary, provided by Participant 13</a></li>
          <li><a href="https://employers.domesticworkers.org/care-during-covid/nannies/documents-for-employers"  target="_blank" rel="noopener noreferrer">National Domestic Workers Alliance: Documents for Nanny Employers</a></li>
        </ul>

        <p style={{fontWeight:`bold`,}}>Other Resources</p>
        <ul>
          <li><a href="https://www.dwherstories.com/" target="_blank" rel="noopener noreferrer">A History of Domestic Work and Worker Organizing</a></li>
          <li><a href="https://www.cadomesticworkers.org/know-your-rights/" target="_blank" rel="noopener noreferrer">Know Your Rights: California Domestic Workers Coalition</a></li>
          <li><a href="https://workerorganizing.org/"  target="_blank" rel="noopener noreferrer">Emergency Workplace Organizing Committee (EWOC)</a></li>
        </ul>

      <p style={{fontWeight:`bold`,}}>Questions</p>
        <ul>
          <li>For parents, families and employers...
            <ol style={{fontWeight:`lighter`,}}>
              <li>Are you familiar with your responsibilities as an employer of a care worker?</li>
              <li>If using a care broker, are you familiar with their practices and how they compare to other options?</li>
              <li>Are you willing to pay a care worker paid time off? Gas and mileage?</li>
              <li>Are you prepared to have a conversation with a care worker about their and your needs and expectations to create a positive experience?</li>
            </ol>
          </li>
          <li>For care workers...
            <ol style={{fontWeight:`lighter`,}}>
              <li>Do you know your rights as a care worker i.e. minimum wage, paid time off, protection from retaliation, etc.?</li>
              <li>Do you know about different options for care brokers in your area i.e. online communities, digital platforms, traditional care agencies?</li>
            </ol>
          </li>
          <li>For researchers and designers...
            <ol style={{fontWeight:`lighter`,}}>
              <li>How might different systems of care distribution challenge the dominant culture?</li>
              <li>Are you familiar with the history of care work in the United States?</li>
              <li>How might care brokers (e.g. agencies and platforms) design technologies that prioritize healthy care worker-patient relationships? How might healthy care worker-broker relationships facilitate this?</li>
            </ol>
          </li>
        </ul>
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
          And so, when we recruit people, or when people come in contact with ‘Co-op,’ I believe that the image that they see is... is an alternative to the mainstream, dominant culture. And I think what happens a lot of the time is that there’s no acknowledgement that the dominant culture is in everyone, whether they’re in a co-op, or in a traditional top-down hierarchy — because it’s internalized capitalism.</i><strong> [P09, co-op worker]</strong>
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

function getWhyText(data, theTopic) {
  const sliderItemsArray = [];

  let items = data.dataJson.whys.filter( item =>
    item.topic === theTopic
  );

  items.forEach( item =>
    sliderItemsArray.push(<p>{item.why}</p>)
  )

  return sliderItemsArray;
}

function getSliderText(data, theTopic, theEntry) {
  const sliderItemsArray = [];

  let items = data.dataJson.quotes.filter( item =>
    item.topic === theTopic & item.entry === theEntry
  );

  items.forEach( item =>
    sliderItemsArray.push(<p>{item.quote} [<strong>{item.speaker}, {item.broker} worker]</strong></p>)
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
        entry
        speaker
        insight
      }
      whys {
        topic
        why
      }
    }
  }
`
