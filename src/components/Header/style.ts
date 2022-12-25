import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    padding: 0px 6px 0px 25px;
  }

  & > button[type="button"] {
    background-color: gray;
  }

  & > .navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
