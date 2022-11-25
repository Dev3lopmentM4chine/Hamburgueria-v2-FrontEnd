import {StyledButton} from "./style.js"

const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export {Button}