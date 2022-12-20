import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  width: 107px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: var(--font-weight-1);
  font-size: var(--font-size-3);
  border-radius: var(--radius-0);
  padding: 0px 20px;

  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;
