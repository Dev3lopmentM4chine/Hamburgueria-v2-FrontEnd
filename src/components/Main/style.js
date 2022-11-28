import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: 0;
  }
`;

export { StyledMain };
