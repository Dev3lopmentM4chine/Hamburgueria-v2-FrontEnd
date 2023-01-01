import { StyledCartTotal } from "./style.js";
import { Button } from "../Button/index";
import { CardContext } from "../../context/cardContext.js";
import { useContext, useEffect } from "react";
import { IProducts } from "../../services/interface.js";

export const CartTotal = () => {
  const { counter, currentSale,setCurrentSale } = useContext(CardContext);

  return (
    <StyledCartTotal>
      <div className="cartCounter">
        <span>Total</span>
        <span>
          {counter(currentSale).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <Button
        children={"Remover todos"}
        type={"button"}
        onClick={() => {
          setCurrentSale([])
          console.log(currentSale)
        }}
        styledSize="larguer"
        styledColor="grey"
      />
    </StyledCartTotal>
  );
};
