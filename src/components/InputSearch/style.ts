import styled from "styled-components";

export const StyledInputSearch = styled.form`
  width: 90%;
  max-width: 382px;
  height: 60px;
  border: 2px solid var(--color-grey-20);
  border-radius: var(--radius-0);
  background-color: var(--color-white);
  padding: 0px 10px 0px 15px;
  transition: ease .5s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 80px) {
    max-width: 365px;
  }

  & > input {
    font-weight: var(--font-weight-0);
    font-size: var(--font-size-4);
    color: var(--color-grey-50);
    width: 50%;

    ::-webkit-input-placeholder {
      color: var(--color-grey-20);
    }
  }

  & > button {
    width: 53px;

    svg {
      color: var(--color-white);
    }
  }
`;
