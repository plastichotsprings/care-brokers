import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image";
import DesktopNavMenu from "./DesktopNav"
import MobileNavMenu from "./MobileNav";

const Header = ({ siteTitle }) => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
      
      <div
        style={{
          background: `#E7CAF8`,
          marginBottom: `1em`
        }}
      >
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
            style={{
              margin: 0,
            }}
            src="../images/headergraphic.png"
            width="1220" //Set max width
          />
        </center>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
