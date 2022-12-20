import { StyledHeader } from "./style.js";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

export const Header = ({ setFilteredProducts }) => {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch setFilteredProducts={setFilteredProducts}/>
    </StyledHeader>
  );
};


