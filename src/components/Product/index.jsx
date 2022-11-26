import {StyledProduct} from "./style.js"
import { Button } from "../Button"

function Product({ prod }) {
  return (
    <StyledProduct>
      <figure>
        <img src={prod.img} alt="Imagem do produto" />
        {console.log(prod.img)}
      </figure>

      <div>
        <h3>{prod.name}</h3>
        <span>{prod.category}</span>
        <span>{prod.price}</span>
        <Button children={"Adicionar"} type={"button"}/>
      </div>
    </StyledProduct>
  )
}

export {Product}