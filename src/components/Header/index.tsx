import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import { Modal } from "../Modal";

export const Header = () => {
  const { modal, setModal, logout } = useContext(CardContext);

  return (
    <>
      {modal && <Modal type={"cart"} />}
      <StyledHeader>
        <Logo />
        <div className="navbar">
          <InputSearch />

          <Button
            type="button"
            onClick={() => setModal(true)}
            styledSize="small"
            styledColor="unset"
            styledIcon={true}
          >
            <FaShoppingCart />
          </Button>

          <Button
            type="button"
            onClick={() => logout()}
            styledSize="small"
            styledColor="unset"
            styledIcon={true}
          >
            <FiLogOut />
          </Button>
        </div>
      </StyledHeader>
    </>
  );
};
