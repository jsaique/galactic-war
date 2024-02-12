"use client";

import styled from "styled-components";
import Center from "./Center";
import Link from "next/link";

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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
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
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>GW</Logo>
          <StyledNav>
            <Navlink href={"/"}>Home</Navlink>
            <Navlink href={"/"}>Galactic War</Navlink>
            <Navlink href={"/"}>Helldiver</Navlink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
