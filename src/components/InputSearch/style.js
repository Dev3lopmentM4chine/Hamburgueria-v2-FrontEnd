import styled from "styled-components";

export const StyledInputSearch = styled.div`
  background-color: var(--color-white);
  width: 90%;
  max-width: 382px;
  height: 60px;
  border: 2px solid var(--color-grey-20);
  border-radius: var(--radius-0);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 80px) {
    max-width: 365px;
  }

  input {
    font-weight: var(--font-weight-0);
    font-size: var(--font-size-4);
    color: var(--color-grey-50);
    width: 50%;
  }

  input::-webkit-input-placeholder {
    color: var(--color-grey-20);
  }

  button {}
`;
