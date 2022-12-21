import styled from "styled-components";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 98;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledModal = styled.div`
  width: 100%;
  max-width: 296px;
  height: 274px;
  border-radius: var(--radius-0);
  background-color: var(--gray-scale-3);
  overflow: hidden;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 800px) {
    max-width: 369px;
    height: 342px;
  }

  & > .panel {
    width: 100%;
    height: 40px;
    background-color: var(--gray-scale-2);
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: var(--font-size-1);
      color: var(--gray-scale-0);
      font-weight: var(--font-weigth-3);
    }

    button {
      font-size: var(--font-size-1);
      color: var(--gray-scale-0);
      font-weight: var(--font-weigth-3);
      transition: .5s;
      &:hover {
        transition: .5s;
        color: var(--gray-scale-3);
      }
    }

    @media (min-width: 800px) {
      padding: 12px 20px;
      height: 50px;
    }
  }

  & > .content {
    width: 100%;
    height: 100%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
