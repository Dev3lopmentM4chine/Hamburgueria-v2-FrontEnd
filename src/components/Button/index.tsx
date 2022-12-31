import { StyledButton } from "./style.js";

interface IButtonProps {
  children: string | React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  styledSize?: string | "larguer" | "small";
  styledColor?: string | "grey" | "unset";
  styledIcon?: boolean;
}

export const Button = ({
  children,
  type,
  onClick,
  styledSize,
  styledColor,
  styledIcon,
}: IButtonProps) => {

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      styledSize={styledSize}
      styledColor={styledColor}
      styledIcon={styledIcon}
    >
      {children}
    </StyledButton>
  );
};
