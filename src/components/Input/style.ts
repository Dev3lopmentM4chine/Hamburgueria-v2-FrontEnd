import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  max-width: 347px;
  height: 85px;
  background-color: unset;

  & > label {
  }
  & > input {
    width: 100%;
    height: 60px;
    background-color: var(--color-grey-0);
    border-radius: var(--radius-1);
    border: 2px solid var(--color-grey-0);
    padding-left: 12px;
    font-size: var(--font-size-4);
    color: var(--color-grey-100);

    ::-webkit-input-placeholder {
      color: var(--color-grey-40);
    }

    /* :focus {
      border-color: var(--color-grey-100);
    } */
  }
`;
