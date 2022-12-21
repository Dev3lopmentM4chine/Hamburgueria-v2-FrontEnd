import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import { StyledBackground, StyledModal } from "./style";

export const Modal = (type: string) => {
  const { setModal } = useContext(CardContext);

  return (
    <StyledBackground>
      <StyledModal>
        <div className="panel">
          <h3>{type === "cart" ? "Carrinho de compras" : ""}</h3>
          <button onClick={() => setModal(false)}>X</button>
        </div>

        <div className="content"></div>
      </StyledModal>
    </StyledBackground>
  );
};
