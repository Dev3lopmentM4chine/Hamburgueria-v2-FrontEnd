import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { IHeaderProps } from "./interface";

export const Header = ({ setFilteredProducts }: IHeaderProps) => {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch setFilteredProducts={setFilteredProducts}/>
    </StyledHeader>
  );
};


