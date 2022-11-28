import styled from "styled-components";

export const StyledProductsList = styled.ul`
  width: 100%;
  height: 346px;
  overflow: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 800px) {
    width: 940px;
    max-width: 940px;
    height: 735px;
    align-items: flex-start;
    overflow: unset;
    flex-wrap: wrap;
    padding: 0;
  }
`;
