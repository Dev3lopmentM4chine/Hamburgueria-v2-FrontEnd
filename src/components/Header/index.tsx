import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import { CardContext } from "../../context/cardContext";
import { Modal } from "../Modal";

export const Header = () => {
  const { modal, setModal, logout } = useContext(CardContext);
  const [searchMobile, setSearchMobile] = useState(false);

  return (
    <>
      {modal && <Modal type={"cart"} />}
      <StyledHeader>
        {searchMobile && <InputSearch />}

        {!searchMobile && <Logo />}
        {!searchMobile && (
          <div className="navbar">
            <div className="searchDesktop">
              <InputSearch />

              <Button
                type="button"
                onClick={() => setSearchMobile(!searchMobile)}
                styledSize="small"
                styledColor="unset"
                styledIcon={true}
              >
                <FaSearch />
              </Button>
            </div>

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
        )}
      </StyledHeader>
    </>
  );
};
