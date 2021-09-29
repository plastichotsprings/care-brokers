import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
export function Headergraphic() {
  return (
    <StaticImage
    src="../images/headergraphic.png"
    />
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#e6caf7`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
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
