import styled from "styled-components";

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  max-width: 12000px;
  margin: 0 auto;
  padding: 0 20px;
`;
