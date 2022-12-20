import { StyledCartProduct } from "./style.js";
import { Button } from "../Button";
import { IProducts } from "../../services/interface.js";
import { ICartProductProps } from "./interface.js";

export const CartProduct = ({ prod, currentSale ,setCurrentSale }: ICartProductProps) => {
  const deleteProduct = (productId: number) => {
    setCurrentSale(currentSale.filter((element: IProducts) => element.id !== productId))
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
      <Button children={"Remover"} type="button" onClick={() => deleteProduct(prod.id)}/>
    </StyledCartProduct>
  );
};
