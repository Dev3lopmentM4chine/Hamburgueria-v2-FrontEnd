import {StyledCartTotal} from "./style.js"
import { Button } from "../Button/index"
import { CardContext } from "../../context/cardContext.js"
import {useContext} from "react"

export const CartTotal = () => {
  const {currentSale, setCurrentSale} = useContext(CardContext)

  const counter = currentSale.reduce((x, y) => x + y.price, 0)
  
  const removeAllProducts = () => {
    setCurrentSale([])
  }

  return (
    <StyledCartTotal>
      <div className="cartCounter">
        <span>Total</span>
        <span>{counter.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
      </div>
      
      <Button children={"Remover todos"} type={"button"} onClick={() => removeAllProducts()}/>
    </StyledCartTotal>
  )
}
