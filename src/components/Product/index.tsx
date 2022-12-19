import { StyledProduct } from "./style";
import { Button } from "../Button";
import { IProductProps } from "./interface";

function Product({ prod, handleClick }: IProductProps) {
  return (
    <StyledProduct>
      <figure>
        <img src={prod.img} alt="Imagem do produto" />
      </figure>

      <div className="ProductInfo">
        <h3 className="name">{prod.name}</h3>
        <span className="category">{prod.category}</span>
        <span className="price">
          {prod.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Button
          children={"Adicionar"}
          type={"button"}
          onClick={() => handleClick(prod.id)}
        />
      </div>
    </StyledProduct>
  );
}

export { Product };
