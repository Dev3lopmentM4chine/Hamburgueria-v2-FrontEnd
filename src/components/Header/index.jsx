import { StyledHeader } from "./style.js";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

const Header = ({ filteredProducts, setFilteredProducts }) => {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch setFilteredProducts={setFilteredProducts}/>
    </StyledHeader>
  );
};

export { Header };
