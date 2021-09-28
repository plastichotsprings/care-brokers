import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
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
`;

const NavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#E7CAF8`,
      marginBottom: `1.45rem`,
      zIndex: 99
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
        <Link to="/">test</Link>
        <Link to="/">test2</Link>
      </NavContainer>

    </HeaderContainer>

    {/* End title and nav menu block */}

    <div
      style={{
        marginLeft: `2em`,
        marginRight: `2em`,
      }}
      >
      <h3
        style={{
          color: `black`,
         }}
       >
          Care Broker (n:) a company, organization, or individual acting as an intermediary between care workers and their clients.
      </h3>
    </div>
    <div>
      <center>
        <StaticImage
        style= {{
          margin: 0,
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
