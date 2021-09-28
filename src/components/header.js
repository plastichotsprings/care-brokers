import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
export function Headergraphic() {
  return (
    <StaticImage
    src="../images/headergraphic.png"
    />
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  position: fixed;
  zIndex: 1000;
  width: 100%;
  background-color: #E7CAF8;
`;

const NavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#E7CAF8`,
      marginBottom: `1.45rem`
    }}
  >
    {/* Begin title and nav menu block */}

    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <NavContainer>
        <AnchorLink to="/#who" title="Who are care brokers?">Who?</AnchorLink>
        <AnchorLink to="/#findings" title="Our findings">Findings</AnchorLink>
      </NavContainer>

    </HeaderContainer>

    {/* End title and nav menu block */}

    <div>
      <h3
        style={{
          color: `black`,
          marginLeft: `2em`,
          marginRight: `2em`,
          paddingTop: `4em`,
          fontStyle: `italic`
         }}
       >
          noun: a company, organization, or individual acting as an intermediary between care workers and their clients.
      </h3>
      <center>
        <StaticImage
        style= {{
          margin: 0,
          zIndex: 0
        }}
        src="../images/headergraphic.png"
        />
      </center>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
