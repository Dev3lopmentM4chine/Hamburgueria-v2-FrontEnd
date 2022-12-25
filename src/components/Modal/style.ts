import styled from "styled-components";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 98;
  padding: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 800px) {
    padding: 0;
  }
`;

export const StyledModal = styled.div`
  width: 100%;
  max-width: 375px;
  background-color: var(--color-grey-0);
  overflow: hidden;
  border-radius: var(--radius-1);

  @media (min-width: 800px) {
    max-width: 500px;
  }

  & > .panel {
    width: 100%;
    height: 54px;
    padding: 13px 22px;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: var(--color-white);
      font-size: var(--font-size-2);
      font-weight: var(--font-weigth-2);
    }

    button {
      font-size: var(--font-size-4);
      color: var(--color-white);
      opacity: 0.5;
      transition: 0.5s;
    }
    
    button:hover {
      opacity: 1;
      transition: 0.5s;
    }
  }

  & > .content{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
