import styled from "styled-components";

const BarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #fbb90f;
`;

const Bar = styled.div`
  height: 100%;
  background-color: #219cf2;
  width: ${(props) => props.progress}%;
`;

const ProgressBar = ({ progress }) => {
  return (
    <BarContainer>
      <Bar progress={progress} />
    </BarContainer>
  );
};

export default ProgressBar;
