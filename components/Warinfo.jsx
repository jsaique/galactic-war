import { styled } from "styled-components";
import Center from "./Center";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ProgressBar from "./ProgressBar";
import WarStats from "./WarStats";
import Count from "./Count";

export default function WarinfoPage() {
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
              <Title>ERATA PRIME</Title>
              <SubTitle>TERMINID CONTROL</SubTitle>
              <Count>5.12970% LIBERATED</Count>
              <ProgressBar progress={"5.12970"} />
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
