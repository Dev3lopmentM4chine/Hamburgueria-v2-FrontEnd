import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;

  @media (min-width: 800px) {
    
  }

  ul {
    width: 100%;
    min-height: 158px;
    max-height: 360px;
    background-color: var(--color-grey-0);
    overflow: auto;
    padding-top: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;

    @media (min-width: 800px) {
      align-items: flex-start;
    }
  }

  .noItens {
    width: 100%;
    height: 100%;
    margin: auto 0;
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
