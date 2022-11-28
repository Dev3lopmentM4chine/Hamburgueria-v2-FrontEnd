import { StyledCartProduct } from "./style.js";
import { Button } from "../Button";

const CartProduct = ({ prod, currentSale ,setCurrentSale }) => {
  const deleteProduct = (productId) => {
    setCurrentSale(currentSale.filter(element => element.id !== productId))
  }

  return (
    <StyledCartProduct>
      <figure>
        <img src={prod.img} alt="Imagem do produto" />
      </figure>

      <div className="productInfo">
        <h3 className="name">{prod.name}</h3>
        <span className="category">{prod.category}</span>
      </div>
      <Button children={"Remover"} type={"button"} onClick={() => deleteProduct(prod.id)}/>
    </StyledCartProduct>
  );
};

export { CartProduct };
