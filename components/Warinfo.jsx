import { styled } from "styled-components";
import Center from "./Center";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ProgressBar from "./ProgressBar";
import WarStats from "./WarStats";
import Count from "./Count";
import React, { useState, useEffect } from "react";

export default function WarinfoPage() {
  const [warNews, setWarNews] = useState(null);

  useEffect(() => {
    const fetchWarNews = async () => {
      try {
        const response = await fetch(
          "https://helldiverstrainingmanual.com/api/v1/war/news"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch war status");
        }
        const data = await response.json();
        setWarNews(data);
      } catch (error) {
        console.error("Error fetching war status:", error);
      }
    };
    fetchWarNews();
  }, []); // Empty dependency array ensures this effect runs only once

  const Background = styled.div`
    background-color: #01212f;
    padding: 50px 0;
    height: 80vh;
  `;

  const ColumnWrapper = styled.div`
    background-color: #01212f;
    backdrop-filter: blur(8px);
    border: 2px solid #fee90d;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1.2fr 0.8fr;
    }
  `;

  const Box = styled.div`
    background-color: #090000;
    margin: 5px;
    padding: 30px;
  `;

  return (
    <Background>
      <Center>
        <ColumnWrapper>
          <Box>
            <Center>
              {/* {warNews?.map((n) => (
                <SubTitle key={n.id}>
                  @{n.message}
                  <br /> <hr />
                </SubTitle>
              ))} */}
              {warNews && warNews.length > 0 && (
                <SubTitle key={warNews[0].id}>
                  @{warNews[0].message}
                  <br /> <hr />
                </SubTitle>
              )}
            </Center>
          </Box>
          <Box>
            <Center>
              <WarStats>Helldivers Active</WarStats>
              <Count>6883</Count>
              <WarStats>Enemies Killed</WarStats>
              <Count>541185</Count>
              <WarStats>Helldivers KIA</WarStats>
              <Count>11169</Count>
              <WarStats>Bullets Fired</WarStats>
              <Count>3909957</Count>
            </Center>
          </Box>
        </ColumnWrapper>
      </Center>
    </Background>
  );
}
