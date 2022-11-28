import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  max-width: 343px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  figure {
    width: 80px;
    min-width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: var(--radius-0);
    background-color: var(--color-grey-20);
  }
  figure img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .productInfo {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .productInfo h3 {
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-2);
    color: var(--color-grey-100);
    max-width: 9ch;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .productInfo span {
    font-weight: var(--font-weight-0);
    font-size: var(--font-size-3);
    color: var(--color-grey-50);
  }
  button {
    background-color: unset;
    color: var(--color-grey-20);
  }
`;
