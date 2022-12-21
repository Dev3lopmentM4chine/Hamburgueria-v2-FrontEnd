import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";

export const Header = () => {
  const {setModal} = useContext(CardContext)

  return (
    <StyledHeader>
      <Logo />
      <div className="navbar">
        <InputSearch />
        <Button type="button">
          <FaShoppingCart />
        </Button>
        <Button type="button" onClick={() => setModal(true)}>
          <FiLogOut />
        </Button>
      </div>
    </StyledHeader>
  );
};
