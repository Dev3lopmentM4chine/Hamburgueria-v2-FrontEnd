import {StyledProduct} from "./style.js"
import { Button } from "../Button"

function Product({ prod }) {
  return (
    <StyledProduct>
      <figure>
        <img src={prod.img} alt="Imagem do produto" />
        {console.log(prod.img)}
      </figure>

      <div className="ProductInfo">
        <h3 className="name">{prod.name}</h3>
        <span className="category">{prod.category}</span>
        <span className="price">{(prod.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
        <Button children={"Adicionar"} type={"button"}/>
      </div>
    </StyledProduct>
  )
}

export {Product}