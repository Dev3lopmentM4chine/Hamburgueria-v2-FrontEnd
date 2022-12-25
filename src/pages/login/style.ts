import styled from "styled-components";

export const StyledLogin = styled.form`
  width: 95%;
  max-width: 383px;
  height: 461px;
  background-color: var(--color-white);
  border-radius: var(--radius-1);
  border: 2px solid var(--color-grey-0);
  padding: 26px 24px;
  
  display: flex;
  flex-direction: column;
  gap: 19px;

  @media (min-width: 800px) {
    width: 100%;
    max-width: 500px;
    order: -1;
  }

  & > h3 {
    color: var(--color-grey-100);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
  }
  & > .containerInputs,
  .containerButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  & > .containerInputs {
    height: 145px;
    max-height: 195px;
    gap: 25px;
  }
  & > .containerButtons {
    height: 196px;

    span {
      color: var(--color-grey-40);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-0);
      text-align: center;
    }
  }
`;

export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 648px;
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media (min-width: 800px) {
    max-width: 939px;
    height: 461px;
    margin: 0;

    flex-direction: row;
    justify-content: space-between;
  }
`;
