import styled from "styled-components";

export const StyledCartTotal = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 2px solid var(--color-grey-20);

  .cartCounter {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cartCounter .title,
  .value {
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-3);
    color: var(--color-grey-100);
  }
  .cartCounter .value {
    color: var(--color-grey-50);
  }

  button{
    width: 100%;
    height: 60px;
    background-color: var(--color-grey-20);
    color: var(--color-grey-50);
  }
`;
