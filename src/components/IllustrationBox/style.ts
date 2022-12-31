import styled from "styled-components";

export const StyledIllustratrionBox = styled.div`
  width: 95%;
  max-width: 377px;
  height: 179px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 800px) {
    height: 285px;
    gap: 25px;
  }

  & > .illustration {
    display: none;
    @media (min-width: 800px) {
      display: inline-block;
    }
  }
`;

export const StyledCard = styled.div`
  width: 100%;
  max-width: 377px;
  height: 95px;
  background-color: unset;
  border-radius: var(--radius-1);
  border: 2px solid var(--color-grey-20);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 19px;

  & > figure {
    width: 60px;
    height: 60px;
    background-color: rgba(39, 174, 96, 0.1);
    border-radius: var(--radius-1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    width: 100%;
    max-width: 261px;
    height: 66px;
    font-weight: var(--font-weight-1);

    p {
      font-size: var(--font-size-3);
      color: var(--color-grey-40);
    }
    p span {
      color: var(--color-grey-100);
      font-weight: var(--font-weight-3);
    }
  }
`;
