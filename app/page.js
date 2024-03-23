"use client";

import Header from "@/components/Header";
import WarinfoPage from "@/components/Warinfo";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div``;

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <WarinfoPage />
      </Wrapper>
    </>
  );
}
