import { StyledContainer } from "./style";

interface Ichildren{
  children: React.ReactNode
}

export const Container = ({ children }:Ichildren) => {
  return <StyledContainer>{ children }</StyledContainer>;
};
