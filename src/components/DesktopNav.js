import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints";

const DesktopNavMenu = () => {

  //Can use this for a scroll effect in the future
  //Credit: Chris DeSilva, https://www.youtube.com/watch?v=KA_tW7zK04w
  const [background, setBackground] = useState(false);
  const navRef = useRef();

  navRef.current = background;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll",handleScroll)
    }
  }, [])

  return (
    <div>
      <HeaderContainer background={background}>
        <Link to="/">
          <h2>Care Brokers</h2>
        </Link>

        <NavContainer>
          <AnchorLink to="/#who" title="Who are care brokers?">Who?</AnchorLink>
          <AnchorLink to="/#findings" title="Our findings">Findings</AnchorLink>
          <AnchorLink to="/#sowhatnow" title="So what now?">So What Now?</AnchorLink>
          <AnchorLink to="/#culture" title="Challenging the Dominant Culture">Challenging the Culture</AnchorLink>
          <AnchorLink to="/#about" title="About the study and authors">About</AnchorLink>
        </NavContainer>

      </HeaderContainer>
    </div>
  )
}

export default DesktopNavMenu

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  background-color: #E7CAF8;
  align-items: center;
  font-family: sans-serif;

  a {
    text-decoration: none;
    color: black;
    transition: color 300ms;

    :hover {
      color: red;
    }
  }

  h2 {
    margin: 0;
  }
`;

const NavContainer = styled.div`
  display: none;

  @media ${breakpoints.lg} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;
  }
`;
