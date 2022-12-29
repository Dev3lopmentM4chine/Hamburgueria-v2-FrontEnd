import { StyledCart } from "./style";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import { useContext, useEffect } from "react";
import { CardContext } from "../../context/cardContext";

export const Cart = () => {
  const {currentSale} = useContext(CardContext)

  return (
    <StyledCart>
      <ul>
        {currentSale.length > 0 ? (
          currentSale.map((element, index) => (
            <CartProduct
              key={index}
              prod={element}
            />
          ))
        ) : (
          <div className="noItens">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        )}
      </ul>
      {currentSale.length > 0 ? (
        <CartTotal />
      ) : (
        ""
      )}
    </StyledCart>
  );
};


