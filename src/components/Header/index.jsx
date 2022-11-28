import { StyledHeader } from "./style.js";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

const Header = ({ filteredProducts }) => {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch />
    </StyledHeader>
  );
};

export { Header };
