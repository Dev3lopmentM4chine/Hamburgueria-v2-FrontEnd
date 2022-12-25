import { StyledCartTotal } from "./style.js";
import { Button } from "../Button/index";
import { CardContext } from "../../context/cardContext.js";
import { useContext } from "react";

interface Icounter{
  
}

export const CartTotal = () => {
  const { currentSale, setCurrentSale } = useContext(CardContext);

  const counter = currentSale.reduce((x:any, y:any) => x + y.price, 0);

  return (
    <StyledCartTotal>
      <div className="cartCounter">
        <span>Total</span>
        <span>
          {counter.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <Button
        children={"Remover todos"}
        type={"button"}
        onClick={() => setCurrentSale([])}
        styledSize="larguer"
        styledColor="grey"
      />
    </StyledCartTotal>
  );
};
