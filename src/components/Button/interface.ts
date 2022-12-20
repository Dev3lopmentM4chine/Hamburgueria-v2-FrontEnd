import React from "react";

export interface IButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
