import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--color-grey-0);
  padding: 0px 10px 0px 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 6px 0px 25px;
  }

  & > .navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & > .navbar .searchDesktop{
    form{
      display: none;
    }

    button{
      display: flex;
    }

    @media (min-width: 800px) {
      form{
        display: flex;
      }

      button[type='button']{
        display: none;
      }
    }  
  }
`;
