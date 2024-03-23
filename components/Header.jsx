"use client";

import styled from "styled-components";
import Center from "./Center";
import Link from "next/link";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const StyledHeader = styled.header`
  background-color: #01212f;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  color: #f1f5f9;
  text-decoration: none;
  position: relative;
  z-index: 3;
  font-weight: 900;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.navactive === "true" ? `display: block;` : `display: none;`}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #01212f;
  padding: 70px 20px 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const Navlink = styled(Link)`
  display: block;
  color: #f1f5f9;
  text-decoration: none;
  padding: 10px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #fbcf1e;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #f1f5f9;
  position: relative;
  z-index: 3;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [navActive, setActive] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Super Earth Ministry of Truth</Logo>
          <StyledNav navactive={navActive.toString()}>
            <Navlink href={"/"}>Helldivers</Navlink>
            <Navlink href={"/"}>Helldivers II</Navlink>
          </StyledNav>
          <IconContext.Provider value={{ size: "1rem" }}>
            <NavButton onClick={() => setActive((prev) => !prev)}>
              <GiHamburgerMenu />
            </NavButton>
          </IconContext.Provider>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
