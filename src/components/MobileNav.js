import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const MobileNavMenu = () => {

  const [menuOpen, toggleMenuOpen] = useState(false)

  return (
    <MenuBar>
      <Link to="/">
        <h2>Care Brokers</h2>
      </Link>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)} >
          <div></div>
          <div></div>
          <div></div>
        </MenuIcon>
      </MenuIconContainer>
  </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.header`

  @media ${breakpoints.md} {
    display: none;
  }

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

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 11;

  div {
    width: 2rem;
    height: .25rem;
    background: ${({ menuOpen }) => (menuOpen ? "red" : "black")};
    border-radius: 10px;
    transform-origin: 1px;

    :first-child {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(40deg)" : "rotate(0)")};
    }
  
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) => menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }
  
    :nth-child(3) {
      transform: ${ ( { menuOpen }) => menuOpen ? "rotate(-40deg)" : "rotate(0)"}    
    }
  }
`;
