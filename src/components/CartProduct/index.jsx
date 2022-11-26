import { StyledCartProduct } from "./style.js";

const CartProduct = ({ prod }) => {
  return (
    <StyledCartProduct>
      <figure>
        <img src={prod.img} alt="Imagem do produto" />
      </figure>

      <div className="ProductInfo">
        <h3 className="name">{prod.name}</h3>
        <span className="category">{prod.category}</span>
        <Button children={"Remover"} type={"button"} />
      </div>
    </StyledCartProduct>
  );
}

export { CartProduct };
