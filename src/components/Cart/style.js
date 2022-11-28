import styled from "styled-components";

export const StyledCart = styled.div`
  width: 95%;
  max-width: 382px;
  height: 223px;
  max-height: 535px;
  border-radius: var(--radius-0);
  background-color: aqua;

  @media (min-width: 800px) {
    width: 365px;
    max-width: 365px;
    height: 223px;
    max-height: 530px;
  }

  .cartTitle {
    width: 100%;
    height: 65px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
  }
  .cartTitle h3 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
    color: var(--color-white);
    padding-left: 20px;
  }

  ul {
    width: 100%;
    height: 158px;
    background-color: var(--color-grey-0);
    overflow: auto;
    padding-top: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
  }

  .noItens {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .noItens h3 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
    color: var(--color-grey-100);
  }

  .noItens span {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-0);
    color: var(--color-grey-50);
  }
`;
