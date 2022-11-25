import { StyledHeader } from "./style.js";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch />
    </StyledHeader>
  );
};

export { Header };
