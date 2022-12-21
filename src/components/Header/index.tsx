import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch />
    </StyledHeader>
  );
};


