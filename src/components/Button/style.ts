import styled, { css } from "styled-components";

interface IStyledButtonProps {
  styledSize?: string | "larguer" | "small";
  styledColor?: string | "grey" | "unset";
  styledIcon?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  ${({ styledSize }) => {
    switch (styledSize) {
      case "larguer":
        return css`
          width: 100%;
          max-width: 347px;
          height: 60px;

          @media (min-width: 800px) {
            max-width: 452px;
          }
        `;
      case "small":
        return null
      default:
        return css`
          width: 100%;
          max-width: 107px;
          height: 40px;
        `;
    }
  }}

  ${({ styledColor }) => {
    switch (styledColor) {
      case "grey":
        return css`
          background-color: var(--color-grey-30);
          color: var(--color-white);
        `;
      case "unset":
        return css`
          background-color: unset;
          color: unset;
        `;
      default:
        return css`
          background-color: var(--color-primary);
          color: var(--color-white);
        `;
    }
  }}

  ${({ styledIcon }) => {
    if(styledIcon === true){
      return css`
        svg{
          font-size: var(--font-size-1);
          color: var(--color-grey-30);
        }
      `
    }
  }}

  font-weight: var(--font-weight-1);
  font-size: var(--font-size-3);
  border-radius: var(--radius-0);
  padding: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;
