import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  width: 100%;
  height: 706px;
  margin: 20px 0px 20px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media (min-width: 800px) {
    max-width: 1023px;
    height: 527px;
    margin: 0;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledRegister = styled.form`
  width: 95%;
  max-width: 377px;
  height: 527px;
  background-color: var(--color-white);
  border-radius: var(--radius-1);
  border: 2px solid var(--color-grey-0);
  padding: 26px 24px;

  display: flex;
  flex-direction: column;
  gap: 27px;

  @media (min-width: 800px) {
    width: 100%;
    max-width: 500px;
    order: 1;
  }

  & > .panel {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      color: var(--color-grey-100);
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-3);
    }

    span {
      color: var(--color-grey-50);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      text-decoration: underline var(--color-grey-50);
      transition: ease 0.5s;
      cursor: pointer;

      :hover {
        transition: ease 0.5s;
        color: var(--color-grey-30);
        text-decoration-color: var(--color-grey-30);
      }
    }
  }
  & > .containerInputs {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  & > .containerButtons {
  }
`;
