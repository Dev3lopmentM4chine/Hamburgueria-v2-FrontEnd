import { StyledButton } from "./style.js";
import { IButtonProps } from "./interface.js";

export const Button = ({ children, type, onClick }: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
