import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 300px;
  min-width: 300px;
  height: 346px;
  border-radius: var(--radius-1);
  border: 2px solid var(--color-grey-20);
  transition: ease .5s;
  
  :hover{
    border: 2px solid var(--color-primary);
    transition: ease .5s;
  }
  :hover button[type="button"]{
    transition: ease .5s;
    background-color: var(--color-primary);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  figure {
    width: 100%;
    height: 150px;
    overflow: hidden;
    background-color: var(--color-grey-0);
  }
  figure img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .ProductInfo {
    height: 153px;
    width: 262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ProductInfo .name {
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-2);
    color: var(--color-grey-100);
  }

  .ProductInfo .category {
    font-weight: var(--font-weight-0);
    font-size: var(--font-size-3);
    color: var(--color-grey-50);
  }
  .ProductInfo .price {
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-3);
    color: var(--color-primary);
  }
`;
