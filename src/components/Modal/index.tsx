import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import { Cart } from "../Cart";
import { StyledBackground, StyledModal } from "./style";

interface IModalProps{
  type: "cart" | string
}

export const Modal = ({type}: IModalProps) => {
  const { setModal } = useContext(CardContext);

  return (
    <StyledBackground>
      <StyledModal>
        <div className="panel">
          <h3>{type === "cart" ? "Carrinho de compras" : ""}</h3>
          <button onClick={() => setModal(false)}>X</button>
        </div>

        <div className="content">
          <Cart/>
        </div>
      </StyledModal>
    </StyledBackground>
  );
};
