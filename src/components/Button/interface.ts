export interface IButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
